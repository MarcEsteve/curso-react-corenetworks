import { createContext, useContext, useEffect, useState } from "react";
import { type User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

type Role = "user" | "admin" ;

type Perfil = {
  uid: string;
  email: string;
  nombre?: string;
  role: Role;
};

interface AuthContextType {
  user: User | null;
  profile: Perfil | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // carga el perfil (incluye role) desde Firestore
        const snap = await getDoc(doc(db, "usuarios", firebaseUser.uid));
        setProfile(snap.exists() ? (snap.data() as Perfil) : null);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
