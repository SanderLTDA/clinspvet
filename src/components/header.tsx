import { useRef } from "react";
import { MdMenu } from "react-icons/md";

export const Header: React.FC = () => {
    const menuListRef = useRef<HTMLUListElement>(null);

    function openMenu() {
        menuListRef.current?.classList.toggle('hidden');
        menuListRef.current?.classList.toggle('flex');
    };

    return (
        <nav className='flex flex-col xl:flex-row xl:items-center m-auto py-4 justify-between responsive-width'>
            <div className='flex items-center justify-between'>
                <img src='/logotipo.png' className="h-[64px] w-[64px] lg:h-[120px] lg:w-[120px]" />
                <MdMenu
                    size={36}
                    onClick={openMenu}
                    className='text-primary xl:hidden cursor-pointer hover:opacity-50'
                />
            </div>
            <ul ref={menuListRef} className='hidden xl:flex flex-col xl:flex-row gap-3 xl:gap-6 mt-4 xl:mt-0 items-center rounded-lg'>
                <a href='#sobre-nos' className='w-full xl:w-auto'>
                    <li className='bg-tertiary xl:bg-transparent text-center text-lg w-full xl:w-auto py-2 px-6 xl:py-0 xl:px-0 rounded-lg text-white xl:text-label font-semibold hover:opacity-50 cursor-pointer'>
                        Sobre nós
                    </li>
                </a>
                <a href='#especialidades' className='w-full xl:w-auto'>
                    <li className='bg-tertiary xl:bg-transparent text-center text-lg w-full xl:w-auto py-2 px-6 xl:py-0 xl:px-0 rounded-lg text-white xl:text-label font-semibold hover:opacity-50 cursor-pointer'>
                        Especialidades
                    </li>
                </a>
                <a href='#consultas-e-exames' className='w-full xl:w-auto'>
                    <li className='bg-tertiary xl:bg-transparent text-center text-lg w-full xl:w-auto py-2 px-6 xl:py-0 xl:px-0 rounded-lg text-white xl:text-label font-semibold hover:opacity-50 cursor-pointer'>
                        Consultas e Exames
                    </li>
                </a>
                <a href='#ambientes' className='w-full xl:w-auto'>
                    <li className='bg-tertiary xl:bg-transparent text-center text-lg w-full xl:w-auto py-2 px-6 xl:py-0 xl:px-0 rounded-lg text-white xl:text-label font-semibold hover:opacity-50 cursor-pointer'>
                        Ambientes
                    </li>
                </a>
                <a href='#agendamento' className='w-full xl:w-auto'>
                    <li className='bg-tertiary text-center text-lg w-full xl:w-auto py-2 px-6 rounded-lg text-[#0e5381] font-bold hover:opacity-50 cursor-pointer lg:shadow-md'>
                        Agende sua Consulta
                    </li>
                </a>
            </ul>
        </nav>
    );
};