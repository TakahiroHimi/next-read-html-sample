import Head from "next/head";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

type Props = {
  content: string;
};
const ROUTE_URL = "https://www.htb.co.jp/";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const path = context.query.path;

  const accessURL = path
    ? typeof path !== "string"
      ? ROUTE_URL + path.join("/")
      : ROUTE_URL + path
    : ROUTE_URL;

  const resp = await fetch(accessURL);
  const text = await resp.text();
  return {
    props: {
      // 以下の条件でリンクを置換
      // １．「/」で始まっているリンクはROUTE_URLに置換
      // ２．「/」以外で始まっているリンクはACCESS_URLに置換
      // ３．「//」で始まっているリンクは置換しない
      content: text
        .replace(/(href|src)="\/([^\/])/g, `$1="${ROUTE_URL}$2`)
        .replace(/(href|src)="(?!\/)(?!http)/g, `$1="${accessURL}/`)
        .replace(/url\(\//g, `url(${ROUTE_URL}/`)
        .replace(/url\((?!\/)(?!http)/g, `url(${accessURL}/`),
    },
  };
};

const IndexPage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TEST */}
      <span dangerouslySetInnerHTML={{ __html: content }}></span>
      {/* {content} */}
    </div>
  );
};

export default IndexPage;
