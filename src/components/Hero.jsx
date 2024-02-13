import React from 'react'
import Aeroplane from '../assets/images/aeroplane.webp';
import CycleDino from '../assets/images/bycyclecroco.webp';
import SmallCycle from '../assets/images/footcyclecroco.webp';
const Hero = () => {
    return (
        <header className=" bg-cover bg-center w-full min-h-[730px] sm:min-h-[890px] 2xl:min-h-[100vh] relative overflow-hidden -top-[100px]">
            <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto max-w-[1040px] z-[3] mt-[140px] sm:mt-[178px] relative gap-5'>
                <div className='flex items-center md:items-end max-lg:justify-center'>
                    <img className='w-full max-w-[250px] md:max-w-[394px] max-h-[170px] md:max-h-[240px] utility_croco1' src={Aeroplane} alt="aeroplane" />
                </div>
                <h1 data-aos="zoom-in" className='font-dino text-[100px] sm:text-[120px] md:text-[150px] lg:text-[175.64px] font-normal leading-[106.13px] sm:leading-[126.13px] md:leading-[146.13px] lg:leading-[166.13px]  ml-3 sm:ml-6 flex flex-col text-center uppercase drop-shadow-[0px_6px_0px_#000000]'>
                    <span>
                        <span className='text-[#FBA11D]'>D</span>
                        <span className=' text-[#23AAAC]'>i</span>
                        <span className=' text-[#D45B07]'>n</span>
                        <span className='text-[#8EC627]'>o</span>
                    </span>
                    <span>
                        <span className='text-[#8EC627]'>L</span>
                        <span className='text-[#FCCA2B]'>F</span>
                        <span className='text-[#8F78D2]'>G</span>
                    </span>
                </h1>
            </div>
            <img className='absolute bottom-[7%] sm:bottom-[11%] md:bottom-[14%] lg:bottom-[12%] xl:bottom-[11%] right-[67%] lg:right-[44%] z-[1] max-w-[60px] w-full  sm:max-w-[90px] md:max-w-[111px] lg:max-w-[131px] utility_croco1' src={CycleDino} alt="" />
            <img className='absolute bottom-[1%]  md:bottom-[1%] xl:bottom-0 z-[1] right-10 md:right-20 max-w-[80px] sm:max-w-[120px] w-full lg:max-w-[211px] lg:w-[14%] 2xl:w-full animate-flip' src={SmallCycle} alt="" />
        </header>
    )
}
export default Hero