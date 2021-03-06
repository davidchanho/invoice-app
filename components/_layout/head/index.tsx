import Head from "next/head";
import React from "react";

function NextHead() {
  return (
    <Head>
      <title>Invoices App</title>
      <link rel="icon" href="/assets/favicon-32x32.png" />
      <meta
        name="description"
        content="Invoice app - Next.js Typescript Redux-Toolkit MongoDB - Frontend Mentor Challenge"
      />
      <script>
        {process.env.NODE_ENV == "production"
          ? "window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}"
          : ""}
      </script>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Spartan:400,700"
      ></link>
    </Head>
  );
}

export default NextHead;
