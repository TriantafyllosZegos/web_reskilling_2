import Image from "next/image";
import GenericButtonContainer from "../Molecules/GenericButtonContainer";
import ProductContainer from "../Molecules/ProductContainer";

export default function IndexFirst() {
  return (
    <>
      <div className="pb-[166px]">
        <div className="pb-[85px]">
          <GenericButtonContainer />
        </div>
        <div>
          <ProductContainer />
        </div>
      </div>
    </>
  );
}
