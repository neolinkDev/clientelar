// import { getClient } from '../apiClients';

import { Params } from 'react-router-dom';
import { getClientById } from '../apiClients';
// import { RouteParams } from '../../interfaces';



export const loader = async ({ params }: {params: Params<string>}) => {
  
  const id = params.id || '';

  const client = await getClientById(id);

  if (!client || Object.values(client).length === 0) {
    throw new Error('Cliente no existe');
  }
  console.log(client);
  return client;
};
