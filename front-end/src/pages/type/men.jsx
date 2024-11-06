import ShopAll from "@/components/Atoms/ShopAll";
import ProductContainerByCategory from "@/components/Molecules/ProductContainerByCategory";

export default function Men() {
  return (
    <>
      <div className="flex flex-col pl-20 pr-[71px]">
        <ShopAll text="MEN" />
        <ProductContainerByCategory category="men" />
      </div>
    </>
  );
}
