import CTAButton from "@/components/CTAButton";
import VideoSection from "@/components/VideoSection";
import BenefitCard from "@/components/BenefitCard";
import TestimonialCard from "@/components/TestimonialCard";
import StepCard from "@/components/StepCard";
import PTKSection from "@/components/PTKSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SalesPage = () => {
  const benefits = [
    {
      icon: "🧾",
      title: "Fornecedores Atualizados",
      description: "Lista sempre atualizada com os melhores fornecedores do Brás, testados e aprovados."
    },
    {
      icon: "📦",
      title: "Entrega Nacional",
      description: "Fornecedores que entregam para todo o Brasil com segurança e rapidez."
    },
    {
      icon: "🧼",
      title: "Roupas, Perfumes e Acessórios",
      description: "Linha completa unissex: roupas, perfumes e acessórios de qualidade."
    },
    {
      icon: "🧠",
      title: "Dicas de Segurança",
      description: "Aprenda como não cair em golpes e identificar fornecedores confiáveis."
    },
    {
      icon: "💸",
      title: "Planilha Bônus para Revenda",
      description: "Ganhe uma planilha exclusiva para calcular sua margem de lucro na revenda."
    }
  ];

  const testimonials = [
    {
      name: "Carlos",
      location: "São Paulo - SP",
      text: "O guia é direto, já pedi 3 peças top e vendi tudo rápido.",
      rating: 5
    },
    {
      name: "Amanda",
      location: "Rio de Janeiro - RJ", 
      text: "Finalmente encontrei fornecedores confiáveis! Já fiz 5 pedidos sem problema.",
      rating: 5
    },
    {
      name: "Rodrigo",
      location: "Belo Horizonte - MG",
      text: "Economia de tempo e dinheiro. Não preciso mais ir até o Brás físicamente!",
      rating: 5
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Pague pelo Link",
      description: "Clique no botão e finalize sua compra de forma 100% segura.",
      icon: "💳"
    },
    {
      step: 2,
      title: "Receba o Guia",
      description: "Acesso imediato ao guia completo direto no seu email.",
      icon: "📧"
    },
    {
      step: 3,
      title: "Escolha os Fornecedores",
      description: "Navegue pela lista e escolha os melhores para seu negócio.",
      icon: "🎯"
    },
    {
      step: 4,
      title: "Compre Direto",
      description: "Entre em contato direto com os fornecedores via WhatsApp.",
      icon: "📱"
    },
    {
      step: 5,
      title: "Receba e Lucre",
      description: "Receba em casa e revenda com margem de lucro garantida!",
      icon: "💰"
    }
  ];

  const faqs = [
    {
      question: "Como recebo o guia após a compra?",
      answer: "Assim que o pagamento for confirmado, você receberá um email com o link para download do guia completo. O acesso é imediato!"
    },
    {
      question: "Quem são os fornecedores inclusos?",
      answer: "São fornecedores verificados do Brás especializados em roupas masculinas, perfumes e acessórios. Todos testados e aprovados por nossa equipe."
    },
    {
      question: "E se eu não gostar do produto?",
      answer: "Oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Os fornecedores entregam em todo o Brasil?",
      answer: "Sim! Todos os fornecedores do nosso guia fazem entregas nacionais via Correios ou transportadoras."
    },
    {
      question: "Vou conseguir revender com lucro?",
      answer: "Claro! Incluímos uma planilha bônus que te ensina a calcular margens de lucro e estratégias de revenda."
    },
    {
      question: "O guia é atualizado?",
      answer: "Sim, mantemos nossa lista sempre atualizada com novos fornecedores e removemos aqueles que não atendem nossos padrões."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-montserrat">
      {/* Header Alert */}
      <div className="bg-brand-red text-white text-center py-3 px-4">
        <p className="font-semibold">🔥 Oferta é válida por pouco tempo</p>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="relative inline-block bg-white p-4 rounded-xl shadow-sm">
            <img 
              src="/lovable-uploads/logo-transparent.png" 
              alt="Levando o Brás até Você" 
              className="h-40 md:h-56 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-brand-black mb-6 leading-tight">
            Os contatos reais dos fornecedores do Brás{" "}
            <span className="text-brand-red">direto no seu celular</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-gray mb-8 max-w-4xl mx-auto leading-relaxed">
            Receba acesso VIP aos melhores fornecedores de roupas, calçados, perfumes e acessórios – 
            <strong className="text-brand-black"> sem sair de casa.</strong>
          </p>
          
          <div className="mb-8 px-4">
            <CTAButton size="xxl" className="w-full max-w-md mx-auto">
              🚀 Quero garantir agora
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />

      {/* About Product */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black mb-6">
              Levando o Brás até Você!
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                Este guia contém <strong className="text-brand-red">contatos verificados</strong> de fornecedores do Brás, 
                ideal para quem quer comprar para uso próprio ou revender.
              </p>
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-red">
                <p className="text-lg font-semibold text-brand-black">
                  "Sem enrolação, sem golpe, só fornecedor brabo que entrega pra todo o Brasil."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black text-center mb-12">
            O que você vai receber:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black text-center mb-12">
            O que nossos clientes estão falando:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black text-center mb-12">
            Como funciona:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 p-8 rounded-xl border border-brand-gold/20">
            <h2 className="text-3xl font-playfair font-bold text-brand-black mb-6">
              🛡️ Garantia e Segurança
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-brand-black mb-2">💳 Pagamento 100% Seguro</h3>
                <p className="text-brand-gray text-sm">Processado pela Kiwify, a plataforma mais segura do Brasil</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-brand-black mb-2">📧 Suporte Disponível</h3>
                <p className="text-brand-gray text-sm">Tire suas dúvidas por email quando precisar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-b from-brand-red/5 to-brand-red/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black mb-6">
            Tá esperando o quê?
          </h2>
          <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto">
            Clique no botão abaixo e garante agora o acesso aos fornecedores do Brás no conforto da sua casa.
          </p>
          
          {/* Pricing Offer */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-brand-gold mb-8 max-w-md mx-auto">
  <div className="text-center">
    <p className="text-sm font-semibold text-brand-red uppercase mb-1">🔥 Oferta por tempo limitado</p>

    <p className="text-sm text-brand-gray line-through">De R$ 297,00</p>
    <div className="text-4xl font-bold text-brand-red mb-1">R$ 97,00</div>

    <p className="text-brand-gray">à vista ou</p>
    <p className="text-lg font-semibold text-brand-black mb-2">12x de R$ 10,03</p>

    <p className="text-sm text-brand-red font-semibold animate-pulse">⏳ Vagas limitadas — pode sair do ar a qualquer momento</p>
  </div>
</div>

          
          <CTAButton size="xxl" className="mb-4 w-full max-w-md mx-auto">
            🔥 Quero meu guia agora
          </CTAButton>
          
          <p className="text-sm text-brand-gray">
            Acesso imediato • Pagamento 100% seguro • Garantia de 7 dias
          </p>
        </div>
      </div>

      {/* PTK Section */}
      <PTKSection />

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-brand-light rounded-lg px-6">
                <AccordionTrigger className="text-left font-montserrat font-semibold text-brand-black hover:text-brand-red">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-brand-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-playfair font-bold mb-4">Siga o PTK nas redes:</h3>
            <a 
              href="https://instagram.com/ptk_ofcl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              📸 @ptk_ofcl
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Levando Brás até Você - Todos os direitos reservados
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Suporte: Entre em contato tropadoptkoficial@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
