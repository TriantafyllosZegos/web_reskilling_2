import { useRouter } from "next/router";

export default function Singlepost() {
  const router = useRouter();
  return (
    <>
      <p>Singlepost: {router.query.id}</p>
    </>
  );
}
