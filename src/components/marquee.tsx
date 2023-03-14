export const Marquee: React.FC = () => {
    return (
        <div className="relative flex overflow-hidden justify-center">
            <ul className="animate-marquee whitespace-nowrap flex items-center">
                <li className="mx-4 text-3xl">Marquee Item 1</li>
                <li className="mx-4 text-3xl">Marquee Item 2</li>
                <li className="mx-4 text-3xl">Marquee Item 3</li>
                <li className="mx-4 text-3xl">Marquee Item 4</li>
                <li className="mx-4 text-3xl">Marquee Item 5</li>
            </ul>
            <ul className="absolute animate-marquee2 whitespace-nowrap flex items-center">
                <li className="mx-4 text-3xl">Marquee Item 1</li>
                <li className="mx-4 text-3xl">Marquee Item 2</li>
                <li className="mx-4 text-3xl">Marquee Item 3</li>
                <li className="mx-4 text-3xl">Marquee Item 4</li>
                <li className="mx-4 text-3xl">Marquee Item 5</li>
            </ul>
        </div>
    );
};