import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  size?: "default" | "lg" | "xl" | "xxl";
  variant?: "premium" | "gold";
  className?: string;
}

const CTAButton = ({ children, size = "xl", variant = "premium", className }: CTAButtonProps) => {
  const handleClick = () => {
    window.open("https://pay.kiwify.com.br/k87rKkg", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CTAButton;