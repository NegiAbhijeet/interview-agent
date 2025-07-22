import Link from "next/link";
import { Button } from "../ui/button";

const NormalButton = ({
  text = "",
  link = "",
  onClick = () => {},
  className = "", // Accept className as a prop
}) => {
  const baseClasses = "font-light text-base rounded-full px-6 hover:bg-black/70";
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

export default NormalButton;
