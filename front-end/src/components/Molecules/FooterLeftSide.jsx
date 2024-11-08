import Facebook from "../Atoms/icons/facebook";
import Instagram from "../Atoms/icons/instagram";
import LinkedIn from "../Atoms/icons/linkedin";
import X from "../Atoms/icons/x";
import Youtube from "../Atoms/icons/youtube";

export default function FooterLeftSide() {
  return (
    <>
      <div className="flex flex-row  justify-left lg:justify-start">
        <div className="flex flex-col">
          <div className="flex flex-row  pb-8">
            <svg
              width="64"
              height="27"
              viewBox="0 0 64 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9_1213)">
                <path
                  d="M1.06445 21H13.7485V17.444H5.60045V0.97998H1.06445V21Z"
                  fill="white"
                />
                <path
                  d="M22.0869 18.228C19.7909 18.228 18.5029 16.548 18.5029 13.748V13.524C18.5029 10.724 19.8469 9.10002 22.0869 9.10002C24.3549 9.10002 25.6709 10.78 25.6709 13.58V13.776C25.6709 16.548 24.3549 18.228 22.0869 18.228ZM22.0589 21.308C26.4549 21.308 29.7869 18.368 29.7869 13.748V13.524C29.7869 8.96002 26.4829 6.02002 22.0869 6.02002C17.6909 6.02002 14.3589 9.01602 14.3589 13.608V13.832C14.3589 18.396 17.6909 21.308 22.0589 21.308Z"
                  fill="white"
                />
                <path
                  d="M38.165 26.404C42.981 26.404 45.8649 24.192 45.8929 19.852V6.35602H41.861V8.54002C41.021 7.05602 39.5929 6.02002 37.2129 6.02002C33.5729 6.02002 30.7729 8.96002 30.7729 13.16V13.356C30.7729 17.696 33.6009 20.356 37.1569 20.356C39.3129 20.356 41.049 19.068 41.861 17.64V19.852C41.861 22.148 40.629 23.436 38.165 23.436C36.093 23.436 35.169 22.596 34.917 21.308H30.8849C31.2769 24.332 33.433 26.404 38.165 26.404ZM38.361 17.304C36.345 17.304 34.917 15.792 34.917 13.356V13.132C34.917 10.724 36.177 9.10002 38.445 9.10002C40.6569 9.10002 41.9729 10.612 41.9729 13.104V13.3C41.9729 15.792 40.489 17.304 38.361 17.304Z"
                  fill="white"
                />
                <path
                  d="M55.4616 18.228C53.1656 18.228 51.8776 16.548 51.8776 13.748V13.524C51.8776 10.724 53.2216 9.10002 55.4616 9.10002C57.7296 9.10002 59.0456 10.78 59.0456 13.58V13.776C59.0456 16.548 57.7296 18.228 55.4616 18.228ZM55.4336 21.308C59.8296 21.308 63.1616 18.368 63.1616 13.748V13.524C63.1616 8.96002 59.8576 6.02002 55.4616 6.02002C51.0656 6.02002 47.7336 9.01602 47.7336 13.608V13.832C47.7336 18.396 51.0656 21.308 55.4336 21.308Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_1213">
                  <rect
                    width="63"
                    height="27"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col pb-6 text-white">
            <div className="pb-6  justify-center lg:justify-start">
              <h1 className="font-[700] pb-1">Address:</h1>
              <p className="font-[400]">USA, California</p>
            </div>
            <div>
              <h1 className="font-[700] pb-1">Contact:</h1>
              <p className="underline font-[400]">1800 123 4567</p>
              <p className="underline font-[400]">javaria.y2b@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Facebook />
            <Instagram />
            <X />
            <LinkedIn />
            <Youtube />
          </div>
        </div>
      </div>
    </>
  );
}
