import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsDate } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsDate();

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataParsed = await res.json();

  return {
    props: {
      allPostsData,
      dataParsed,
    },
  };
}

export default function Home({ allPostsData, dataParsed }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hello, i am a good boy</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <Link href="/posts/first-post">
          <a>post pertamaku</a>
        </Link>
      </section>
      {/* use props data */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg}`}>Blog</h2>
        <ul className={`${utilStyles.list}`}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={utilStyles.box}
              key={id}
              style={{
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.headingXl}>{title}</a>
              </Link>

              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>

      {/* fetch data from external api */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Data Blog Post From API</h2>
        <ul className={utilStyles.list}>
          {dataParsed.map((item) => {
            console.log(item.title);
            return (
              <li className={utilStyles.box} key={item.id}>
                <h4>{item.title}</h4>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
