import "../styles/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import { NextPageComponent } from "../utils/types";
import BenLittletonAppLayout from "../layouts/apps/ben-littleton-app-layout";

type ExtendedAppProps = AppProps & { Component: NextPageComponent };

function MyApp(props: ExtendedAppProps) {
  return props.Component.getLayout ? (
    props.Component.getLayout(props)
  ) : (
    <props.Component {...props.pageProps} />
  );
}
export default MyApp;
