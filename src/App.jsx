import Header from "./components/Header";
import Hero from "./components/Hero";
import Aos from "aos";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Showcase from "./components/Showcase";

export default function App() {

  useEffect(() => {
    AOS.init({duration:1500, once:true,})
  })


  return (
    <main>
      {/* gradient iamge */}
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />

      {/* blurr part */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]"></div>
      <div className="h-0 w-[50rem] absolute top-[30%] right-[-10%] shadow-[0_0_900px_20px_#e99b63] -rotate-[45deg]"></div>
      <div className="h-0 w-[60rem] absolute top-[40%] right-[-15%] shadow-[0_0_900px_20px_#e99b63] -rotate-[55deg]"></div>
      

      <Header/>
      <Hero/>
      <Showcase/>

    </main>
  )
}