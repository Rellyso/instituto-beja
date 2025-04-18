import { motion } from "framer-motion";
import * as Icon from "@phosphor-icons/react";
import LineCME from "./../../public/assets/LineCME";
import LogoCME from "../../public/assets/LogoCME.png";
import ImageCME from "../../public/assets/ImageCME.png";
import MapBiomasLogo from "/public/assets/MapBiomas.png";
import SerenasLogo from "/public/assets/Serenas_logo.svg";
import DesenrolaLogo from "/public/assets/DesenrolaLogo.png";
import { AEPIE, CMEPartners, VTCME } from "../data/cmeData.js";

const CMESection = () => {
  const AEPIEMap = AEPIE.map((item, index) => (
    <div key={index} className='flex flex-col gap-4'>
      <div
        className={`flex flex-col gap-12 ${item.bgColor} px-21 py-13 rounded-[3.75rem]`}
      >
        <h1 className={`text-4xl ${item.title.color} font-bold`}>
          {item.title.name}
        </h1>

        <div className='flex w-full justify-between items-center'>
          <p className='w-170'>{item.text}</p>

          <img src={item.img} alt='' />
        </div>
      </div>
    </div>
  ));

  const VTCMEmap = VTCME.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col min-w-115 h-60 ${item.bgColor} gap-3 px-8 py-10 rounded-[2.75rem]`}
    >
      <h1 className='font-bold text-[20px] uppercase '>{item.title}</h1>

      <p className='text-[14px]'>{item.text}</p>
    </div>
  ));

  const PartnersMap = CMEPartners.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col gap-12 w-full ${item.bgColor} rounded-[3.750rem] px-16 py-18`}
    >
      <h1 className={`text-5xl ${item.title.color} uppercase font-bold`}>
        {item.title.name}
      </h1>

      <div className='flex gap-35'>
        <div className='flex flex-col gap-8'>
          {item.text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <img
          src={item.logo}
          alt={`Logo do ${item.title}`}
          className='w-90 h-70'
        />
      </div>
    </div>
  ));

  return (
    <div className='flex flex-col w-full overflow-hidden bg-peach text-text-default-black'>
      <div className='flex relative items-center w-full min-h-screen pl-32'>
        <img
          src={LogoCME}
          alt='Centro para mudanças exponencias logo'
          className='size-fit'
        />

        <img
          src={ImageCME}
          alt='Representação do CME'
          className='w relative -right-[16rem]'
        />
      </div>

      <div className='flex flex-col gap-18 pt-16 items-end'>
        <h1 className='editorial text-hot-coral text-6xl w-full px-32'>
          Centro para Mudanças Exponenciais (CMe)
        </h1>

        <div className='flex flex-col items-end w-[78rem] px-32'>
          <div className='flex gap-16 text-base'>
            <div className='flex flex-col w-full gap-8'>
              <p>
                Em 2024, inauguramos o{" "}
                <strong>Centro para Mudanças Exponenciais (CMe)</strong>, hub
                Brasil do <strong>Centre for Exponential Change (C4eC)</strong>,
                uma iniciativa global criada para promover colaboração e
                soluções transformadoras no Sul Global.
              </p>
              <p>
                <strong>O C4eC</strong> é fruto de uma cocriação entre Rohini
                Nilekani Philanthropies, Skoll Foundation, New Profit, Waverley
                Street Foundation, <strong>Instituto Beja</strong> e liderado
                pela Societal Thinking.
              </p>
              <p>
                A missão do <strong>C4eC</strong> é fomentar a cooperação para
                gerar novos modelos e padrões e oferecer respostas aos problemas
                sistêmicos, utilizando tecnologias éticas e responsáveis -
                incluindo a inteligência artificial - como ferramentas para
                escalar a justiça social e ambiental, com foco em tornar as
                pessoas protagonistas dessas mudanças.
              </p>
            </div>

            <div className='flex flex-col w-full gap-8'>
              <p>
                Na Índia, as indústrias de tecnologia colaboram diretamente com
                o setor público para desenvolver soluções de impacto, combinando
                investimentos de capital social privado e público de maneira
                natural e com benefícios mútuos.
              </p>
              <strong>
                Entretanto, no Brasil, esse modelo de colaboração ainda é
                incipiente, devido à ausência de políticas públicas consistentes
                que incentivem a prototipação e implementação de soluções além
                da simples contratação de softwares.
              </strong>
            </div>
          </div>

          <div className='flex h-54 w-full relative'>
            <LineCME style='absolute -left-40 -top-5' />
          </div>

          <div className='flex gap-16 text-base'>
            <div className='flex flex-col w-full gap-8'>
              <p>
                As funções dessas tecnologias, geralmente impulsionadas pelo
                esforço da sociedade civil, são financiadas com base em
                interesses específicos das empresas de capital privado. Isso
                resulta em orçamentos pontuais que, frequentemente, não incluem
                a etapa de acompanhamento dos impactos a médio e longo prazo.
                Como consequência, o financiamento é interrompido, levando à
                descontinuidade do desenvolvimento e à perda do conhecimento
                gerado, o que, em última instância, pode tornar os produtos
                obsoletos.
              </p>
              <p>
                O CMe se estabelece no Brasil para mudar esse cenário, propondo
                alternativas que incentivem investimentos colaborativos.
                Inspirado na vasta experiência indiana, o CMe inicia sua jornada
                identificando potenciais parcerias em tecnologia, políticas
                públicas, organizações sociais e agentes de transformação social
                no Brasil.
              </p>
            </div>

            <div className='flex flex-col w-full gap-8'>
              <p>
                Além disso, o CMe reconhece o desafio de ampliar o entendimento
                do setor brasileiro sobre tecnologias, especialmente em um
                contexto marcado por disputas em torno da regulação da
                inteligência artificial. Para o CMe, é fundamental que essas
                tecnologias sejam utilizadas com responsabilidade, priorizando
                seus impactos sociais e ambientais.
              </p>
              <p>
                Outro aspecto essencial do CMe é o compromisso com a
                democratização do acesso.{" "}
                <strong>
                  Todas as tecnologias desenvolvidas ao longo da jornada são de
                  código aberto (Open Source), permitindo que as ferramentas
                  criadas sejam acessíveis a todos e beneficiem o ecossistema
                  como um todo.
                </strong>
              </p>
              <p>
                O CMe conta com um comitê multissetorial de embaixadores,
                composto por Jessica Silva, Cristiano Franco, Luca Cavalcanti,
                Saulo Barreto,Sheila Pires, Silvana Bahia,Thiago Rached,
                Cristiane Sultani e Sanjay Purohit.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-10 w-[78rem] pt-20 px-32'>
          <h1 className='text-[2rem] font-bold w-fit text-hot-coral border-3 border-x-0 border-b-0'>
            AÇÕES CENTRAIS DO CMe EM 2024
          </h1>

          <ul className='flex flex-col gap-11'>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-hot-coral rounded-full shrink-0' />
              <p className='text-2xl'>
                Construção da parceria global e hub nacional;
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-hot-coral rounded-full shrink-0' />
              <p className='text-2xl'>
                Lançamento do CMe Hub Brasil em novembro;
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-hot-coral rounded-full shrink-0' />
              <p className='text-2xl'>
                Construção do website e das narrativas para comunicação;
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-hot-coral rounded-full shrink-0' />
              <p className='text-2xl'>
                Implementação do centro de acordo com os parâmetros originais do
                C4EC - espaço dedicado para trabalhar a catalização local;
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-hot-coral rounded-full shrink-0' />
              <p className='text-2xl'>
                Chamada e seleção de Orquestradores de Sistemas no Brasil.
              </p>
            </div>
          </ul>
        </div>

        <div className='flex flex-col gap-14 w-full pt-40 px-32'>
          <h1 className='text-hot-coral text-5xl font-bold'>
            Apoiando o Ecossistema Para Impacto Exponencial
          </h1>

          {AEPIEMap}
        </div>

        <div className='flex flex-col w-full pt-40'>
          <div className='flex flex-col gap-14'>
            <h1 className='w-full text-cyan text-5xl font-bold px-32'>
              Visão de Transformação do CMe
            </h1>

            <div className='w-full overflow-hidden'>
              <motion.div
                drag='x'
                dragConstraints={{ left: -400, right: 0 }}
                className='flex w-full gap-4 pl-100'
              >
                {VTCMEmap}
              </motion.div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-end gap-14 w-full pt-40 px-32'>
          <h1 className='text-cyan text-5xl font-bold w-full'>
            Jornada de Mudança Exponencial
          </h1>

          <div className='flex justify-between w-[61.5rem] gap-14 text-base'>
            <div className='flex flex-col w-full gap-8'>
              <p>
                Durante a Jornada de Mudança Exponencial, o CME e o C4EC
                oferecem aos orquestradores do sistema acesso a conhecimento
                aberto e prático, design e prototipagem avançados, subsídios
                para mudança de paradigma, desenvolvimento da autoeficácia e uma
                rede de mentores experientes.
              </p>
              <p>
                A primeira etapa dessa Jornada é o projeto estratégico, onde os
                orquestradores de sistemas enfrentam o desafio de definir o que
                os pode ajudar a ganhar escala, velocidade e uma mudança
                sustentada. Em seguida, vem a fase de prototipagem, onde
                tecnologias abertas como plataformas, protocolos e inteligência
                artificial, além de outras, são exploradas para fomentar um
                ecossistema de inovação colaborativa e provocar efeitos em rede.
              </p>
            </div>

            <div className='flex flex-col w-full gap-8'>
              <h1 className='text-3xl font-bold text-cyan'>
                Conheça mais sobre o Centro de Mudanças Exponenciais
              </h1>
              <div className='flex gap-1 items-center'>
                <p>Saber Mais Sobre o Centro de Mudanças Exponenciais</p>
                <div className='flex-center size-4 bg-bourdeaux text-porcelain rounded-full p-0.5 text-[14px]'>
                  <Icon.ArrowRight className='-rotate-15' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-end gap-14 w-full pt-40 px-32'>
          <h1 className='text-cyan text-5xl font-bold w-full'>
            Orquestradores de Sistema do Brasil
          </h1>

          <div className='flex gap-18'>
            <p className='text-base'>
              Durante o ano de 2024, anunciamos três empreendedores sociais para
              a jornada, aprovados pelo Comitê Global do Centre for Exponential
              Change, composto por Rohini Nilekani Philanthropies, Skoll
              Foundation, Waverley Street Foundation, New Profit e Instituto
              Beja: Serenas, MapBiomas e Desenrola e Não Me Enrola iniciam uma
              jornada de cocriação com o Centro para Mudanças Exponenciais e
              nossa rede de colaboradores globais. Será um percurso de
              aprendizado, imaginação e design, no qual desafios se transformam
              em combustível para novas teorias de mudança exponencial.
            </p>

            <div className='flex gap-5  '>
              <div className='w-50 h-40 p-4 bg-white flex-center rounded-2xl'>
                <img src={MapBiomasLogo} alt='Map biomas logo' />
              </div>
              <div className='w-50 h-40 p-4 bg-white flex-center rounded-2xl'>
                <img src={SerenasLogo} alt='Serenas logo' />
              </div>
              <div className='w-50 h-40 p-4 bg-white flex-center rounded-2xl'>
                <img src={DesenrolaLogo} alt='Desenrola logo' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 w-full pt-40 px-32'>
          {PartnersMap}
        </div>
      </div>
    </div>
  );
};

export default CMESection;
