import FooterBottomSide from "../Molecules/FooterBottomSide";
import FooterLeftSide from "../Molecules/FooterLeftSide";
import FooterRightSide from "../Molecules/FooterRightSide";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-[#333333] px-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-10 md:grid-cols-10 pt-[58px] pb-[43px]">
          <div className="col-span-6">
            <FooterLeftSide />
          </div>
          <div className="col-span-4">
            <FooterRightSide />
          </div>
        </div>
        <div className="grid grid-cols-1 pb-[35px]">
          <hr />
          <FooterBottomSide />
        </div>
      </div>
    </>
  );
}
