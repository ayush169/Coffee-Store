import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Dynamic = () => {
  const router = useRouter();
  const { dynamic } = router.query;
  return (
    <div>
      <Head>
        <title>{dynamic}</title>
      </Head>
      {dynamic}
    </div>
  );
};

export default Dynamic;
