import type { Metadata } from 'next'
import { Nunito, Poppins } from 'next/font/google'
import './globals.css'
import { Whatsapp } from '@/components/whatsapp'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poppins',
})
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'My Therapy',
  description: 'Transforme sua vida com nossa terapia especializada. No My Therapy, oferecemos suporte em ansiedade, sexualidade, relacionamentos e mais. Experimente uma abordagem moderna e personalizada com profissionais qualificados. Entre em contato e descubra como podemos ajudar você a alcançar uma vida mais equilibrada e satisfatória.',
  keywords: `
    Terapia Sexual,
    Ansiedade e Estresse,
    Autoconhecimento,
    Identidade de Gênero,
    Sexualidade,
    Relacionamentos,
    Terapia de Casal,
    Terapia Online,
    Psicoterapia,
    Tratamento de Disfunções Sexuais,
    Gerenciamento de Ansiedade,
    Terapia para Ansiedade,
    Autoconhecimento e Crescimento Pessoal,
    Orientação Sexual,
    Terapia de Casal Online,
    Conflitos Amorosos,
    Terapia de Aceitação e Compromisso,
    Psicologia de Relacionamentos,
    Sexualidade e Bem-Estar,
    Terapia para Identidade de Gênero,
    Como superar a ansiedade com terapia,
    Tratamento de disfunções sexuais e terapia sexual,
    Como melhorar o relacionamento com terapia de casal,
    Apoio psicológico para questões de identidade de gênero,
    Como encontrar um psicólogo especializado em sexualidade,
    Melhores práticas para gerenciamento de estresse e ansiedade,
    Terapia de aceitação e compromisso para autoconhecimento,
    Orientação sobre sexualidade e prazer,
    Psicoterapia online para autoconhecimento e desenvolvimento pessoa"
  `
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable}`}>
        {children}
        <Whatsapp />
      </body>
    </html>
  )
}
