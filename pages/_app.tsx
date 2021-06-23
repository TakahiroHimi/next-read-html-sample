import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import {
  announcers,
  event,
  goods,
  hokkaido,
  movie,
  news,
  onchan,
  paths,
  program,
  sports,
} from "../paths";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <p>番組情報</p>
          <ul>
            {program.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>ニュース・天気</p>
          <ul>
            {news.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>スポーツ</p>
          <ul>
            {sports.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>アナウンサー</p>
          <ul>
            {announcers.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>onちゃん</p>
          <ul>
            {onchan.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>グッズ</p>
          <ul>
            {goods.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>イベント</p>
          <ul>
            {event.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>動画・SNS</p>
          <ul>
            {movie.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <p>北海道</p>
          <ul>
            {hokkaido.map((path) => (
              <Link key={path} href={path}>
                <a>
                  <li>{path}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
