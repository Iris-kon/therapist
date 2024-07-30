
import { RiWhatsappLine } from "@remixicon/react";
import { ChevronUp } from "lucide-react";

export function Whatsapp() {
  return (
    <a
      className={`
        fixed bottom-0 shadow-md right-0 p-2 bg-green-600 text-white bg-opacity-95 rounded 
        transition-opacity duration-300 mr-4 mb-11 z-50 items-center 
        text-xs flex gap-2 hover:animate-bounce`
      }
      href="https://api.whatsapp.com/send"
      rel="noopener Noreferrer"
      target="_blank"
    >
      <RiWhatsappLine size={40} />
    </a>
  )
}