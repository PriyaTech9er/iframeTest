import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>trouble world</title>
        <meta name="description" content="widget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Welcome to trouble world
        <iframe
          is="x-frame-bypass"
          id="iframeId"
          src="https://novo-onboard.netlify.app/"
          name="truvoice-widget"
          height="640px"
          width="1024px"
        ></iframe>
      </main>
    </div>
  );
}
