import React, { useEffect, useState, useRef } from "react";

/**
 * Typing animation component
 *
 * Props:
 * - texts: string or array of strings
 * - typingSpeed: ms per character (default 80)
 * - deletingSpeed: ms per character when deleting (default 40)
 * - pauseBetween: ms to wait after finishing a word (default 1200)
 * - loop: boolean (default true)
 * - className: optional Tailwind classes
 */
export default function Typing({
  texts = "Hello, world!",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseBetween = 1200,
  loop = true,
  className = "",
}) {
  const phrases = Array.isArray(texts) ? texts : [texts];
  const [index, setIndex] = useState(0); // current phrase
  const [display, setDisplay] = useState(""); // text shown
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const currentPhrase = phrases[index % phrases.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      setDisplay((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && display === currentPhrase) {
        // pause before deleting
        setTimeout(() => {
          if (mounted.current) setIsDeleting(true);
        }, pauseBetween);
      }

      if (isDeleting && display === "") {
        setIsDeleting(false);
        setIndex((i) => i + 1);

        if (!loop && index + 1 >= phrases.length) {
          // stop if not looping
          setDisplay(phrases[phrases.length - 1]);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [
    display,
    isDeleting,
    index,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
    loop,
  ]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{display}</span>
      {/* blinking caret */}
      <span className="bg-current animate-pulse" aria-hidden="true" />
    </div>
  );
}
