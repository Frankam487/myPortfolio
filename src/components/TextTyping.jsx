import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="text-xl font-mono">{displayedText}</p>;
};

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <TypingText text="Bienvenue sur mon site !" speed={100} />
    </div>
  );
}
