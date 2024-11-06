import GenericButton from "../Atoms/buttons/GenericButton";

export default function GenericButtonContainer() {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row flex-col items-center gap-9">
        <GenericButton
          text="NEW ARRIVALS"
          bgColor="#4A4C6C"
          textColor="#7C7EA2"
          borderColor="#7C7EA2"
          width="w-[215px]"
          onClick={() => console.log("New Arrivals Clicked")}
        />
        <GenericButton
          text="WHAT'S TRENDING"
          bgColor="#77794E"
          textColor="#9FA26D"
          borderColor="#9FA16D"
          width="w-[250px]"
          onClick={() => console.log("What's Trending Clicked")}
        />
      </div>
    </>
  );
}
