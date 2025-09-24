import React, { useEffect, useState, useRef } from "react";

export default function Typing({
  texts = ["Hello, world!"],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseBetween = 1200,
  loop = true,
  className = "",
  maxLineLength = 15, // max characters per line before wrapping
}) {
  const phrases = Array.isArray(texts) ? texts : [texts];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mounted = useRef(true);
  const containerRef = useRef(null);

  // Preprocess: split phrases into multiple lines if too long
  const splitPhrase = (phrase) => {
    const words = phrase.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + " " + word).trim().length <= maxLineLength) {
        currentLine = (currentLine + " " + word).trim();
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    });

    if (currentLine) lines.push(currentLine);
    return lines.join("\n");
  };

  const processedPhrases = phrases.map((p) => splitPhrase(p));

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  useEffect(() => {
    if (!mounted.current || !isVisible) return; // only animate if visible

    const currentPhrase = processedPhrases[index % processedPhrases.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      setDisplay((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && display === currentPhrase) {
        setTimeout(() => {
          if (mounted.current) setIsDeleting(true);
        }, pauseBetween);
      }

      if (isDeleting && display === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);

        if (!loop && index + 1 >= processedPhrases.length) {
          setDisplay(processedPhrases[processedPhrases.length - 1]);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [
    display,
    isDeleting,
    index,
    processedPhrases,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
    loop,
    isVisible, // dependency added
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{
        minWidth: "8ch",
        minHeight: "4ch",
      }}
    >
      <div className="whitespace-pre-wrap break-words text-center">
        {display}
        <span
          className="inline-block w-[1px] h-[1em] bg-current animate-pulse ml-1 align-bottom"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
