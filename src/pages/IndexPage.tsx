import { useLoaderData } from 'react-router-dom';
import { Clients } from '../interfaces';
import { Client } from '../components/Client';



function IndexPage() {

  const clients = useLoaderData() as Clients[];
  console.log(clients)

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
                
                {/* <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr> */}
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
