import { useLoaderData } from 'react-router-dom';
import { Clients } from '../interfaces';
import { Client } from '../components/Client';


function IndexPage() {

  const clients = useLoaderData() as Clients[];

  return (
    <>
      <h1 className="font-black text-4xl text-[#425162]">Clientes</h1>
      <p className="mb-3">Gestiona los Clientes</p>

      {
        clients.length ? (

          // <div className="overflow-x-auto">
             
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cliente</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Contácto</th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Acciones</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">

                {
                  clients.map( client => (
                    <Client client={ client } key={ client.id } />
                  ))
                }
              
              </tbody>
            </table>
          // </div>

        ) : (
          <p className="text-center mt-10">Sin Clientes</p>
        )
      }
    </>
  );
}

export default IndexPage;
