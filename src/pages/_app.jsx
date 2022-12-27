import 'src/styles/globals.css'
import Head from 'next/head';
import { useBgColor } from 'src/hooks/useBgColor'
import { useInputArray } from 'src/hooks/useInputArray'
import { useCounter } from 'src/hooks/useCounter'

const MyApp =({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  
  );
}

export default MyApp
