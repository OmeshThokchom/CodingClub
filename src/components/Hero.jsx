import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline';

const hero = () => {
  return (
    <main className="flex pt-20 flex-col lg:flex-row items-centre justify-between min-h-[calc(90vh-6rem)]">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 lg:mt-0">
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center' >
                    <i class='bx bx-diamond'></i>CODE HIVE
                </div>
            </div>

            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
              Our vision is to build a community where every student who wants to code can code, empowered with the right guidance, mentorship, and opportunities. From helping freshers overcome their first coding challenges to supporting seniors in choosing the right competitions and preparing effectively, we aim to make coding accessible, collaborative, and inspiring for all at Royal Global University.
            </p>

            <div className='flex gap-4 mt-12'>

              <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href='#'>
                Our Vision <i className='bx bx-link-external'></i>
              </a>

              <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] ' href='#'>
                Join Us <i className='bx bx-link-external'></i>
              </a>


            </div>
        </div>

        <Spline data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className='absolute lg:top-0 top-[-10%] h-full w-full z-0' scene="https://prod.spline.design/Qy3jSIZm8GWiJJhi/scene.splinecode" />

        
    </main>
  )
}

export default hero

