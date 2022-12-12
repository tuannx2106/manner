import './globals.scss';

import type { AppProps } from 'next/app'
import React from 'react';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

dayjs.extend(advancedFormat)

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AnyComponent = Component as any
  return <AnyComponent {...pageProps} />;
}

export default App;
