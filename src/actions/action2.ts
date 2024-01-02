import { Params, redirect } from "react-router-dom";
// import { RouteParams } from "../interfaces";
import { updateClient } from "../supabase/apiClients";


export async function action({ request, params }: { request: Request, params:Params<string> }){
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const validate = await validateFormdata(data, params);

  return validate;
}

const validateFormdata = async (data: { [k: string]: FormDataEntryValue }, params: Params<string>) => {
  console.log(params)
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
  
  const id = params.id || '';

  // update client
  await updateClient(id, data);

  return redirect('/');
};