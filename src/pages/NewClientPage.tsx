import { Form, useActionData, useNavigate } from 'react-router-dom';
import { FormComponent } from '../components/Form';
import { Error } from '../components/Error'

type ErrorType = string[];

function NewClientPage() {

  const errors = useActionData() as ErrorType;
  
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-[#425162] capitalize">nuevo cliente</h1>
      <p className="mb-3">Registra un nuevo cliente</p>

      <div className="flex justify-end">
        <button 
          className="inline-block mb-3 rounded bg-[#425162] px-3 py-1 text-xs font-medium text-white hover:bg-[#394553] uppercase"
          onClick={ () => navigate(-1)}
        >
          volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">

        {
          errors?.length && errors.map((error, index) => <Error key={ index }>{ error }</Error>)
        }

        <Form 
          method='POST'
        >
          <FormComponent />
          
          <div className='text-right'>
            <button 
              type="submit" 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
              Registrar Cliente
            </button>

          </div>

        </Form>
      </div>
    </>
  )
}

export default NewClientPage;