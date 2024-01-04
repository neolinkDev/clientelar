import { Params, redirect } from 'react-router-dom';
import { deleteClient } from '../../supabase/apiClients';

export async function action({ params }: { params: Params<string> }) {

  const id = params.id || '';
  await deleteClient(id);
  return redirect('/');
}
