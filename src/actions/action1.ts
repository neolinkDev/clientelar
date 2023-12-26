import { redirect } from 'react-router-dom';
import { addClient } from '../supabase/apiClients';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const validate = await validateFormdata(data);

  return validate;
}

const validateFormdata = async (data: { [k: string]: FormDataEntryValue }) => {
  const errors = [];

  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son requeridos');
  }

  // add email validation
  // eslint-disable-next-line no-useless-escape
  const emailRegex = new RegExp(
    '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$'
  );
  const email = data['email'] as string;
  if (!emailRegex.test(email)) {
    errors.push('El correo electrónico proporcionado no es válido');
  }

  // return data if there are errors
  if (Object.keys(errors).length) {
    return errors;
  }

  await addClient(data);

  return redirect('/');
};
