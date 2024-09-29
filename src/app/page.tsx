import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            {/* Cabeçalho */}
            <header className="bg-gray-800 text-white p-6 text-center">
                <h1 className="text-3xl font-bold">Yuri Rangel</h1>
                <nav className="mt-4">
                    <Link href="#home" className="mr-4">Início</Link>
                    <Link href="#trabalhos" className="mr-4">Trabalhos</Link>
                    <Link href="#sobre" className="mr-4">Sobre</Link>
                    <Link href="#contato" className="mr-4">Contato</Link>
                </nav>
            </header>

            {/* Seção de Apresentação */}
            <section id="home" className="hero text-center p-12">
                <Image
                    src="/banner-yuri.jpg"
                    alt="Imagem de Destaque"
                    width={1200}
                    height={500}
                    className="object-cover w-full h-auto max-h-[400px]"
                />
                <div className="mt-8">
                    <h2 className="text-4xl font-semibold">Bem-vindo ao meu Portfólio</h2>
                    <p className="mt-4 text-lg">Sou um ilustrador do norte do Brasil. Tenho influencias dos quadrinhos, mangas e filmes. Trabalho tanto com o tradicional quanto digital.</p>
                </div>
            </section>

            {/* Galeria de Trabalhos */}
            <section id="trabalhos" className="gallery p-12 bg-white">
                <h2 className="text-3xl font-semibold text-center mb-8">Trabalhos Recentes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-800">
                    <div className="work-item text-center">
                        <Image src="/plano-fundo.webp" alt="Trabalho 1" width={500} height={500} />
                        <p className="mt-4">Descrição do Trabalho 1</p>
                    </div>
                    <div className="work-item text-center">
                        <Image src="/plano-fundo-2.webp" alt="Trabalho 2" width={500} height={500} />
                        <p className="mt-4">Descrição do Trabalho 2</p>
                    </div>
                    {/* Adicione mais itens conforme necessário */}
                </div>
            </section>

            {/* Sobre o Ilustrador */}
            <section id="sobre" className="about p-12 bg-gray-600 text-center">
                <h2 className="text-3xl font-semibold mb-8">Sobre o Ilustrador</h2>
                <p>Meu nome é Yuri Rangel, sou de Castanhal-PA. Tenho 33 anos e busco trazer para minhas ilustrações um pouco das minhas experiencias e aprendizados.</p>
                <p>Somos aquilo que aprendemos.</p>
            </section>

            {/* Seção de Contato */}
            <section id="contato" className="contact p-12 bg-white text-center">
                <h2 className="text-3xl font-semibold mb-8">Contato</h2>
                <form className="max-w-lg mx-auto">
                    <label htmlFor="nome" className="block text-left mb-2">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        className="w-full p-2 mb-4 border border-gray-600"
                    />
                    <label htmlFor="email" className="block text-left mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 mb-4 border border-gray-600"
                    />
                    <label htmlFor="mensagem" className="block text-left mb-2">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        className="w-full p-2 mb-4 border border-gray-600"
                    ></textarea>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Enviar</button>
                </form>
            </section>

            {/* Rodapé */}
            <footer className="bg-gray-800 text-white p-6 text-center">
                <p>&copy;<Link href="https://portifolio-yuri-rangel.vercel.app/"> 2024 Desenvolvido por Yuri Rangel</Link>. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}





/* import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
} */
