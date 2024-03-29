import React from "react";
import { Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import Faqlayer1 from '../assets/images/faqlayer1.webp';
function Arrow({ id, open }) {
    return (
        <div className="relative ">
            <svg className={`${id === open ? "rotate-180" : "rotate-0"}  sm:mr-6   transition-transform`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)" fill="white" />
                <path d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z" fill="#0A4740" />
            </svg>
        </div>
    );
}
function Faq() {
    const [open, setOpen] = React.useState();

    const AccordionOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div id="faq" className="relative">
            <div className="max-w-[1140px] mx-auto px-3  lg:pt-[310px] md:pt-[200px] sm:pt-[150px] pt-[100px]">
                <h2 className='sm:text-[64px] text-[40px] leading-[132%] text-center font-normal font-chewy text-white lg:mb-[61px] mb-[35px]'>FAQs</h2>
                <div data-aos-delay="400" data-aos="zoom-in" className=" mx-auto relative max-w-[800px] px-2 ">
                    <Accordion onClick={() => AccordionOpen(1)} className={`border-white cursor-pointer border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 1 ? 'rounded-[26px] sm:rounded-[45px] ' : 'rounded-full'}`} open={open === 1} icon={<Arrow id={1} open={open} />}                >
                        <AccordionHeader className="font-balsamiq text-[12px] sm:text-[16px] md:text-[20px] text-start font-bold text-white w-full justify-between" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                        <AccordionBody className="font-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                    </Accordion>
                    <Accordion onClick={() => AccordionOpen(2)} className={`border-white cursor-pointer border bg-[#09655A] mb-6 overflow-hidden rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 2 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 2} icon={<Arrow id={2} open={open} />} >
                        <AccordionHeader className="font-balsamiq text-[12px] sm:text-[16px] md:text-[20px] text-start font-bold text-white"> Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                        <AccordionBody className="font-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                    </Accordion>
                    <Accordion onClick={() => AccordionOpen(3)} className={`border-white cursor-pointer border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 3 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 3} icon={<Arrow id={3} open={open} />}>
                        <AccordionHeader className="font-balsamiq text-[12px] sm:text-[16px] md:text-[20px] text-start font-bold text-white" >Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                        <AccordionBody className="font-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                    </Accordion>
                    <Accordion onClick={() => AccordionOpen(4)} className={`border-white cursor-pointer border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 4 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 4} icon={<Arrow id={4} open={open} />}>
                        <AccordionHeader className="font-balsamiq text-[12px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                        <AccordionBody className="font-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                    </Accordion>
                    <Accordion onClick={() => AccordionOpen(5)} className={`border-white cursor-pointer border bg-[#09655A] mb-6 rounded-full p-3 sm:pt-[30px] sm:pb-[27px] sm:ps-[26px] ${open === 5 ? 'rounded-[26px] sm:rounded-[45px]' : 'rounded-full'}`} open={open === 5} icon={<Arrow id={5} open={open} />}>
                        <AccordionHeader className="font-balsamiq text-[12px] sm:text-[16px] md:text-[20px] text-start font-bold text-white">Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                        <AccordionBody className="font-balsamiq text-[14px] md:text-[16px] font-medium text-white max-w-[600px] pt-3 ">Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? </AccordionBody>
                    </Accordion>
                </div>
            </div>
            <img src={Faqlayer1} alt="Faqlayer1" className='absolute top-[-30px] left-0 right-0 w-full' />
        </div>
    );
}
export default Faq;
