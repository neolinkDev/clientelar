import supabase from './connection';

//
export async function getClients() {
  const { data: clientes, error } = await supabase
    .from('clientes')
    .select('*')
    .order('id');

  if (error) {
    console.log(error);
    throw new Error('tabla "clientes" no pudo ser cargada');
  }

  return clientes;
}

//
export async function getClientById(id: string) {
  const { data: client, error } = await supabase
    .from('clientes')
    .select('*')
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(`No se pudo obtener el cliente con el ID ${id}`);
  }

  return client[0];
}

//
export async function addClient(data: { [k: string]: FormDataEntryValue }) {
  console.log(data);

  try {
    const { data: newClient, error } = await supabase
      .from('clientes')
      .insert([data]);

    if (error) {
      console.log(error);
      throw new Error('No se pudo agregar al cliente');
    }

    return newClient;
  } catch (error) {
    console.error(error);
  }
}

//
export async function updateClient(
  id: string,
  data: { [k: string]: FormDataEntryValue }
) {
  const { data: putClient, error } = await supabase
    .from('clientes')
    .update(data)
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(`No se pudo actualizar el cliente con el ID ${id}`);
  }

  return putClient;
}

//
export async function deleteClient(id: string){
  const { data: deletingClient, error } = await supabase
    .from('clientes')
    .delete()
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error(`No se pudo actualizar el cliente con el ID ${id}`);
  }

  return deletingClient;
}
