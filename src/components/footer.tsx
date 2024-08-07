import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          <Image src={"/assets/imgs/logo.svg"} className='h-[80px]' width={244} height={75} alt='My Therapy Logo' />
        </div>
        <div className="text-center flex flex-row items-center gap-11">
          <a
            className={` 
            flex items-center
            transition-colors duration-300 group
            gap-2 text-lg hover:underline`
            }
            href="tel:+5511999999999"
            rel="noopener Noreferrer"
            target="_blank"
          >
            <div className="bg-primary rounded p-2 text-white group-hover:bg-teal-700">
              <PhoneIcon size={25} />
            </div>
            (42) 511111111
          </a>

          <a
            className={` 
            flex items-center
            transition-colors duration-300 group
            gap-2 text-lg hover:underline`
            }
            href="mailto:contato@mytherapy.com"
            rel="noopener Noreferrer"
            target="_blank"
          >
            <div className="bg-highlight-primary rounded p-2 text-white group-hover:bg-blue-500">
              <MailIcon size={25} />
            </div>
            contato@mytherapy.com
          </a>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 My Therapy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}