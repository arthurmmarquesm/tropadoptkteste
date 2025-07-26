interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, location, text, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-montserrat font-semibold text-brand-black">{name}</h4>
          <p className="text-sm text-brand-gray">{location}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-brand-gold text-lg">⭐</span>
        ))}
      </div>
      <p className="text-brand-gray text-sm leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );
};

export default TestimonialCard;