import ShopAll from "@/components/Atoms/ShopAll";
import ProductContainerByCategory from "@/components/Molecules/ProductContainerByCategory";

export default function Classic() {
  return (
    <>
      <div className="flex flex-col pl-20 pr-[71px]">
        <ShopAll text="CLASSIC" />
        <ProductContainerByCategory category="classic" />
      </div>
    </>
  );
}
