import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../../components/Header";

export default function BenLittletonAppLayout({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>Ben Littleton</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Slabo+27px&display=block"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=block"
          rel="stylesheet"
        />
      </Head>
      <Header
        links={[
          {
            text: "About",
            href: "/#about",
          },
          {
            text: "Experience",
            href: "/#projects",
          },
          {
            text: "Skills",
            href: "/#skills",
          },
          {
            text: "Contact",
            href: "/#contact",
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-8">
        <Component {...pageProps} />
      </main>

      <footer className="flex items-center justify-center text-sm my-4">
        Copyright &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}
