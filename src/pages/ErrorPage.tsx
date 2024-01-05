import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {

  const error = useRouteError() as Error;

  return (
    <div className="grid h-screen place-content-center bg-[#b0bcc9] px-4">
      <h1>Oops!</h1>
      <p>Lo siento, un error inesperado ha ocurrido.</p>
      <p>
        <i>{ error.message }</i>
      </p>
    </div>
  );
};
