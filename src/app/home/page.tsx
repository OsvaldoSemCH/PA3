import Image from "next/image";
import ImgReact from "@/assets/React.png"
import ImgJQuery from "@/assets/JQuery.png"
import ImgTailwindCSS from "@/assets/TailwindCSS.png"
import ImgNext from "@/assets/Next.jpeg"

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">CSS Resposive Cards</h1>
      <div className="flex flex-row justify-center items-center flex-wrap gap-8">
      
        <div className="flex flex-col justify-between items-center w-48 h-80 md:w-64 md:h-[25rem] border-cy3 border-2 border-solid">
          <div className="flex justify-center items-center h-1/3 bg-cy3 w-full">
            <span className="text-white text-2xl font-bold">React</span>
          </div>
          <span>Muito texto</span>
          <a href="#react" className="flex justify-center items-center m-4 bg-cy3 w-3/4">
            <span className="text-white text-xl font-bold">Ler Mais</span>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center w-48 h-80 md:w-64 md:h-[25rem] border-cy3 border-2 border-solid">
          <div className="flex justify-center items-center h-1/3 bg-cy3 w-full">
            <span className="text-white text-2xl font-bold">Tailwind CSS</span>
          </div>
          <span>Muito texto</span>
          <a href="#tailwind" className="flex justify-center items-center m-4 bg-cy3 w-3/4">
            <span className="text-white text-xl font-bold">Ler Mais</span>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center w-48 h-80 md:w-64 md:h-[25rem] border-cy3 border-2 border-solid">
          <div className="flex justify-center items-center h-1/3 bg-cy3 w-full">
            <span className="text-white text-2xl font-bold">Next</span>
          </div>
          <span>Muito texto</span>
          <a href="#next" className="flex justify-center items-center m-4 bg-cy3 w-3/4">
            <span className="text-white text-xl font-bold">Ler Mais</span>
          </a>
        </div>

        <div className="flex flex-col justify-between items-center w-48 h-80 md:w-64 md:h-[25rem] border-cy3 border-2 border-solid">
          <div className="flex justify-center items-center h-1/3 bg-cy3 w-full">
            <span className="text-white text-2xl font-bold">Jquery</span>
          </div>
          <span>Muito texto</span>
          <a href="#jquery" className="flex justify-center items-center m-4 bg-cy3 w-3/4">
            <span className="text-white text-xl font-bold">Ler Mais</span>
          </a>
        </div>

      </div>

      <hr className="w-full my-2"></hr>
      <section id="react" className="w-full flex flex-col justify-center items-center p-8">
        <Image src={ImgReact} alt="React" width={200} height={200} className="object-cover"/>
        <span className="text-cblue text-2xl my-4">React</span>
        <span>
          O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco 
          em criar interfaces de usuário em páginas web. Criado em 2011 pelo Facebook, com a criação de views declarativas e 
          baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas 
          no feed de notícias da rede social e melhorar a manutenção de código.
        </span>
      </section>
      <hr className="w-full my-2"></hr>
      <section id="tailwind" className="w-full flex flex-col justify-center items-center p-8">
        <Image src={ImgTailwindCSS} alt="Tailwind CSS" width={200} height={200} className="object-cover"/>
        <span className="text-cblue text-2xl my-4">Tailwind CSS</span>
        <span>
          Tailwind CSS é um framework CSS de código aberto. A principal característica desta biblioteca é que, diferentemente 
          de outros frameworks CSS como Bootstrap , ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas. 
          Em vez disso, ela cria uma lista de classes CSS "utilitárias" que podem ser usadas para estilizar cada elemento misturando e combinando.
        </span>
      </section>
      <hr className="w-full my-2"></hr>
      <section id="next" className="w-full flex flex-col justify-center items-center p-8">
        <Image src={ImgNext} alt="Next" width={200} height={200} className="object-cover"/>
        <span className="text-cblue text-2xl my-4">Next.js</span>
        <span>
          Next.js é uma estrutura de desenvolvimento web de código aberto criada pela empresa privada Vercel, que fornece aplicativos web 
          baseados em React com renderização do lado do servidor e geração de sites estáticos. A documentação do React menciona o Next.js 
          entre as "cadeias de ferramentas recomendadas", aconselhando-o aos desenvolvedores ao "construir um site renderizado pelo servidor 
          com Node.js". Enquanto os aplicativos React tradicionais só podem renderizar seu conteúdo no navegador do lado do cliente, o Next.js 
          extende essa funcionalidade para incluir aplicativos renderizados no lado do servidor.
        </span>
      </section>
      <hr className="w-full my-2"></hr>
      <section id="jquery" className="w-full flex flex-col justify-center items-center p-8">
        <Image src={ImgJQuery} alt="JQuery" width={200} height={200} className="object-cover"/>
        <span className="text-cblue text-2xl my-4">jQuery</span>
        <span>
          jQuery é uma biblioteca JavaScript projetada para simplificar a travessia e manipulação da árvore HTML DOM, bem como o tratamento 
          de eventos, animações CSS e Ajax. É um software gratuito e de código aberto que usa a licença MIT permissiva. Em agosto de 2022, 
          o jQuery era usado por 77% dos 10 milhões de sites mais populares. A análise da Web indica que é a biblioteca JavaScript mais 
          amplamente implantada por uma grande margem, tendo pelo menos três a quatro vezes mais uso do que qualquer outra biblioteca JavaScript.
        </span>
      </section>
    </div>
  );
}
