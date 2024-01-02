import { useNavigate } from 'react-router-dom';
import { ClientProps } from '../interfaces';



export const Client = ({ client }: ClientProps) => {

  const navigate = useNavigate()

  const { id, name, email, phone, company_name: company } = client;

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <p className='text-xl'>{ name }</p>
        <p>{ company }</p>
      </td>

      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <p><span className='font-bold'>Correo: </span>{ email }</p>
        <p><span className='font-bold'>Teléfono: </span>{ phone }</p>
      </td>

      <td className="flex gap-2 px-4 py-2">

        <button 
          className="inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700 uppercase"
          onClick={() => navigate(`/clientes/${id}/editar`) }
        >
          Editar
        </button>

        <button 
          className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 uppercase">
          Eliminar
        </button>

      </td>
      
    </tr>
  );
};
