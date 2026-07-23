import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  deleteSpeed?: number;
  loop?: boolean;
  delayAfterType?: number;
  delayBeforeDelete?: number;
};

export function Typewriter({
  text,
  speed = 100,
  className,
  onComplete,
  deleteSpeed = 50,
  loop = false,
  delayAfterType = 1500,
  delayBeforeDelete = 500,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting) {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else {
        if (onComplete && !loop) {
          onComplete();
        }
        if (loop) {
          const timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayAfterType);
          return () => clearTimeout(timer);
        }
      }
    } else {
      if (index > 0) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, deleteSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(false);
        }, delayBeforeDelete);
        return () => clearTimeout(timer);
      }
    }
  }, [
    index,
    text,
    speed,
    deleteSpeed,
    isDeleting,
    loop,
    onComplete,
    delayAfterType,
    delayBeforeDelete,
  ]);

  return <span className={className}>{displayText}</span>;
}
