interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-montserrat font-semibold text-brand-black text-lg mb-2">
        {title}
      </h3>
      <p className="text-brand-gray text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;