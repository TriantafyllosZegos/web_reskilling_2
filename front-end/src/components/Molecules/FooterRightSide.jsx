import Link from "next/link";

export default function FooterRightSide() {
  return (
    <>
      <div className="flex flex-row justify-center lg:justify-end ">
        <div className="flex flex-row gap-10 md:gap-5 lg:gap-[69px] font-[500] text-white">
          <div className="flex flex-col gap-3 ">
            <Link href="/">Link One</Link>
            <Link href="/">Link Two</Link>
            <Link href="/">Link Three</Link>
            <Link href="/">Link Four</Link>
            <Link href="/">Link Five</Link>
          </div>
          <div className="flex flex-col gap-[12px]">
            <Link href="/">Link One</Link>
            <Link href="/">Link Two</Link>
            <Link href="/">Link Three</Link>
            <Link href="/">Link Four</Link>
            <Link href="/">Link Five</Link>
          </div>
          <div className="flex flex-col gap-[12px]">
            <Link href="/">Link Six</Link>
            <Link href="/">Link Seven</Link>
            <Link href="/">Link Eight</Link>
            <Link href="/">Link Nine</Link>
            <Link href="/">Link Ten</Link>
          </div>
        </div>
      </div>
    </>
  );
}
// This is suposed to be dynamic
