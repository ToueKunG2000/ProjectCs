import type { AppProps } from 'next/app'
import "../styles/globals.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "/node_modules/primeflex/primeflex.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
