import { getClients } from '../../supabase/apiClients';

export function loader() {
  const clients = getClients();
  return clients;
}
