import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export default function FirestoreDemo() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  // Leer documentos de la colección "usuarios"
  const cargarUsuarios = async () => {
    const snapshot = await getDocs(collection(db, "usuarios"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsuarios(data);
  };

  // Añadir nuevo documento
  const agregarUsuario = async () => {
    if (!nombre || !email) return;
    await addDoc(collection(db, "usuarios"), { nombre, email });
    setNombre("");
    setEmail("");
    cargarUsuarios(); // actualizar lista
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);


  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Firestore Demo</h2>

      <input
        type="text"
        placeholder="Nuevo usuario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={agregarUsuario}>Agregar</button>

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
