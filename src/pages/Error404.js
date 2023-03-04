
import {NavLink}  from 'react-router-dom';
import useTranslate from '../hooks/useTranslation';
import Footer from '../components/Footer';
  

export const Error404 = () => {

  const {t}= useTranslate();


  return (
    <>
    
    <div className="grid h-screen place-content-center bg-white dark:bg-backgroundNight">
      <div className="text-center max-w-sm">
        <strong className="text-9xl font-black text-gray-300">404</strong>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">{t("404.message")}</p>

        <NavLink
          to={`/`}
          className="mt-6 inline-block rounded bg-primary-100 px-5 py-3 text-sm font-medium text-white hover:bg-primary-200 focus:outline-none focus:ring"
        >
          {t("404.return")}
        </NavLink>
      </div>
    </div>
    
    
    <Footer/>
    
    </>
  )
}



