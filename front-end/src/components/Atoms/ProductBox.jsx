import Link from "next/link";
import Image from "next/image";
import GradingStars from "./GradingStars";
import HeartButton from "./buttons/HeartButton";
import SaleBox from "./buttons/SaleBox";
import AddToCart from "./buttons/AddToCart";

export default function ProductBox({ product }) {
  return (
    <div className="relative flex flex-col gap-4 w-[270px] h-[350px] rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300 group">
      <div className="relative flex flex-row justify-between pb-4 rounded-t-md h-[250px] bg-[#E9E9EB]">
        <Image
          src={product.small_image_url}
          alt={product.product_name}
          layout="fill"
          className="absolute inset-0 object-cover rounded-t-md opacity-50" // Adjust opacity as needed
        />
        <div className="flex flex-row p-3 z-10">
          {" "}
          <SaleBox sale={product.sale} />
        </div>
        <div className="flex flex-row p-3 z-10">
          {" "}
          <HeartButton isInteractive={true} />
        </div>
        <div className="absolute left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {" "}
          <AddToCart />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h1 className="font-grotesk font-[500] w-full h-[24px] text-base truncate">
          {product.product_name}
        </h1>
        <div className="font-grotesk font-[500] text-base">
          ${product.price}
        </div>
        <div>{/* <GradingStars rating={product.rating_avg} /> */}</div>
      </div>
    </div>
  );
}
