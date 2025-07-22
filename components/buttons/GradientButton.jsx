import Link from "next/link";
import { Button } from "../ui/button";

const GradientButton = ({
  text = "",
  link = "",
  onClick = () => {},
  className = "", // Accept className as a prop
}) => {
  const baseClasses =
    "bg-gradient text-white font-light hover:text-gray-100 text-base rounded-full px-6";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div>
      {link ? (
        <Link href={link}>
          <Button className={combinedClasses}>
            {text}
          </Button>
        </Link>
      ) : (
        <Button className={combinedClasses} onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};

export default GradientButton;
