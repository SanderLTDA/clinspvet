import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const Footer: React.FC = () => {
    return (
        <div className="relative bg-secondary py-16">
            <div className="absolute h-full w-full opacity-40 top-0">
                <img src="/carousel-1.jpg" className="w-full h-full object-cover z-0" />
            </div>
            <div className='text-white relative gap-16 lg:gap-8 text-center lg:text-left responsive-width items-center flex flex-col lg:flex-row justify-between mx-auto'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold'>Contato:</h2>
                    <ul className='flex flex-col gap-2'>
                        <a href='tel:+5511991495258' className="hover:opacity-50">
                            <li className='flex items-center gap-4'>
                                <img className="w-[36] h-[36px]" src="/whatsapp.png" />
                                <h3 className='text-xl'>(11) 99149-5258</h3>
                            </li>
                        </a>
                        <a href='https://www.instagram.com/clinsp_vet/' className="hover:opacity-50">
                            <li className='flex items-center gap-4'>
                                <img className="w-[36] h-[36px]" src="/instagram.png" />
                                <h3 className='text-xl'>ClinSP</h3>
                            </li>
                        </a>
                        <a href='mailto:clinspvet@gmail.com' className="hover:opacity-50">
                            <li className='flex items-center gap-4'>
                                <MdEmail size={36} color='white' />
                                <h3 className='text-xl'>clinspvet@gmail.com</h3>
                            </li>
                        </a>
                    </ul>
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
            </div >
        </div >
    );
};