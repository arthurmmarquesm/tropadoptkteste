const PTKSection = () => {
  return (
    <div className="bg-brand-light py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-black text-center mb-12">
          Quem é PTK?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
  <div className="w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
    <img
      src="https://i.ibb.co/k69Ws7Jz/ptk-foto.jpg"
      alt="Foto do PTK"
      className="w-full h-auto object-cover"
    />
  </div>
</div>


          
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-playfair font-bold text-brand-black mb-6">
                A História por Trás do Sucesso
              </h3>
              
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  <strong className="text-brand-black">PTK</strong> é um empreendedor que nasceu e cresceu na quebrada, 
                  conhece cada beco do Brás como a palma da mão.
                </p>
                
                <p>
                  Depois de anos frequentando o maior centro de roupas do Brasil, 
                  ele mapeou os <strong className="text-brand-red">fornecedores mais confiáveis</strong> e 
                  criou uma rede sólida de contatos.
                </p>
                
                <p>
                  Hoje, PTK ajuda pessoas de todo o Brasil a ter acesso aos mesmos fornecedores 
                  que os grandes lojistas usam, mas sem precisar sair de casa ou cair em golpes.
                </p>
                
                <div className="bg-brand-light p-4 rounded-lg mt-6">
                  <p className="font-montserrat font-semibold text-brand-black">
                    "Minha missão é democratizar o acesso aos melhores fornecedores do Brás, 
                    para que qualquer pessoa possa empreender com segurança."
                  </p>
                  <p className="text-sm text-brand-gray mt-2">- PTK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTKSection;