import Link from "next/link";

export default function X() {
  return (
    <>
      <div className="hover:scale-125 delay-75">
        <button>
          <Link href="https://x.com">
            <svg
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6761 0.242676H17.4362L11.4061 7.02008L18.5 16.2427H12.9456L8.5951 10.6493L3.61723 16.2427H0.85544L7.30517 8.99348L0.5 0.242676H6.19545L10.1279 5.3553L14.6761 0.242676ZM13.7073 14.6181H15.2368L5.36441 1.78196H3.7232L13.7073 14.6181Z"
                fill="white"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
}
