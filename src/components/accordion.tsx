import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa"
import { clsx } from "clsx";

interface IProps {
    title: string;
    children?: React.ReactNode;
    defaultValue?: boolean;
};

export const Accordion: React.FC<IProps> = ({ title, children, defaultValue }) => {
    const [opened, setOpened] = useState(defaultValue ?? !!children);

    // function toggle() {
    //     if (children) {
    //         setOpened(!opened);
    //     };
    // };

    return (
        <div className='flex items-start justify-start relative gap-6'>
            <div
                //onClick={toggle}
                className={clsx('translate-y-[6px] hover:opacity-75 cursor-pointer ease-linear transition-all ', clsx(opened ? 'rotate-90' : ""))}
            >
                <FaLocationArrow size={24} className={clsx('-rotate-45 text-[#40cebe]')} />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-2xl'>{title}</h3>
                {opened && children}
            </div>
        </div>
    );
};