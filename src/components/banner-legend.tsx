interface IProps {
	url: string;
	title: string;
	description?: string;
}

export const BannerWithLegend: React.FC<IProps> = ({ url, title, description }) => {
	return (
		<div className="relative h-full hover:cursor-pointer group">
			<img src={url} className="object-cover w-full h-full" alt={title} />
			<div className="absolute group-hover:h-full w-full ease-linear transition-all h-[80px] flex items-center justify-center bottom-0">
				<div className="bg-secondary opacity-60 group-hover:opacity-80 h-full w-full absolute" />
				<div className="absolute h-full w-full flex flex-col p-4 items-center justify-center gap-4">
					<h2 className="text-xl lg:text-2xl font-bold text-white text-center">{title}</h2>
					{!!description && (
						<h4 className="text-sm hidden group-hover:flex text-white text-center">{description}</h4>
					)}
				</div>
			</div>
		</div>
	);
};
