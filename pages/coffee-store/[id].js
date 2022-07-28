import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      {id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/welcome">
        <a>Go to welcome page</a>
      </Link>
      <Link href="/">
        <a>Go to welcome page</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
