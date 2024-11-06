import HeaderLeft from "../Molecules/HeaderLeft";
import HeaderRight from "../Molecules/HeaderRight";

export default function Header() {
  return (
    <>
      <div className="pt-7  pl-24 pr-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </div>
    </>
  );
}
