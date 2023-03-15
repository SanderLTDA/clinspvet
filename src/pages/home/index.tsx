import React from 'react';
import { Accordion } from '~/components/accordion';
import { Carousel } from '~/components/carousel';
import { Header } from '~/components/header';
import { Marquee } from '~/components/marquee';
import { Footer } from '~/components/footer';
import { Map } from '~/components/map';

const slides = [
    {
        url: 'https://previews.123rf.com/images/muchmaniavector/muchmaniavector1803/muchmaniavector180300065/97691841-group-of-dog-breeds-holding-bone-front-view-pet-background-banner.jpg',
        alt: 'banner'
    },
    {
        url: 'https://previews.123rf.com/images/muchmaniavector/muchmaniavector1803/muchmaniavector180300065/97691841-group-of-dog-breeds-holding-bone-front-view-pet-background-banner.jpg',
        alt: 'banner'
    },
    {
        url: 'https://previews.123rf.com/images/muchmaniavector/muchmaniavector1803/muchmaniavector180300065/97691841-group-of-dog-breeds-holding-bone-front-view-pet-background-banner.jpg',
        alt: 'banner'
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
                    <section className='relative h-[24rem] lg:h-[48rem] bg-slate-50'>
                        <Carousel slides={slides} />
                    </section>
                )}
                <section id="sobre-nos" className='relative items-center text-center lg:text-left flex flex-col lg:flex-row responsive-width justify-between mx-auto py-16 gap-8 xl:gap-16'>
                    <div className='flex flex-1 flex-col gap-8'>
                        <h2 className='text-4xl xl:text-5xl'>
                            Sobre <span className='font-semibold text-primary'>a ClinSP</span>
                        </h2>
                        <div className='flex flex-col gap-3 xl:gap-5'>
                            <h3 className='text-primary text-lg lg:text-2xl'>
                                Nossa equipe de profissionais está sempre,
                                buscando o constante aprimoramento de
                                nossos serviços para melhor atender os
                                nossos pacientes.
                            </h3>
                            <h3 className='text-lg lg:text-2xl'>
                                Nosso objetivo é a prevenção das doenças
                                que podem acometer os pets e também
                                no tratamento das patologias existentes.
                            </h3>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center sm:w-[24rem] h-[22rem] bg-slate-500 rounded-lg' />
                </section>
                <div className='px-4 py-8 bg-primary flex flex-col gap-4'>
                    <h2 className='text-white text-md mx-auto xl:text-2xl'>Entre em contato e agende sua consulta</h2>
                    <button className='py-1 mx-auto text-lg font-bold px-8 rounded-lg border-4 border-white text-white hover:opacity-50'>
                        Clicando aqui!
                    </button>
                </div>
                <section id="especialidades" className='relative flex flex-col items-center justify-center py-12 md:py-16 gap-12 md:gap-16 responsive-width m-auto'>
                    <h2 className='text-4xl lg:text-5xl'>
                        Especialidades
                    </h2>
                    <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            Array(6).fill(null).map((_, i) => (
                                <li key={i} className='bg-slate-500 w-72 h-48 rounded-lg' />
                            ))
                        }
                    </ul>
                </section>
                <section id='consultas-e-exames' className='relative bg-slate-50'>
                    <div className='flex flex-col items-center m-auto py-12 md:py-16 gap-12 md:gap-16 responsive-width'>
                        <h2 className='text-4xl lg:text-5xl text-center'>
                            Consultas <span className='font-semibold text-primary'>e Exames</span>
                        </h2>
                        <div className='flex flex-col w-full divider-list'>
                            <Accordion defaultValue title='Consultas'>
                                <p className='text-md lg:text-lg'>
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
                            <Accordion title='Exames' />
                        </div>
                        <button className='bg-primary text-lg py-2 px-6 rounded-lg text-white font-bold hover:opacity-50'>
                            Agende sua Consulta ou Exame
                        </button>
                    </div>
                </section>
                <section id='coworking' className='relative flex flex-row items-center'>
                    <div className='flex flex-1 flex-col xl:items-end mx-auto py-12 md:py-16 gap-12 md:gap-16'>
                        <div className='flex flex-col mx-auto xl:mx-0 gap-12 responsive-width xl:w-[40vw] 2xl:w-[35vw] max-w-[800px] text-center xl:text-left'>
                            <h2 className='text-4xl lg:text-5xl'>
                                Co<span className='text-primary font-semibold'>Working</span>
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <p className='text-xl'>
                                    Sala disponível para locação. Ambiente equipado
                                    e completo para seu uso diário, além de materiais
                                    disponíveis para uso interno.
                                </p>
                                <p className='text-xl font-bold text-secondary'>
                                    Alugue um ambiente e faça seus atendimentos!
                                </p>
                            </div>
                            <div className='bg-secondary py-8 px-6 rounded-lg flex flex-col gap-4 w-full md:w-[36rem] xl:w-full mx-auto'>
                                <input className='w-full rounded-lg p-2 focus:outline-blue-500' placeholder='Nome' />
                                <input className='w-full rounded-lg p-2 focus:outline-blue-500' placeholder='Número' />
                                <textarea
                                    name="mensagem"
                                    rows={5}
                                    placeholder='Mensagem'
                                    className='p-2 rounded-lg focus:outline-blue-500 resize-none'
                                />
                            </div>
                        </div>
                    </div>
                    <aside className='relative hidden flex-1 xl:h-[60vw] max-h-[800px] xl:flex'>
                        <img src="/aside-content.png" />
                        {/* <Image src="/aside-content.png" fill alt="aside-content" sizes="100vw" priority /> */}
                    </aside>
                </section>
                <section className='relative bg-slate-50'>
                    <div className='flex flex-col items-center m-auto py-12 md:py-16 gap-12 md:gap-16 responsive-width'>
                        <h2 className='text-4xl lg:text-5xl'>
                            Ambientes
                        </h2>
                        <div className='h-[22rem] lg:h-[36rem] bg-slate-50 w-full rounded-lg overflow-hidden'>
                            <Carousel slides={slides} />
                        </div>
                    </div>
                </section>
                <section className='relative'>
                    <div className='flex flex-col items-center m-auto py-12 md:py-16 gap-12 md:gap-16 responsive-width'>
                        <div className='flex flex-col items-center gap-4 lg:gap-8'>
                            <h2 className='text-4xl lg:text-5xl'>
                                Nossos <span className='font-semibold text-primary'>Pacientes</span>
                            </h2>
                            <p className='text-lg lg:text-xl'>O que falam sobre nós</p>
                        </div>
                        <ul className='flex flex-col items-center gap-8 lg:gap-12 lg:flex-row'>
                            <li className='w-64 h-64 border-[12px] border-primary' />
                            <li className='w-80 h-80 border-[12px] border-primary' />
                            <li className='w-64 h-64 border-[12px] border-primary' />
                        </ul>
                    </div>
                </section>
                <section className="relative py-12">
                    <Marquee />
                </section>
                <section className="relative h-[18rem] lg:h-[36rem]">
                    <Map />
                </section>
            </main>
            <footer className='bg-secondary py-16'>
                <Footer />
            </footer>
        </>
    );
};
