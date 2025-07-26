interface StepCardProps {
  step: number;
  title: string;
  description: string;
  icon: string;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
      <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {step}
      </div>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-montserrat font-semibold text-brand-black text-lg mb-2">
        {title}
      </h3>
      <p className="text-brand-gray text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;