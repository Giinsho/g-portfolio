import { useRef, useState } from "react";
import ButtonLink from "../ButtonLink";

const CopyEmailSection = () => {
  const linkRef = useRef(null);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCopy = () => {
    const link = linkRef.current;

    link.setSelectionRange(0, link.value.length);

    navigator.clipboard
      .writeText(link.value)
      .then(() => {
        console.log("Link copied:", link.value);
        setIsLinkCopied(true);
        setTimeout(() => setIsLinkCopied(false), 3000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });

    link.setSelectionRange(0, 0);
  };

  return (
    <div className="flex flex-row justify-between items-center w-50% ml-4">
      <ButtonLink
        onClick={handleCopy}
        text={isLinkCopied ? "Email Copied!" : "Copy email"}
        styles="py-3 px-6 text-[16px] w-full h-full"
      />

      <input
        id="email"
        type="text"
        ref={linkRef}
        defaultValue="lukasz.graczyk.dev@gmail.com"
        readOnly
        className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ml-4 "
      />
    </div>
  );
};

export default CopyEmailSection;
