import Bush from '../../public/assets/Ilustracao-3.png'

const ManifestSection = () => {
    return (
        <div className="relative flex flex-col items-center gap-12 w-full py-50 overflow-hidden bg-porcelain">
            <div className="flex justify-between w-full [&>p]:leading-none px-32 editorial text-2xl z-10">
                <p>www.<br />institutobeja.org</p>
                <p>(O)<br />Desde 2021</p>
            </div>

            <div style={{ backgroundImage: "url('/assets/ManifestBg.png')" }} className="w-[74rem] h-[105rem] bg-center bg-cover py-52 px-51 z-10">
                <div className="flex flex-col justify-start h-full gap-12 text-porcelain">
                    <h1 className="text-[64px] editorial">Manifesto Beja</h1>

                    <p className="text-2xl leading-10">
                        Para mudar o mundo, é preciso vontade.<br />
                        Recursos. Questionamentos.<br />
                        E quem junte tudo isso.<br />
                        Mas vá além: escute. <br />
                        Troque. Evolua. Inove.<br />
                        Traga um ar diferente para o sistema.<br />
                        Ajude ele a respirar.<br />
                        Que não se conforme.<br />
                        Veja além do status quo.<br />
                        Tenha liberdade e segurança <br />
                        para trazer um novo ponto de vista.<br />
                        Não tenha amarras.<br />
                        E amarre as pontas soltas.<br />
                        Junte quem quer fazer, quem tem recurso,<br />
                        quem tem críticas e oxigena tudo, <br />
                        para que a solução conjunta possa florescer.<br />
                        Que seja o agente da renovação.<br />
                        Aprendamos todos com a natureza: <br />
                        nada cresce sem O2.<br />
                        A vida precisa de ar.<br />
                        E a filantropia, de novos ares.<br />
                        Para isso nasceu o Beja: <br />
                        articular novas possibilidades para a filantropia,  <br />
                        oxigenando processos, espaços e relações.<br />
                        <br /><br />
                        Beja. Oxigenando a filantropia desde 2021.
                    </p>
                </div>
            </div>

            <img src={Bush} alt="Bush image" className='absolute -right-85 bottom-0'/>
        </div> 
  ) 
} 

export default ManifestSection