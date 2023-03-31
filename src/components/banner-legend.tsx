interface IProps {
    url: string;
    title: string;
};

export const BannerWithLegend: React.FC<IProps> = ({ url, title }) => {
    return (
        <div className="w-full flex flex-col">
            <div className="relative h-[400px] lg:h-[700px]">
                <img src={url} className="object-cover w-full h-full" />
                <div className="absolute w-full h-[150px] lg:h-[200px] flex items-center justify-center bottom-0">
                    <div className="bg-secondary opacity-60 h-full w-full absolute" />
                    <h2 className="absolute text-4xl lg:text-6xl font-bold text-white text-center">{title}</h2>
                </div>
            </div>
        </div>
    );
};