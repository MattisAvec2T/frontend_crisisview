const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const API = {
  incidents:    `${API_BASE_URL}/incidents`,
  techniciens:  `${API_BASE_URL}/techniciens`,
  interventions:`${API_BASE_URL}/interventions`,
};
