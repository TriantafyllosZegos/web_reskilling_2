import Logo from "../Atoms/Logo";
import PageTypeTitle from "../Atoms/PageTypeTitle";

export default function HeaderLeft() {
  return (
    <>
      <div className="flex flex-row  gap-6 items-end py-5 ">
        <Logo />
        <div className="flex flex-row justify-center gap-[10px] ">
          <PageTypeTitle title="Women" />
          <PageTypeTitle title="Men" />
          <PageTypeTitle title="Kids" />
          <PageTypeTitle title="Classic" />
          <PageTypeTitle title="Sport" />
          <PageTypeTitle title="Sale" />
        </div>
      </div>
    </>
  );
}
