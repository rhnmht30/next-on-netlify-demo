import Head from "next/head";
import MyImage from "../components/MyImage";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs with Netlify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js w/ <a href="https://netlify.com">Netlify</a>
        </h1>

        <p className={styles.description}>
          Make use of latest features of Next.js v10+ while deploying to
          Netlify. Down below is the implementation of optimised images using
          next/image which was introduced with Next.js v10+
        </p>

        <div className={styles.grid}>
          {[1, 2].map((n, i) => (
            <Image key={i} src={`/coffee-${n}.jpg`} width={640} height={426} />
          ))}
          {[3, 4].map((n, i) => (
            <MyImage
              key={i}
              src={`/coffee-${n}.jpg`}
              width={640}
              height={426}
            />
          ))}
        </div>
        <p className={styles.description}>
          First 2 images are optimised through netlify functions and last 2
          images are optimised using cloudinary as the loader. See the
          difference in performance by disabling cache and throttling network.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://rhnmht30.dev/blog/next-image-with-netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the blog
        </a>
      </footer>
    </div>
  );
}
