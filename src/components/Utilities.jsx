import React from 'react';
import crocoWithGlasses from '../assets/images/croco-with-glass.webp';
import crocoWithCycle from '../assets/images/croco-with-cycle.webp';
import utilityTree from '../assets/images/utility-tree.webp';
import utilityLayer from '../assets/images/utilitylayer.webp';
import TimelineLayer from '../assets/images/roadmaplayer.webp';

const Utility = () => {
    return (
        <div className='relative overflow-x-clip '>
            <img src={utilityLayer} alt="utilityLayer" className='-translate-y-1 w-full' />
            <div className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10'>
                <h2 className='font-chewy sm:text-[64px] text-[40px] font-normal text-white text-center leading-[132%]'>Utility and Usecase</h2>
                <div className='relative z-10 xl:mt-[158px] max-lg:overflow-hidden lg:mt-[100px] md:mt-[70px] mt-[40px] rounded-[20px] border border-solid lg:h-[266px] border-white bg-[#09655A] lg:py-[62px] pt-[40px] lg:pl-[39px] lg:pr-[26px] px-[20px] flex lg:justify-between lg:flex-row flex-col'>
                    <div data-aos="fade-right">
                        <p className='max-w-[681px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white leading-[119%] font-balsamiq'>We are going to work hard in otder to add <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span> to main platforms as a form of payment</p>
                        <p className='max-w-[695px] xl:text-[32px] lg:text-[29px] sm:text-[32px] text-[23px] font-normal text-white mt-[28px] leading-[120%] font-balsamiq'>You will be able to buy a lot of things with <span className='text-[#8EC627]'>$</span>
                            <span className='text-[#FBA11D]'>D</span>
                            <span className='text-[#23AAAC]'>I</span>
                            <span className='text-[#D45B07]'>N</span>
                            <span className='text-[#FB5352]'>O</span></p></div>
                    <img src={crocoWithGlasses} alt="crocoWithGlasses" className='sm:max-w-[253px] max-w-[160px] lg:mt-0 mt-6  lg:h-[332px] utility_croco w-full' />
                </div>
                <div className='relative max-lg:overflow-hidden z-20 lg:mt-[125px] mt-[60px] rounded-[20px] border border-solid bg-[#09655A] lg:py-[95px] pt-[40px] lg:pr-[27px] lg:pl-0 px-5 lg:h-[266px] border-white flex lg:justify-between lg:flex-row flex-col-reverse lg:items-center '>
                    <img src={crocoWithCycle} alt="crocoWithCycle" className='sm:max-w-[267px] utility_croco1 max-w-[160px] lg:h-[334px] lg:translate-y-[-35px] lg:mt-0 mt-7 lg:ml-[-6px]' />
                    <div data-aos="fade-left" className=''>
                        <p className='sm:text-[32px] text-[25px] font-normal lg:text-end text-center text-white leading-[119%]  font-balsamiq'>We are going to have staking and buyback/ burning mechanism</p>
                    </div>
                </div>
                <img src={utilityTree} alt="utilityTree" className='lg:max-w-[320px] max-w-[200px] w-full absolute lg:right-[-20%] right-[-14%] bottom-0' />
            </div>
            <img src={TimelineLayer} alt="TimelineLayer" className=' mt-14 lg:mt-[168px] translate-y-3 w-full' />
        </div>
    )
}

export default Utility