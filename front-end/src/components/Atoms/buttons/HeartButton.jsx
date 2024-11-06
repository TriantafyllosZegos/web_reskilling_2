import Link from "next/link";
import { useState } from "react";

export default function HeartButton({ isInteractive }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isInteractive) {
      setIsActive(!isActive);
    }
  };

  return (
    <div>
      <button
        className={`delay-75 ${isInteractive ? "hover:scale-125" : ""}`}
        onClick={handleClick}
        disabled={!isInteractive}
      >
        <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 9.25C21 6.765 18.901 4.75 16.312 4.75C14.377 4.75 12.715 5.876 12 7.483C11.285 5.876 9.623 4.75 7.687 4.75C5.1 4.75 3 6.765 3 9.25C3 16.47 12 21.25 12 21.25C12 21.25 21 16.47 21 9.25Z"
            stroke="#181818"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isActive ? "#FF4747" : "none"}
          />
        </svg>
      </button>
    </div>
  );
}
