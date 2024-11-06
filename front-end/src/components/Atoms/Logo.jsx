import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="hover:scale-125 delay-75">
        <Link href="/">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 0H0L15 15H0L15 30H30L15 15H30L15 0Z"
              fill="#181818"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
