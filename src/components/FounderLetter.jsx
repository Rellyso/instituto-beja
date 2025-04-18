import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_desenho_beja from "/assets/logo-desenho-beja.svg";
import conector_de_textos from "/assets/conector-de-textos.svg";

const FounderLetter = () => {
  return (
    <>
      {/* // carta fundadora */}
      <div className='flex overflow-clip'>
        <div className='py-16 bg-[var(--rose)] flex-1 relative mx-auto'>
          <img
            src={nuvens}
            alt='imagem de nuvens douradas no fundo'
            className='absolute -top-25 h-100 -left-40'
          />
          <div className='max-w-[1028px] flex flex-col gap-8 mx-auto z-2 bg-[var(--porcelain)] pl-21 pt-21 pb-21 pr-68 rounded-3xl relative'>
            <div className='editorial text-xl absolute right-20'>
              <span>(O) Desde 2021</span>
            </div>
            <h1 className='font-bold text-8xl editorial'>Carta da Fundadora</h1>
            <p>
              Estamos vivendo um profundo momento de transição geracional não só
              humana mas também planetária. As notícias diárias sobre conflitos
              nos consomem e nos afetam. Já sabemos que apesar de muitos passos
              dados, ainda estamos devendo a lição de casa sobre questões como
              justiça racial, o caminho sem volta dos avanços tecnológicos, o
              enfraquecimento da democracia, e a urgente necessidade de
              adaptação climática para simples sobrevivência. Ainda assim, temos
              sido lentos na mudança de rumos e, arrisco a dizer, muitas vezes
              até passivos.
            </p>{" "}
            <p>
              A fórmula não é complexa: o que está em vigor não funciona mais;
              não alcançamos nossos resultados e a desigualdade só aumenta. A
              tão falada policrise nos assola e exige que usemos nosso
              policapital. Contudo, mais do que isso, exige que o nosso
              policapital esteja à disposição da coletividade.
            </p>{" "}
            <p>
              Tenho insistido em falar da coletivização das nossas
              individualidades como filantropos para promover de forma mais
              acelerada o objetivo que tanto almejamos; uma sociedade mais justa
              e uma vida coletiva mais digna. E isso exige colaboração.
            </p>
            <p>
              Nesses três anos de vida do Instituto Beja, amadurecemos. O que só
              ocorreu porque experimentamos. Nascemos com o espírito de
              colaborar “stricto sensu”, o que significa participar ativamente,
              cooperar, construir junto com nossos pares e outros atores. E
              somente em 2024, conseguimos vislumbrar este tão desejado caminho
              de co-construção, atingindo um objetivo ainda maior, com parcerias
              globais em favorecimento do Sul Global.
            </p>
            <p>
              Entendo, porém, que estamos só no começo e precisamos de reforço.
              Para co-criar, é necessário desapego. E desapego só é possível com
              o sentimento de amor. Se a filantropia significa amor à humanidade
              - e eu acrescentaria amor ao Planeta também -, atualizando as
              nossas necessidades e o termo ao presente momento, desejo que esse
              seja o meu legado de vida. E que o Instituto Beja possa sempre
              inspirar o ecossistema a desapegar, a tomar riscos e a inovar a
              serviço da sociedade.
            </p>
            <p>
              Também estamos na era da nova longevidade e sendo provocados a nos
              reinventar em prol de nós próprios e o que nos atinge
              individualmente também é o que forma o coletivo. Por isso, os
              nossos anseios individuais nunca podem se sobressair à nossa
              missão social.
            </p>
            <p>
              O presente relatório saiu do forno porque cooperamos. E isso é
              música para nossos ouvidos. Espero que vocês o recebam com a mente
              e com o coração abertos. Esse relatório pode e deve ser
              interpretado como um convite para mudarmos juntos os ponteiros das
              nossas entregas, com uma visão integrada e consolidada do nosso
              contexto territorial e global.
            </p>
            <p>
              Todos os nossos pares podem participar dos nossos Laboratórios e
              do Centro de Mudanças Exponenciais, explicados um a um no decorrer
              desse documento, das mais variadas formas. As Casas Beja tanto do
              Rio quanto de SP também estão com as portas abertas para cada uma
              das experiências de colaboração.
            </p>
            <p className='flex flex-col'>
              Com gratidão,
              <span>Cristiane Sultani</span>
            </p>
            <img
              src={logo_desenho_beja}
              alt='Logo da Beja'
              className='h-40 absolute bottom-0 right-0 pl-20 pb-8 scale-x-[-1]'
            />
          </div>
          <div className='relative w-full h-32 mt-8'>
            <img
              src='/assets/bicicletinha.svg'
              alt='pessoa numa bicicleta em dourado'
              className='absolute h-100 bottom-0 z-1'
            />
          </div>
        </div>
      </div>
      {/* respiro dourado */}
      <div className='bg-[var(--retro-ochre)] h-[110vh] flex-1 editorial text-6xl flex items-start pt-30 justify-start text-left relative'>
        <p className='w-[1084px] ml-50 flex flex-col gap-8 text-[var(--porcelain)]'>
          <span>Neste relatório anual,</span>
          <span>convidamos você a explorar</span>
          <span>as ações do Instituto Beja em 2024.</span>
        </p>
        <div className='absolute w-full -bottom-90 flex items-center justify-center'>
          <div className='w-full aspect-[2/1] overflow-hidden'>
            <div className='w-full h-[400%] rounded-full bg-[var(--porcelain)]'></div>{" "}
          </div>
        </div>
      </div>
      {/* contexto */}
      <div className='bg-[var(--porcelain)] z-10 relative border border-porcelain flex flex-col items-end'>
        <h1 className='editorial text-6xl m-30 self-start'>Contexto</h1>
        <div className='w-[1000px] flex flex-col gap-8 justify-end items-end flex-1 pr-25'>
          <h2 className='text-4xl text-[var(--rose)] editorial'>
            Este documento sintetiza as investigações, interações, descobertas e
            reflexões coletivas ao longo dos três anos que nos inspiram
            diariamente a desafiar modelos ultrapassados para a prática de uma
            filantropia que gostamos de denominar como “oxigenada”.
          </h2>
          <div className='flex gap-4'>
            <p className='flex flex-col gap-12'>
              <span>
                Em 2024, o Beja dedicou-se a entender profundamente os preceitos
                e processos que revitalizam o solo sobre o qual o setor da
                filantropia se fundamenta e se reinventa. O ano foi marcado pela
                necessidade de agilidade e objetividade em nossa adaptação e
                atuação frente às demandas de responsabilidade social.
                Implementamos a evolução da Teoria de Mudança, revisada em 2023,
                assumindo os riscos e desafios necessários para remodelar nossas
                práticas em um ambiente onde curiosidade, empatia, transparência
                e responsabilidade continuam sendo valores fundamentais da
                governança.
              </span>
              <span>
                Fiel à missão de repensar paradigmas na filantropia, o Beja
                seguiu promovendo encontros, diálogos e pesquisas, utilizando
                ferramentas cada vez mais sofisticadas para prototipar novas
                visões e práticas. Esse compromisso com a inovação permitiu
                avanços significativos na forma como o Instituto constrói
                conhecimento e influência no setor.
              </span>
            </p>
            <p className='flex flex-col gap-8'>
              <span>
                Nesse contexto de evolução e crescimento, uma das principais
                transformações foi a adoção de um novo modelo de governança,
                mais participativo e plural, com a substituição da figura
                vertical de um Diretor Executivo por um Comitê Executivo
                horizontal. Nesse caso, o Comitê foi composto por profissionais
                de trajetórias diversas, internos e externos. Esse grupo assumiu
                o compromisso de enfrentar desafios sistêmicos, reforçando os
                valores de inovação e colaboração que definem o Instituto Beja,
                em conjunto com a Presidente do nosso Conselho de Administração,
                que também tem um assento.
              </span>
              <span>
                O processo contínuo de atualização estratégica foi impulsionado
                pela habilidade que a própria fundadora tem em articular ações
                conjuntas, ampliando o alcance e a influência das iniciativas
                apoiadas. Como resultado, muitos processos foram catalisados e
                os impactos potencializados, acelerando mudanças sistêmicas e
                fortalecendo uma agenda de inovação social relevante.
              </span>
            </p>
          </div>
          <div className='w-[100vw] pl-25'>
            <img
              src={conector_de_textos}
              alt='linha conectando dois textos diferentes'
              className='mx-auto'
            />
          </div>
          <div className='flex gap-4 -mt-12'>
            <p className='flex flex-col gap-12'>
              <span>
                Além dessa mudança estrutural, outro avanço fundamental foi o
                aprofundamento da abordagem de policapital de todo o Comitê
                Executivo e da própria equipe. Composto por diferentes formas de
                capital - financeiro, social, intelectual, empresarial e
                político - o policapital pode ser provocado mediante o uso da
                empatia e da escuta, que são outros dois valores vitais do Beja,
                para fortalecer a sustentabilidade e autonomia das iniciativas
                apoiadas. Entender profundamente as demandas dos parceiros é um
                dos nossos principais mecanismos de financiamento e, com isso,
                podemos aplicar os variados recursos da melhor forma.
              </span>
              <span>
                Com base nessas experiências e aprendizados, o Beja estruturou
                sua atuação em três pilares estratégicos interligados, que
                operaram de maneira sinérgica, permitindo que o conhecimento
                gerado, as articulações realizadas e as vivências práticas se
                retroalimentassem. Esta abordagem integrada fortaleceu o
                aprendizado contínuo e aprofundou o impacto das ações,
                consolidando ainda mais a atuação do Instituto.
              </span>
              <span>
                {" "}
                O desenvolvimento institucional também se refletiu no
                estabelecimento de novas parcerias e na expansão das conexões
                com o Sul Global, fundamentadas em confiança, compromisso e
                colaboração.
              </span>
            </p>
            <p className='flex flex-col gap-8'>
              <span>
                Essa rede fortalece iniciativas duradouras, promovendo um ciclo
                contínuo de trocas de experiências, essenciais para sustentar o
                crescimento e a relevância do Beja no cenário filantrópico.
              </span>
              <span>
                Como reflexo dessa evolução, nosso manifesto, agora consolidado
                e exposto na entrada da Casa Beja, em São Paulo, expressa os
                objetivos do Instituto e convida à reimaginação da filantropia,
                promovendo as mudanças que desejamos ver no mundo, começando por
                nós mesmos. Na cadência dessa reimaginação, desenvolvemos uma
                nova identidade visual, que simboliza o engajamento da sociedade
                civil, do setor privado e do governo, além do desejo de
                movimento constante, dinâmico e atento às transformações do
                campo social.
              </span>
              <span>
                A nova configuração do Beja demonstrou a evolução natural de uma
                organização jovem, mas já reconhecida por sua capacidade de
                impulsionar transformações significativas. Com apenas três anos
                de existência, o Beja é reconhecido por sua posição como
                articulador e catalisador de mudanças, aprofundando diálogos e
                parcerias estratégicas com atores do ecossistema
                filantrópico.{" "}
              </span>
              <span>
                <strong>
                  {" "}
                  O que permanece inalterado é o propósito essencial que deu
                  origem ao Beja: contribuir para uma sociedade mais justa e
                  equitativa, por meio do uso estratégico e eficiente de
                  recursos filantrópicos, visando sempre seu efeito
                  multiplicador.
                </strong>{" "}
                Esse compromisso segue orientando cada passo, agora fortalecido
                por uma estrutura mais robusta e uma visão ainda mais clara
                sobre como gerar impacto sistêmico.{" "}
              </span>
              <span>
                Convidamos você a explorar este solo fértil, repleto de ideias e
                estratégias renovadas. Esperamos que esta leitura te inspire a
                respirar novos ares.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderLetter;
