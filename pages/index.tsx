import Head from "next/head";
import { ReactElement } from "react";

type Props = {
  content: string;
};
const ACCESS_URL = "https://www.htb.co.jp/";
const ROUTE_URL = "https://www.htb.co.jp/";

export async function getServerSideProps(): Promise<any> {
  const resp = await fetch(ACCESS_URL);
  const text = await resp.text();
  console.log(text);
  return {
    props: {
      // 以下の条件でリンクを置換
      // １．「/」で始まっているリンクはROUTE_URLに置換
      // ２．「/」以外で始まっているリンクはACCESS_URLに置換
      // ３．「//」で始まっているリンクは置換しない
      content: text
        .replace(/(href|src)="\/([^\/])/g, `$1="${ROUTE_URL}$2`)
        .replace(/(href|src)="(?!\/)(?!http)/g, `$1="${ACCESS_URL}/`)
        .replace(/url\(\//g, `url(${ROUTE_URL}/`)
        .replace(/url\((?!\/)(?!http)/g, `url(${ACCESS_URL}/`),
    },
  };
}

const IndexPage: React.FC<Props> = ({ content }: Props): ReactElement => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span dangerouslySetInnerHTML={{ __html: content }}></span>
    </div>
  );
};

export default IndexPage;
