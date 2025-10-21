export interface User {
  id?: string;             // lo añadimos localmente (viene como key en RTDB)
  nombre: string;
  email: string;
  rol: "user" | "admin";
}
