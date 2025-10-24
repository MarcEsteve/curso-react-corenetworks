export const API_URL = "http://localhost:4000/api";

async function req<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" }, ...options,
  });
  if (!res.ok) throw new Error((await res.json().catch(()=>({}))).error || res.statusText);
  return res.json();
}
export const VehiculosAPI = {
  list: () => req<any[]>("/vehiculos"),
  get: (id: string) => req<any>(`/vehiculos/${id}`),
  create: (data: any) => req<any>("/vehiculos", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: any) => req<any>(`/vehiculos/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  remove: (id: string) => req<{ok:boolean}>(`/vehiculos/${id}`, { method: "DELETE" }),
};
