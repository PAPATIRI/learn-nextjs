import Layout from "../../components/layout";
import { getAllPostId, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyle from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2 className={utilStyle.headingXl}>{postData.title}</h2>
      <p className={utilStyle.lightText}>
        <Date dateString={postData.date} />
      </p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostId();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
