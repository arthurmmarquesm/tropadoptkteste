const VideoSection = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-xl p-4 text-center border-2 border-dashed border-gray-300">
        <h3 className="text-xl font-montserrat font-semibold text-brand-gray mb-4">
          📲 Assista ao vídeo antes de garantir seu acesso
        </h3>

        {/* Vídeo responsivo 9:16 (sem autoplay, com som) */}
        <div className="relative w-full aspect-[9/16] mb-6">
          <iframe
            src="https://player.vimeo.com/video/1104986320"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title="Vídeo de Vendas"
          ></iframe>
        </div>

        {/* Botão CTA */}
        <a
          href="https://pay.kiwify.com.br/k87rKkg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md transition duration-300"
        >
          Quero meu acesso agora!
        </a>
      </div>
    </div>
  );
};

export default VideoSection;
