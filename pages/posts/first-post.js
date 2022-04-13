import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>this my first post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("script loaded correctly, window.FB has been populated");
        }}
      />
      <h1>this my first post</h1>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
    </Layout>
  );
}
