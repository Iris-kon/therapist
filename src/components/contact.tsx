import { RiCellphoneFill, RiMailFill, RiPhoneFill, RiWhatsappLine } from "@remixicon/react";
import { MailIcon, PhoneIcon } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export function Contact() {
  return (
    <section
      id="contact"
      className="grid gap-4 p-4 md:py-14 md:px-10 md:grid-cols-2"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-center sm:text-left text-primary">Contato</h2>
        <p className="text-lg">
          Tem alguma pergunta? Nossa equipe está pronta para ajudar. Fale conosco!
        </p>

        <a
          className={` 
            flex items-center
            transition-colors duration-300 group
            gap-2 text-lg hover:underline`
          }
          href="https://api.whatsapp.com/send"
          rel="noopener Noreferrer"
          target="_blank"
        >
          <div className="bg-green-600 rounded p-2 text-white group-hover:bg-green-800">
            <RiWhatsappLine size={25} />
          </div>
          Whatsapp
        </a>

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
      <div className="overflow-hidder rounded-md shadow-md">
        <img
          className="w-full contain-content rounded-md"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=-24.3295476,-50.627126&markers=label:M|-24.3295476,-50.627126&size=600x400&&zoom=13&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          alt="mapa do local do estabelecimento"
        />
      </div>
    </section>
  )
}