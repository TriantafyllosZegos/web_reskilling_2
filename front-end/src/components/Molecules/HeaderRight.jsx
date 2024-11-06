import HeartButton from "../Atoms/buttons/HeartButton";
import CartButton from "../Atoms/buttons/CartButton";
import ProfileButton from "../Atoms/buttons/ProfileButton";
import PageTypeTitle from "../Atoms/PageTypeTitle";

export default function HeaderLeft() {
  return (
    <>
      <div className="flex flex-row justify-center lg:justify-end md:justify-end items-center gap-6 py-5">
        <HeartButton isInteractive={false} />
        <CartButton />
        <ProfileButton />
      </div>
    </>
  );
}
