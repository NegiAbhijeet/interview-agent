import Link from "next/link";
import { Button } from "../ui/button";

const GradientButton = ({
  text = "",
  link = "",
  onClick = () => {},
  isOpenNextTab = false,
  className = "",
}) => {
  const baseClasses =
    "bg-gradient text-white font-light hover:text-gray-100 text-base rounded-full px-6";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div>
      {link ? (
        isOpenNextTab ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className={combinedClasses}>
              {text}
            </Button>
          </a>
        ) : (
          <Link href={link}>
            <Button className={combinedClasses}>
              {text}
            </Button>
          </Link>
        )
      ) : (
        <Button className={combinedClasses} onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};

export default GradientButton;
