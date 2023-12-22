
export async function action({ request }: { request: Request }){

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const validate = validateFormdata(data);

  return validate;
}


const validateFormdata = (data: {[k: string]: FormDataEntryValue;}) => {

  const errors = [];

  if(Object.values(data).includes('')){
    errors.push('Todos los campos son requeridos');
  }

  // return data if there are errors
  if(Object.keys(errors).length){
    return errors;
  }

  // console.log(errors)
  // console.log(data)
}