import { useTranslation } from "react-i18next";


const useTranslate = () => {

    const [t, i18n]=useTranslation("global");


  return {
    t,
    i18n
  }

}

export default useTranslate