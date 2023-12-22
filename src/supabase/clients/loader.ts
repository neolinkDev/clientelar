// import supabase from '../connection';

import { getClients } from '../apiClients';

export function loader() {

  const clients = getClients();
  return clients;
  
}
