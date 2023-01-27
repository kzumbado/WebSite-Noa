
import {NavLink}  from 'react-router-dom';



export const Error404 = () => {
  return (
    <>
    
    <div className="grid h-screen place-content-center bg-white">
      <div className="text-center max-w-sm">
        <strong className="text-9xl font-black text-gray-300">404</strong>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">Esta página no existe o no se encuentra disponible. Por favor regresa al inicio.</p>

        <NavLink
          to={`/`}
          className="mt-6 inline-block rounded bg-primary-100 px-5 py-3 text-sm font-medium text-white hover:bg-primary-200 focus:outline-none focus:ring"
        >
          Regresar
        </NavLink>
      </div>
    </div>
    
    
    
    
    </>
  )
}



