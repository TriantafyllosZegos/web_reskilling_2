import Link from "next/link";

export default function SaleBox(props) {
  const isSalesActive = props.sale > 0; // salesIsActive is true if sale value is greater than 0

  return (
    <>
      {isSalesActive && (
        <div className="flex rounded-[4px] w-[54px] h-[26px] bg-[#DB4444]">
          <div className="flex px-2.5 pb-1 items-center justify-center">
            <h1 className="w-[30px] h-[18px] font-grotesk font-[400] text-white">
              -{props.sale}%
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
