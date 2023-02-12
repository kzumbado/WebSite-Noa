import DownloadCard from "../components/DownloadCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import WhyChooseUs from "../components/WhyChooseUs"

const Download = () => {
  return (

    <>

    <NavBar activeLink={'/download'}/>
        <div className='h-[96px] bg-background dark:bg-backgroundNight'></div>

       <DownloadCard/>
    
      <WhyChooseUs/>

    
        <Footer />
    </>




  )
}

export default Download
