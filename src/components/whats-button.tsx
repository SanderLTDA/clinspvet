import { useEffect, useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsButton: React.FC = () => {
    const ref = useRef<HTMLAnchorElement>(null)

    function showButtonOnScroll() {
        if (scrollY > 180) {
            ref.current?.classList.add('show')
        } else {
            ref.current?.classList.remove('show')
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', showButtonOnScroll)

        return () => window.removeEventListener('scroll', showButtonOnScroll)
    }, []);

    return (
        <a
            id="whats-button"
            target="__blank"
            href="null"
            ref={ref}
        >
            <FaWhatsapp size={40} color="white" />
        </a>
    );
};