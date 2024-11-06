import Link from "next/link";

export default function Facebook() {
  return (
    <>
      <div className="hover:scale-125 delay-75">
        <button>
          <Link href="https://www.facebook.com">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 10.3038C20.5 4.74719 16.0229 0.242676 10.5 0.242676C4.97715 0.242676 0.5 4.74719 0.5 10.3038C0.5 15.3255 4.15684 19.4879 8.9375 20.2427V13.2121H6.39844V10.3038H8.9375V8.0872C8.9375 5.56564 10.4305 4.1728 12.7146 4.1728C13.8088 4.1728 14.9531 4.36931 14.9531 4.36931V6.84529H13.6922C12.45 6.84529 12.0625 7.6209 12.0625 8.41658V10.3038H14.8359L14.3926 13.2121H12.0625V20.2427C16.8432 19.4879 20.5 15.3257 20.5 10.3038Z"
                fill="white"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
}
