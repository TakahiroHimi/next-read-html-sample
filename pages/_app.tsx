import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import paths from "../paths";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {paths.map((path) => (
        <>
          <Link href={path}>
            <a>{path}</a>
          </Link>
          <br />
        </>
      ))}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
