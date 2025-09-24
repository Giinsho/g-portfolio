import { useState } from "react";
import ButtonLink from "./ButtonLink";
import SendMailIcon from "./SendMailIcon";

const CopyEmailSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "lukasz.graczyk.dev@gmail.com";

  const [animate, setAnimate] = useState(false);
  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch(() => fallbackCopy());
    } else {
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    // Create a textarea
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.readOnly = true; // iOS requires readonly
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    textArea.style.fontSize = "16px"; // Prevent zoom on iOS

    document.body.appendChild(textArea);

    // iOS selection trick
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textArea);
    selection?.removeAllRanges();
    selection?.addRange(range);

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      alert("Copy failed. Please copy manually :(");
      console.error("Fallback copy failed:", err);
    }

    selection?.removeAllRanges();
    document.body.removeChild(textArea);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 py-6 ">
      <ButtonLink
        onClick={handleCopy}
        text={isCopied ? "Email Copied!" : "Copy Email"}
        styles="py-3 px-6 text-[16px] sm:w-[20%] w-[50%] cursor-pointer"
      />

      <a
        href={`mailto:${email}`}
        className="bg-blue-gradient font-poppins font-medium text-primary outline-none rounded-[10px] py-3 px-6 text-[16px] sm:w-[5%] w-[20%] pointer-events-auto relative flex items-center justify-center gap-2"
      >
        <SendMailIcon />
      </a>
      <input
        type="text"
        value={email}
        readOnly
        size={email.length} // width adjusts to text length
        className="px-5 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 text-center dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
};

export default CopyEmailSection;
