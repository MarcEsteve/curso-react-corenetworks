import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

function mapAuthError(code?: string) {
  switch (code) {
    case "auth/email-already-in-use": return "Este email ya está registrado.";
    case "auth/invalid-email": return "Formato de email inválido.";
    case "auth/weak-password": return "Contraseña demasiado débil (mín. 6).";
    case "auth/user-not-found":
    case "auth/wrong-password": return "Credenciales incorrectas.";
    default: return "Error de autenticación.";
  }
}

export default function Login() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passOk = pass.length >= 6;
  const passMatch = pass === pass2 || mode === "login";
  const nombreOk = mode === "login" ? true : nombre.trim().length >= 2;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null); setErr(null);

    if (!emailOk) return setErr("Email no válido");
    if (!passOk) return setErr("La contraseña debe tener mínimo 6 caracteres");
    if (!passMatch) return setErr("Las contraseñas no coinciden");
    if (!nombreOk) return setErr("Introduce tu nombre (mín. 2 letras)");

    try {
      setLoading(true);

      if (mode === "register") {
        const cred = await createUserWithEmailAndPassword(auth, email, pass);

        // Opcional: poner displayName en el perfil de Auth
        if (nombre) {
          await updateProfile(cred.user, { displayName: nombre });
        }

        // Guardar perfil en Firestore (colección "usuarios", doc = uid)
        await setDoc(doc(db, "usuarios", cred.user.uid), {
          uid: cred.user.uid,
          email,
          nombre,
          createdAt: serverTimestamp(),
        });

        setOk("✅ Cuenta creada y perfil guardado.");
      } else {
        await signInWithEmailAndPassword(auth, email, pass);
        setOk("✅ Sesión iniciada.");
      }
    } catch (e: any) {
      setErr(mapAuthError(e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 380, margin: "24px auto" }}>
      <h2>{mode === "register" ? "Registro" : "Login"} (Avanzado)</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10 }}>
        {mode === "register" && (
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="name"
          />
        )}
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Contraseña (mín. 6)"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          autoComplete={mode === "login" ? "current-password" : "new-password"}
        />
        {mode === "register" && (
          <input
            type="password"
            placeholder="Repite la contraseña"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            autoComplete="new-password"
          />
        )}

        <button disabled={loading}>
          {loading ? "Procesando…" : mode === "register" ? "Crear cuenta" : "Entrar"}
        </button>
      </form>

      {err && <p style={{ color: "crimson", marginTop: 8 }}>{err}</p>}
      {ok && <p style={{ color: "seagreen", marginTop: 8 }}>{ok}</p>}

      <button
        onClick={() => setMode(mode === "register" ? "login" : "register")}
        style={{ marginTop: 10 }}
      >
        Cambiar a {mode === "register" ? "Login" : "Registro"}
      </button>
    </div>
  );
}
