import supabase from './connection';

export async function getClients() {

  const { data: clientes, error } = await supabase.from('clientes').select('*');

  if (error) {
    console.log(error);
    throw new Error('tabla "clientes" no pudo ser cargada');
  }

  return clientes;
}

