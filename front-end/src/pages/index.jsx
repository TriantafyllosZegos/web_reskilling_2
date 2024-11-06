import ShopAll from "@/components/Atoms/ShopAll";
import IndexFirst from "@/components/Organisms/IndexFirst";
import IndexSecond from "@/components/Organisms/IndexSecond";
import IndexThird from "@/components/Organisms/IndexThird";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ShopAll text="SHOP ALL" />
      <div className="flex flex-col pl-20 pr-[71px]">
        <IndexFirst />
        <hr />
        <IndexSecond />
        <IndexThird />
      </div>
    </>
  );
}
