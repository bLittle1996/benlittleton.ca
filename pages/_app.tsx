import "../styles/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import { NextPageComponent } from "../utils/types";

type ExtendedAppProps = AppProps & { Component: NextPageComponent };

function MyApp(props: ExtendedAppProps) {
  return props.Component.getLayout(props);
}
export default MyApp;
