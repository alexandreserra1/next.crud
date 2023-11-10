import '../styles/globals.css';
import { AppProps } from 'next/app'; // Importe os tipos apropriados

function MyApp({ Component, pageProps }: AppProps) { // Defina os tipos para os parâmetros
  return <Component {...pageProps} />;
}

export default MyApp;
