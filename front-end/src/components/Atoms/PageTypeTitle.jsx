import Link from "next/link";
import { useRouter } from "next/router";

export default function PageTypeTitle({ title }) {
  const router = useRouter();

  // Create the current link path
  const linkPath = `/type/${title.toLowerCase()}`;

  // Check if the current path matches the link path
  const isActive = router.pathname === linkPath;

  return (
    <div className="text-[#181818] font-[700]">
      <Link href={linkPath}>
        <h1 className={`hover:text-pink-900 ${isActive ? "underline" : ""}`}>
          {title}
        </h1>
      </Link>
    </div>
  );
}
