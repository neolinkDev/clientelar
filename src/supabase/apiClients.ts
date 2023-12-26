import supabase from './connection';

export async function getClients() {

  const { data: clientes, error } = await supabase.from('clientes').select('*');

  if (error) {
    console.log(error);
    throw new Error('tabla "clientes" no pudo ser cargada');
  }

  return clientes;
}

//
export async function addClient(data: { [k: string]: FormDataEntryValue }) {

  console.log(data)

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
 