import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsButton: React.FC = () => {
	const ref = useRef<HTMLAnchorElement>(null);

	function showButtonOnScroll() {
		if (scrollY > 180) {
			ref.current?.classList.add("show");
		} else {
			ref.current?.classList.remove("show");
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", showButtonOnScroll);

		return () => window.removeEventListener("scroll", showButtonOnScroll);
	}, []);

	return (
		<a
			id="whats-button"
			target="__blank"
			href="https://api.whatsapp.com/send/?phone=%2B5511991495258&text&type=phone_number&app_absent=0"
			ref={ref}
			className="z-50"
		>
			<FaWhatsapp size={40} color="white" />
		</a>
	);
};
