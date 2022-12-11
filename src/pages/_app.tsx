import './globals.scss';

import type { AppProps } from 'next/app'
import React from 'react';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

dayjs.extend(advancedFormat)

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
