import React from 'react';
import FooterForest from '../assets/images/footerforestimg.webp';
import { FooterDiscord, FooterInstagram, FooterTwitter } from './Icons';

const Footer = () => {
    return (
        <div>
            <div className='relative lg:mt-[248px] md:mt-[150px] sm:mt-[100px] mt-[100px] pb-[100px] lg:pb-[267px] md:pb-[150px]'>
                <div data-aos="fade-down" className='container mx-auto xl:max-w-[1038px] xl:px-3 px-6 relative z-10 flex flex-col lg:gap-[33px] gap-[20px] justify-center items-center'>
                    <h2 className='font-dino text-[80.366px] text-center leading-[95%] font-normal text-[#FBA11D] drop-shadow-[0px_1.337px_0px_#000]'>
                        D
                        <span className='text-[#23AAAC]'>i</span>
                        <span className='text-[#D45B07]'>n</span>
                        <span className='text-[#8EC627]'>o</span>
                        <span className='text-[#FCCA2B]'>L</span>
                        <span className='text-[#8F78D2]'>F</span>
                        <span className='text-[#8EC627]'>G</span>
                    </h2>
                    <p className='text-[14px] font-normal font-balsamiq text-center text-white max-w-[376px] leading-[122%]'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                    <div className='flex items-center justify-center gap-2'>
                        <a className=' hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://twitter.com/i/flow/login" target='_blank' rel='noreferrer' aria-label="Twitter"><FooterTwitter /></a>
                        <a className=' hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://discord.com/" target='_blank' rel='noreferrer' aria-label="Discord"><FooterDiscord /></a>
                        <a className=' hover:-translate-y-1 duration-300 rounded-full hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]' href="https://www.instagram.com/" target='_blank' rel='noreferrer' aria-label="Instagram"><FooterInstagram /></a>
                    </div>
                </div>
                <img src={FooterForest} alt="FooterForest" className='absolute 2xl:bottom-[-5%] bottom-0 left-0 right-0 w-full' />
            </div>
        </div>
    )
}

export default Footer