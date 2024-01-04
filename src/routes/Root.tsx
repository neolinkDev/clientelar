import { Outlet, Link, useLocation } from 'react-router-dom';

function Root() {
  const location = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-[#20252c] px-5 py-10">
        <h2 className="text-4xl text-[#d5dce2] text-center font-black">
          Clientelar
        </h2>

        <nav className="mt-10">
          <Link
            className={`${
              location.pathname === '/' ? 'text-[#d5dce2]' : 'text-[#8598ab]'
            } text-2xl block text-[#8598ab] mt-2 hover:text-[#d5dce2]`}
            to="/"
          >
            Clientes
          </Link>

          <Link
            className={`${
              location.pathname === '/clientes/nuevo'
                ? 'text-[#d5dce2]'
                : 'text-[#8598ab]'
            } text-2xl block text-[#8598ab] mt-2 hover:text-[#d5dce2]`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 bg-[#b0bcc9] p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
