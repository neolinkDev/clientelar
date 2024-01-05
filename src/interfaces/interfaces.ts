export interface Clients {
  company_name: string | null;
  created_at?: string;
  email: string | null;
  id?: number;
  name: string | null;
  phone: string | null;
}

export interface ClientProps {
  client: Clients;
}

export type ErrorType = string[];