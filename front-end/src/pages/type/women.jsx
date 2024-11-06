import ShopAll from "@/components/Atoms/ShopAll";
import ProductContainerByCategory from "@/components/Molecules/ProductContainerByCategory";

export default function Women() {
  return (
    <>
      <div className="flex flex-col pl-20 pr-[71px]">
        <ShopAll text="WOMEN" />
        <ProductContainerByCategory category="women" />
      </div>
    </>
  );
}
