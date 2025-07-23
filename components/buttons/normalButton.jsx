import Link from "next/link";
import { Button } from "../ui/button";

const NormalButton = ({
  text = "",
  link = "",
  onClick = () => {},
  isOpenNextTab = false,
  className = "",
}) => {
  const baseClasses = "font-light text-base rounded-full px-6 hover:bg-black/70";
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

export default NormalButton;
