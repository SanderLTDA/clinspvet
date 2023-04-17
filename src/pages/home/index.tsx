import React from 'react';
import { Accordion } from '~/components/accordion';
import { Carousel } from '~/components/carousel';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { Map } from '~/components/map';
import { BannerWithLegend } from '~/components/banner-legend';
import { WhatsButton } from '~/components/whats-button';

const slides = [
    {
        url: '/carousel-1.jpg',
        alt: 'passando o tempo com o pet',
        title: 'A saúde do seu pet em primeiro lugar!',
        description: 'A clínica veterinária ClinSP garante o melhor suporte e atendimento para seu melhor amigo.',
    },
    {
        url: '/carousel-2.jpg',
        alt: 'dois gatos ',
        title: 'Proporcione os melhores momentos com cuidado e carinho',
        description: 'Buscamos entregar o melhor atendimento e o mais completo, do inicio ao fim.',
    },
    {
        url: '/carousel-3.jpg',
        alt: 'gato deitado',
        title: 'Busque a prevenção da saúde do seu pet.',
        description: 'Nosso objetivo é a prevenção e tratamento de doenças e patologias existentes.',
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
                    <section className='relative h-[32rem] md:h-[48rem] bg-slate-200'>
                        <Carousel slides={slides} />
                        <img src="/carousel-wave.svg" className='w-full absolute top-0' />
                    </section>
                )}
                <section id="sobre-nos" className='relative items-center text-center lg:text-left flex flex-col lg:flex-row responsive-width justify-between mx-auto py-24 gap-12 xl:gap-16'>
                    <div className='flex flex-1 flex-col gap-8'>
                        <h2 className='text-4xl xl:text-5xl'>
                            Sobre <span className='font-semibold text-secondary'>a ClinSP</span>
                        </h2>
                        <div className='flex flex-col gap-3 xl:gap-5 text-lg lg:text-xl '>
                            <h3 className='text-secondary font-semibold'>
                                Nossa equipe de profissionais está sempre,
                                buscando o constante aprimoramento de
                                nossos serviços para melhor atender os
                                nossos pacientes.
                            </h3>
                            <h3>
                                Nosso objetivo é a prevenção das doenças
                                que podem acometer os pets e também
                                no tratamento das patologias existentes.
                            </h3>
                            <h3>
                                Buscamos entregar o melhor atendimento e o mais
                                completo, com isso, temos parceiros que atendem
                                na <span className='font-semibold text-secondary'>Acupuntura, Dermatologia, Oftamologia, Hematologia, Ortopedia, Cardiologia e Silvestres.</span>
                            </h3>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[14rem] h-[16rem] lg:w-[20rem] lg:h-[24rem] rounded-lg'>
                        <img src="/logotipo.png" className='h-full w-full' />
                    </div>
                </section>
                <div className='lg:h-[250px] lg:block'>
                    <img src="/wave.png" style={{ width: '100%', height: '100%' }} />
                </div>
                <section id='consultas-e-exames' className='relative'>
                    <div className='flex flex-col items-center m-auto py-12 md:py-24 gap-12 md:gap-16 responsive-width'>
                        <h2 className='text-4xl lg:text-5xl text-center'>
                            Consultas <span className='font-semibold text-secondary'>e Exames</span>
                        </h2>
                        <div className='flex flex-col w-full divider-list'>
                            <Accordion defaultValue title='Consultas'>
                                <p className='text-md lg:text-xl'>
                                    Garantia de um ótimo atendimento, feito por{" "}
                                    <span className='text-secondary font-semibold'>
                                        profissionais especializados em cães, gatos e animais silvestres.
                                    </span>{" "}
                                    Todos muito atentos e capacitados para realizar o melhor e mais completo atendimento. Fazemos todo o acompanhamento
                                    necessário, temos{" "}
                                    <span className='text-secondary font-semibold'>
                                        suporte para exames laboratoriais e de imagem, podendo identificar, investigar e tratar patologias diversas.
                                    </span>
                                </p>
                            </Accordion>
                            <Accordion defaultValue title='Exames'>
                                <div className='text-md lg:text-xl flex flex-col gap-4'>
                                    <p>
                                        Fazemos diversos exames, dentre eles temos: exames anátomo-patologico (sangue,
                                        urina, fezes); Eletrocardiograma; Citologia e Histopatologia;
                                    </p>
                                    <p className='font-semibold text-secondary'>
                                        Sob agendamento prévio: Ultrassom, RX, Ecocardiograma
                                    </p>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                </section>
                <section id="especialidades" className='w-full relative flex flex-col py-12 md:py-24 gap-12 md:gap-16 bg-slate-200'>
                    <h2 className='text-4xl lg:text-5xl text-center font-semibold text-secondary'>
                        Especialidades
                    </h2>
                    <ul className='flex flex-col gap-8 text-xl lg:text-2xl'>
                        <li>
                            <BannerWithLegend url="/carousel-4.jpg" title="Odontologia" />
                        </li>
                        <li className="responsive-width m-auto">
                            <h3>
                                <span className='text-secondary'>Voltada para prevenção</span>{" "}através de profilaxia dentária (retirada de placas, cálculos dentários e
                                polimento) e também <span className='text-secondary'>Tratamento Periodontal quando já há doença bacteriana,</span>{' '}causando mobilidade
                                dentária, exposição de raiz, destruição óssea, perda dos ligamentos periodontais e que são casos mais
                                graves e que podem levar o animal a vários outras patológicas (coração, fígado, rim e outros).
                            </h3>
                        </li>
                        <li>
                            <BannerWithLegend url="/carousel-5.jpg" title='Medicina de Felinos' />
                        </li>
                        <li className="responsive-width m-auto">
                            <h3>
                                A ClinSP além de Clinica Geral também <span className='text-secondary'>dispõe de Medicina de Felinos</span>{" "}com consultório exclusivo
                                para a espécie.
                            </h3>
                        </li>
                        <li className='relative'>
                            <BannerWithLegend url="/carousel-6.jpg" title='Oncologia' />
                            <img className='h-[72px] w-[72px] lg:h-[120px] lg:w-[120px] absolute top-8 right-8' src="/oncologia.png" />
                        </li>
                        <li className="responsive-width m-auto">
                            <h3>
                                <span className='text-secondary'>Voltada para todos os tipos de câncer,</span>{' '}seja através de diagnostico, cirurgia, tratamento
                                quimioterápico, Criocirurgia e se necessário Eletroquimioterapia.
                            </h3>
                        </li>
                    </ul>
                </section>
                <section id='ambientes' className='relative'>
                    <div className='flex flex-col items-center m-auto py-12 md:py-24 gap-12 md:gap-16 responsive-width'>
                        <h2 className='text-4xl lg:text-5xl text-secondary font-semibold'>
                            Ambientes
                        </h2>
                    </div>
                    <div className='relative h-[32rem] md:h-[48rem] bg-slate-200'>
                        <Carousel slides={slides} />
                    </div>
                </section>
                <section className="relative  h-[24rem] md:h-[48rem] border-t-[1px] border-t-slate-200">
                    <Map />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
            <WhatsButton />
        </>
    );
};
