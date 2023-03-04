import React, {useState, useEffect} from 'react';
import {
    EnvelopeIcon,
    LockClosedIcon,
    XMarkIcon
  } from '@heroicons/react/24/solid';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate, NavLink} from 'react-router-dom';
import {auth} from '../config/firebase';

function LoginPage() {
    const WAIT_TIME = 1000; //Waits for 0.5s

    const [loginPass, setLoginPass] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const navigate = useNavigate();

    async function logInUser() {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPass
            );
            if (user) {
                setShouldRedirect(true);
            }
        }catch (e) {
            console.log(e.message);
            switch(e.message) {
                case "Firebase: Error (auth/invalid-email).":
                    alert('¡Debe ingresar un correo electrónico válido!')
                    break;
                case "Firebase: Error (auth/user-not-found).":
                    alert('¡El correo electrónico y/o la contraseña no coinciden con ningún usuario!')
                    break;
                case "Firebase: Error (auth/wrong-password).":
                    alert('¡El correo electrónico y/o la contraseña no coinciden con ningún usuario!')
                    break;
                default:
                    alert('¡Error desconocido mientras iniciaba sesión en su cuenta!')
                    break;
            } 
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        logInUser();
    }

    useEffect(() => {
        if (shouldRedirect){
            const interval = setInterval(() => {
                navigate('/');
                setShouldRedirect(false);
            }, WAIT_TIME);
            return () => clearInterval(interval);
        }
      }, [shouldRedirect, navigate]);
  return (
    <div>
        <div className='relative w-screen z-10'>
            <NavLink to="/">
                <XMarkIcon className='absolute top-4 right-4 h-10 w-10 hover:text-primary-100' />
            </NavLink>
        </div>

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Inicia Sesión
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Completa los datos para acceder a tu cuenta
        </div>

        <div className="mt-10">
          <form onSubmit={submitHandler}>
            <div className="flex flex-col mb-5">
                <label
                    htmlFor="email"
                    className="mb-1 text-xs tracking-wide text-gray-600"
                >
                    Correo Electrónico:
                </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <EnvelopeIcon className="h-6 w-6 text-primary-100"></EnvelopeIcon>
                </div>

                <input
                  onChange={(ev) => {setLoginEmail(ev.target.value)}}
                  id="email"
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Ingrese su correo electrónico"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Contraseña:
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <LockClosedIcon className="h-6 w-6 text-primary-100"></LockClosedIcon>
                  </span>
                </div>

                <input
                  onChange={(ev) => {setLoginPass(ev.target.value)}}
                  id="password"
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Ingrese una contraseña"
                  required
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-primary-100
                  hover:bg-primary-200
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Iniciar Sesión</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default LoginPage;
