import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t border-gray-200">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="mb-4">
        <Image src={"/assets/imgs/logo.svg"} className='h-[80px]'  width={244} height={75} alt='My Therapy Logo' />
      </div>
      <div className="text-center">
        <p className="mb-2">
          Email: <a href="mailto:contato@mytherapy.com" className="text-blue-500 hover:underline">contato@mytherapy.com</a>
        </p>
        <p>
          Telefone: <a href="tel:+5511999999999" className="text-blue-500 hover:underline">+55 11 99999-9999</a>
        </p>
      </div>
      <div className="text-center mt-4">
        <p>© 2024 My Therapy. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
  )
}