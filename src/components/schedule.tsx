'use client'
import { useEffect } from "react";

export function Schedule() {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <section id="book" className="bg-background-light p-4 md:py-12 md:px-12 flex flex-col md:flex-row min-h-[1200px] md:min-h-[800px] gap-4 justify-center">
      <div className="w-full md:w-2/5 gap-4 flex flex-col md:self-center">
        <h2 className="text-3xl font-bold text-center sm:text-left text-primary">Agendamento</h2>
        <p className="text-lg">
          Para marcar uma consulta com a My Therapy, por favor, selecione um horário disponível no calendário. Escolha o dia e a hora que melhor se adequam à sua agenda, e complete o formulário para confirmar o seu agendamento.
          <br />
          Se precisar de ajuda ou tiver alguma dúvida sobre o agendamento, não hesite em entrar em contato conosco.
          <br />
          Estamos aqui para ajudar!
        </p>  
      </div>

      <div className="w-full  md:w-3/5">
        <div className="calendly-inline-widget" data-url="https://calendly.com/irisoliveira-k-on/30min?hide_gdpr_banner=1&primary_color=5ba4d8" style={{ minWidth: '320px', height: '800px' }}></div>
      </div>
    </section>
  )
}