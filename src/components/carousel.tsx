import { clsx } from "clsx";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

interface ISlide {
	url: string;
	alt: string;
	title?: string;
	description?: string;
}

interface IProps {
	slides: ISlide[];
}

export const Carousel: React.FC<IProps> = ({ slides }) => {
	const [opacities, setOpacities] = useState<number[]>([]);
	const [position, setPosition] = useState(0);

	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: { perView: 1 },
		drag: true,
		detailsChanged(s) {
			const new_opacities = s.track.details.slides.map((slide) => slide.portion);
			setOpacities(new_opacities);
		}
	});

	function next() {
		return instanceRef.current?.next();
	}

	function prev() {
		return instanceRef.current?.prev();
	}

	function moveTo(idx: number) {
		return instanceRef.current?.moveToIdx(idx);
	}

	useEffect(() => {
		instanceRef.current?.on("detailsChanged", (slider) => {
			setPosition(slider.track.details.position);
		});
	}, [instanceRef]);

	useEffect(() => {
		const autoPlay = setInterval(() => {
			const slider = instanceRef.current;

			const index = slider?.track.details.position as number;

			const total = (slider?.slides.length as number) - 1;

			return index === total ? slider?.moveToIdx(0) : slider?.next();
		}, 15 * 1000);

		return () => {
			clearInterval(autoPlay);
		};
	}, [instanceRef, slides]);

	return (
		<div ref={ref} className="keen-slider h-full">
			{slides?.map((slide, i) => {
				return (
					<div key={i} className={clsx(`keen-slider__slide number-slide${i}`)} style={{ opacity: opacities[i] }}>
						<img alt={slide.alt} src={slide.url} className="w-full h-full object-cover" />
						<div className="absolute bg-[rgba(0,0,0,0.25)] top-0 bottom-0 left-0 right-0" />
						<div className="text-white px-8 text-center absolute top-0 bottom-0 left-0 right-0 w-full justify-center flex flex-col gap-2 items-center">
							<h2 className="font-bold text-xl sm:text-2xl md:text-4xl max-w-[70vw]">{slide?.title}</h2>
							<h3 className="text-sm sm:text-md md:text-xl font-semibold max-w-[70vw]">{slide?.description}</h3>
						</div>
					</div>
				);
			})}
			<div className="absolute w-full h-full">
				<div className="absolute w-full h-full flex justify-between items-center text-tertiary">
					<FaLocationArrow
						onClick={prev}
						className="cursor-pointer -rotate-[135deg] hover:opacity-50 w-6 h-6 lg:w-9 lg:h-9 translate-x-6 xl:translate-x-16"
					/>
					<FaLocationArrow
						onClick={next}
						className="cursor-pointer rotate-45 hover:opacity-50 w-6 h-6 lg:w-9 lg:h-9 -translate-x-6 xl:-translate-x-16"
					/>
				</div>
				<div className="absolute bottom-8 lg:bottom-12 w-full justify-center flex gap-2 items-center">
					{Array(slides?.length)
						.fill(null)
						.map((_, i) => (
							<BsFillCircleFill
								key={i}
								size={16}
								onClick={() => moveTo(i)}
								className={clsx(
									"text-secondary cursor-pointer hover:opacity-50",
									clsx(position === i ? "" : "opacity-50")
								)}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
