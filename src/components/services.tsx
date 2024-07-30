import Image from "next/image";

const services = [
  {
    title: 'Terapia Sexual',
    description: 'Exploração e compreensão da sexualidade para uma vida sexual mais gratificante.',
    methodology: 'Utilizamos abordagens baseadas em evidências para tratar disfunções e melhorar a satisfação sexual.',
    image: '/images/therapy-sexual.jpg' 
  },
  {
    title: 'Gerenciamento de Ansiedade',
    description: 'Técnicas avançadas para um manejo eficaz da ansiedade e estresse.',
    methodology: 'Aplicamos técnicas de Terapia Cognitivo-Comportamental e Mindfulness para reduzir a ansiedade.',
    image: '/images/anxiety-management.jpg'
  },
  {
    title: 'Autoconhecimento',
    description: 'Apoio na jornada de autodescoberta e desenvolvimento pessoal.',
    methodology: 'Utilizamos a Terapia de Aceitação e Compromisso e outras técnicas de autoconhecimento.',
    image: '/images/self-awareness.jpg' 
  },
  {
    title: 'Identidade de Gênero',
    description: 'Orientação e apoio para questões relacionadas à identidade de gênero e sexualidade.',
    methodology: 'Fornecemos suporte através de um entendimento empático e recursos especializados.',
    image: '/images/gender-identity.jpg' 
  },
  {
    title: 'Relacionamentos e Conflitos Amorosos',
    description: 'Suporte para resolver conflitos e fortalecer relacionamentos.',
    methodology: 'Aplicamos técnicas de mediação e comunicação eficaz para melhorar os relacionamentos.',
    image: '/images/relationship-counseling.jpg'
  },
  {
    title: 'Terapia de Casal',
    description: 'Ajuda para casais enfrentando desafios e buscando um relacionamento mais saudável.',
    methodology: 'Utilizamos abordagens focadas na comunicação e resolução de conflitos para casais.',
    image: '/images/couple-therapy.jpg'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-background-dark py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary pb-4 text-center">Nossos Serviços e Metodologia</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              { /*
                *** Uncomente to use images ***
                <Image src={service.image} alt={service.title} fill className="object-cover" /> 
              */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-base leading-relaxed mb-4">{service.description}</p>
                <h4 className="text-lg font-medium text-primary mb-2">Metodologia</h4>
                <p className="text-base leading-relaxed">{service.methodology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}