import { AppProps } from "next/app";

export default function MacroBuilderLayout(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}
