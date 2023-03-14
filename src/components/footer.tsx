import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Footer: React.FC = () => {
    return (
        <div className='text-white gap-16 lg:gap-8 text-center lg:text-left responsive-width items-center flex flex-col lg:flex-row justify-between mx-auto'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>Contato:</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-4'>
                        <IoLogoWhatsapp size={36} color='white' />
                        <a href='tel:+5511991495258'>
                            <h3 className='text-xl'>(11) 99149-5258</h3>
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdEmail size={36} color='white' />
                        <a href='mailto:clinspvet@gmail.com'>
                            <h3 className='text-xl'>clinspvet@gmail.com</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 items-center lg:w-4/12'>
                <ImLocation2 size={36} />
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>Av. Jabaquara 1469 loja 47</h3>
                    <h4 className='text-xl'>Dentro da Galeria - Mirandópolis São Paulo - SP, 04045-002</h4>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>Horários:</h2>
                <div className='whitespace-nowrap'>
                    <h3 className='text-xl'>Seg à Sex - 9h às 17h</h3>
                    <h3 className='text-xl'>Sab - 09h às 12h30</h3>
                </div>
            </div>
        </div>
    );
};