import React, { useState, useEffect, useRef } from "react";

interface AutoTextProps {
  text: string;
  speed: number;
}

const AutoText: React.FC<AutoTextProps> = ({ text, speed }) => {
  const [index, setIndex] = useState(0);
  const textElement = useRef<HTMLHeadingElement>(null);
  const splitText = text.split("");

  useEffect(() => {
    const writeText = () => {
      if (textElement.current) {
        textElement.current.innerHTML = splitText
          .slice(0, index)
          .join("")
          .replace(/\n/g, "<br/>");
      }
      setIndex((prev) =>
        prev + 1 > splitText.length ? splitText.length : prev + 1
      );
    };

    const timeout = setTimeout(writeText, speed);

    return () => clearTimeout(timeout);
  }, [index, speed, splitText]);

  return <h1 ref={textElement} className="auto-text text-4xl text-pretty mb-10"></h1>;
};

export default AutoText;
