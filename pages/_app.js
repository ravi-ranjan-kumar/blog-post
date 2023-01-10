
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
import {StoreProvider} from "../context"

export default function App({ Component, pageProps }) {
  return (
  <SessionProvider session={pageProps.session}>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
     </SessionProvider>
  )
}

export default MyApp;
