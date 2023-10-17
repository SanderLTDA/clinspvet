import { motion } from "framer-motion";
import { Accordion } from "~/components/accordion";
import { BannerWithLegend } from "~/components/banner-legend";
import { Carousel } from "~/components/carousel";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Map } from "~/components/map";
import { WhatsButton } from "~/components/whats-button";

const slides = [
	{
		url: "/foto_1.jpg",
		alt: "dois gatos",
		title: "A saúde do seu pet em primeiro lugar!",
		description: "A clínica veterinária ClinSP garante o melhor suporte e atendimento para seu melhor amigo."
	},
	{
		url: "/carousel-2.jpg",
		alt: "passando o tempo com o pet",
		title: "Proporcione os melhores momentos com cuidado e carinho",
		description: "Buscamos entregar o melhor atendimento e o mais completo, do inicio ao fim."
	},
	{
		url: "/coelho.png",
		alt: "coelhos",
		title: "Busque a prevenção da saúde do seu pet.",
		description: "Nosso objetivo é a prevenção e tratamento de doenças e patologias existentes."
	}
];

export default function Home() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				{slides && (
					<section className="relative h-[80vw] sm:h-[50vw] max-h-[672px] bg-slate-200">
						<Carousel slides={slides} />
						<img src="/wave-header.png" className="w-full h-12 xl:h-fit absolute top-0 right-0" />
					</section>
				)}
				<section
					id="sobre-nos"
					className="relative items-center text-center lg:text-left flex flex-col lg:flex-row responsive-width justify-between mx-auto py-12 md:mt-12 gap-12 xl:gap-16"
				>
					<div className="flex flex-1 flex-col gap-8">
						<h2 className="text-4xl xl:text-5xl">
							Sobre <span className="font-semibold text-secondary">a ClinSP</span>
						</h2>
						<div className="flex flex-col gap-3 xl:gap-5 text-lg lg:text-xl ">
							<h3 className="text-secondary font-semibold">
								Nossa equipe de profissionais está sempre, buscando o constante aprimoramento de nossos serviços
								para melhor atender os nossos pacientes.
							</h3>
							<h3>
								Nosso objetivo é a prevenção das doenças que podem acometer os pets e também no tratamento das
								patologias existentes.
							</h3>
							<h3>
								Buscamos entregar o melhor atendimento e o mais completo, com isso, temos parceiros que atendem
								na{" "}
								<span className="font-semibold text-secondary">
									Acupuntura, Dermatologia, Oftamologia, Hematologia, Ortopedia, Cardiologia e Silvestres.
								</span>
							</h3>
						</div>
					</div>
					<div className="flex items-center justify-center w-[14rem] h-[18rem] lg:w-[20rem] lg:h-[26rem] rounded-lg">
						<img src="/logotipo.png" className="h-full w-full" />
					</div>
				</section>
				<div className="lg:h-[250px] lg:block">
					<img src="/arco.svg" style={{ width: "100%", height: "100%" }} />
				</div>
				<section id="consultas-e-exames" className="relative">
					<div className="flex flex-col items-center m-auto py-12 md:py-16 gap-12 md:gap-16 responsive-width">
						<h2 className="text-4xl lg:text-5xl text-center">
							Consultas <span className="font-semibold text-secondary">e Exames</span>
						</h2>
						<div className="flex flex-col w-full divider-list">
							<li>
								<Accordion defaultValue title="Consultas">
									<p className="text-md lg:text-xl">
										Garantia de um ótimo atendimento, feito por{" "}
										<span className="text-secondary font-semibold">
											profissionais especializados em cães, gatos e animais silvestres.
										</span>{" "}
										Todos muito atentos e capacitados para realizar o melhor e mais completo atendimento.
										Fazemos todo o acompanhamento necessário, temos{" "}
										<span className="text-secondary font-semibold">
											suporte para exames laboratoriais e de imagem, podendo identificar, investigar e tratar
											patologias diversas.
										</span>
									</p>
								</Accordion>
							</li>
							<li>
								<Accordion defaultValue title="Exames">
									<div className="text-md lg:text-xl flex flex-col gap-4">
										<p>
											Fazemos diversos exames, dentre eles temos: exames anátomo-patologico (sangue, urina,
											fezes); Eletrocardiograma; Citologia e Histopatologia;
										</p>
										<p className="font-semibold text-secondary">
											Sob agendamento prévio: Ultrassom, RX, Ecocardiograma
										</p>
									</div>
								</Accordion>
							</li>
						</div>
					</div>
				</section>
				<section id="especialidades" className="w-full relative flex flex-col py-12 md:py-16 gap-12 md:gap-16">
					<h2 className="text-4xl lg:text-5xl text-center font-semibold text-secondary">Especialidades</h2>
					<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-xl lg:text-2xl responsive-width mx-auto overflow-hidden">
						<li className="relative h-96">
							<BannerWithLegend
								url="/carousel-4.jpg"
								title="Odontologia"
								description="Voltada para prevenção através de profilaxia dentária (retirada de placas, cálculos dentários e
                                polimento) e também Tratamento Periodontal quando já há doença bacteriana, causando mobilidade
                                dentária, exposição de raiz, destruição óssea, perda dos ligamentos periodontais e que são casos mais
                                graves e que podem levar o animal a vários outras patológicas (coração, fígado, rim e outros)."
							/>
						</li>
						<li className="relative h-96">
							<BannerWithLegend
								url="/carousel-5.jpg"
								title="Medicina de Felinos"
								description=" A ClinSP além de Clinica Geral também dispõe de Medicina de Felinos com consultório exclusivo
                                para a espécie."
							/>
						</li>
						<li className="relative h-96">
							<BannerWithLegend
								url="/carousel-6.jpg"
								title="Oncologia"
								description="Voltada para todos os tipos de câncer, seja através de diagnostico, cirurgia, tratamento
                                quimioterápico, Criocirurgia e se necessário Eletroquimioterapia."
							/>
							<img className="h-[64px] w-[64px] absolute top-4 left-4" src="/oncologia.svg" />
						</li>
					</ul>
				</section>
				<section id="ambientes" className="relative">
					<div className="flex flex-col items-center m-auto py-8 gap-12 md:gap-16 bg-tertiary">
						<h2 className="text-4xl lg:text-5xl text-white font-semibold">Ambientes</h2>
					</div>
					<ul className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto responsive-width py-16 z-10">
						<a
							href="/laboratory1.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory1.jpeg"} className="object-fill w-full h-full" alt="laboratorio 1" />
							</motion.li>
						</a>
						<a
							href="/laboratory2.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory2.jpeg"} className="object-fill w-full h-full" alt="laboratorio 2" />
							</motion.li>
						</a>
						<a
							href="/laboratory3.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory3.jpeg"} className="object-fill w-full h-full" alt="laboratorio 3" />
							</motion.li>
						</a>
						<a
							href="/laboratory4.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory4.jpeg"} className="object-fill w-full h-full" alt="laboratorio 4" />
							</motion.li>
						</a>
						<a
							href="/laboratory5.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory5.jpeg"} className="object-fill w-full h-full" alt="laboratorio 5" />
							</motion.li>
						</a>
						<a
							href="/laboratory6.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory6.jpeg"} className="object-fill w-full h-full" alt="laboratorio 6" />
							</motion.li>
						</a>
						<a
							href="/laboratory7.jpeg"
							className="cursor-pointer md:hover:scale-110 lg:hover:scale-150 transition-all"
						>
							<motion.li className="h-96">
								<img src={"/laboratory7.jpeg"} className="object-fill w-full h-full" alt="laboratorio 7" />
							</motion.li>
						</a>
					</ul>
				</section>
				<section className="relative h-[16rem] border-t-[1px] border-t-slate-200">
					<Map />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
			<WhatsButton />
		</>
	);
}
