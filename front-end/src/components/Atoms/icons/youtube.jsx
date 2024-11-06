import Link from "next/link";

export default function Youtube() {
  return (
    <>
      <div className="hover:scale-125 delay-75">
        <button>
          <Link href="https://youtube.com">
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0931 2.20301C19.9792 1.78041 19.7566 1.39501 19.4475 1.08518C19.1383 0.775338 18.7534 0.551868 18.3311 0.437007C16.7651 0.00700739 10.5001 7.59651e-06 10.5001 7.59651e-06C10.5001 7.59651e-06 4.23609 -0.00699261 2.66909 0.404007C2.24701 0.524154 1.86291 0.750785 1.55365 1.06214C1.2444 1.3735 1.02037 1.75913 0.903086 2.18201C0.490086 3.74801 0.486085 6.99601 0.486085 6.99601C0.486085 6.99601 0.482085 10.26 0.892085 11.81C1.12209 12.667 1.79709 13.344 2.65509 13.575C4.23709 14.005 10.4851 14.012 10.4851 14.012C10.4851 14.012 16.7501 14.019 18.3161 13.609C18.7386 13.4943 19.1238 13.2714 19.4337 12.9622C19.7436 12.653 19.9675 12.2682 20.0831 11.846C20.4971 10.281 20.5001 7.03401 20.5001 7.03401C20.5001 7.03401 20.5201 3.76901 20.0931 2.20301ZM8.49609 10.005L8.50109 4.00501L13.7081 7.01001L8.49609 10.005Z"
                fill="white"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
}