import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">

      <aside className="md:w-1/4 bg-[#20252c] px-5 py-10">

        <h2 
          className='text-4xl text-[#d5dce2] text-center font-black'
        >
            Clientelar
        </h2>

      </aside>

      <main className="md:w-3/4 bg-[#b0bcc9] p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
