import Image from 'next/image'
import Link from 'next/link'

export async function Hero() {
  return (
    <section className="w-full h-[130vh] sm:h-screen bg-background-dark flex flex-col md:flex-row">
      <div className="max-w-[850px] mr-auto sm:pl-14 pt-24 lg:pt-0 flex flex-col justify-center  h-full items-center  lg:items-start">        
        <h1 className="text-4xl sm:text-6xl font-bold text-center lg:text-left">
        Encontre o Apoio Que Você Precisa para uma Vida Plena
        </h1>
        <p className="py-4 max-w-[700px] text-center lg:text-left">
        Transforme Desafios em Oportunidades e Alcance Seu Potencial Máximo com Nossa Terapia Especializada
        Descubra um caminho transformador para uma vida mais equilibrada e realizada. 
        Nossa terapia especializada é projetada para ajudá-lo a enfrentar desafios, explorar sua verdadeira identidade e fortalecer relacionamentos.
        Com uma abordagem personalizada e apoio profissional, estamos aqui para guiá-lo em cada etapa da sua jornada para um bem-estar pleno e gratificante.
        </p>
        <Link
          href="#book"
          className="
            cursor-pointer transition ease-in-out w-48 font-semibold flex shadow-md 
            items-center justify-center py-3 rounded-md text-white 
            bg-highlight-primary duration-300 hover:bg-highlight-secondary hover:scale-110"
        >
          Agende uma Sessão!
        </Link>
      </div>
      <div className="w-full lg:w-3/4 h-full relative">
        <Image
          src="/assets/imgs/hero.png"
          sizes="(max-width: 544px) 100vw (max-heigth: 544px)"
          fill
          alt="avatar"
          priority={true}
        />
      </div>
    </section>
  )
}
