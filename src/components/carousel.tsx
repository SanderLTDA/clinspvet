import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillCircleFill } from 'react-icons/bs';
import { clsx } from 'clsx';

interface ISlide {
    url: string;
    alt: string;
};

interface IProps {
    slides: ISlide[];
};

export const Carousel: React.FC<IProps> = ({ slides }) => {
    const [position, setPosition] = useState(0);

    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: { perView: 1 },
    });

    function next() {
        return instanceRef.current?.next();
    };

    function prev() {
        return instanceRef.current?.prev()
    };

    function moveTo(idx: number) {
        return instanceRef.current?.moveToIdx(idx);
    };

    useEffect(() => {
        instanceRef.current?.on('detailsChanged', (slider) => {
            setPosition(slider.track.details.position);
        });
    }, [instanceRef]);

    useEffect(() => {
        const autoPlay = setInterval(() => {
            const slider = instanceRef.current;

            const index = slider?.track.details.position as number;

            const total = (slider?.slides.length as number) - 1;

            return index === total ? slider?.moveToIdx(0) : slider?.next();
        }, 5000);

        return () => { clearInterval(autoPlay) };
    }, [instanceRef, slides]);

    return (
        <div ref={ref} className="keen-slider h-full">
            {
                slides?.map((slide, i) => {
                    return (
                        <div key={i} className={clsx(`keen-slider__slide number-slide${i}`)}>
                            <img alt={slide.alt} src={slide.url} className='w-full h-full' />
                        </div>
                    )
                })
            }
            <div className='absolute w-full h-full'>
                <div className='absolute bg-black w-full h-full opacity-10' />
                <div className='absolute w-full h-full flex justify-between items-center text-[#40daca]'>
                    <FaLocationArrow
                        onClick={prev}
                        className='cursor-pointer -rotate-[135deg] hover:opacity-50 w-10 h-10 lg:w-16 lg:h-16 translate-x-8 xl:translate-x-16'
                    />
                    <FaLocationArrow
                        onClick={next}
                        className='cursor-pointer rotate-45 hover:opacity-50 w-10 h-10 lg:w-16 lg:h-16 -translate-x-8 xl:-translate-x-16'
                    />
                </div>
                <div className='absolute bottom-8 lg:bottom-12 w-full justify-center flex gap-2 items-center'>
                    {
                        Array(slides?.length).fill(null).map((_, i) => (
                            <BsFillCircleFill
                                key={i}
                                size={16}
                                onClick={() => moveTo(i)}
                                className={clsx('text-primary cursor-pointer hover:opacity-50', clsx(position === i ? "" : "opacity-50"))}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};