import "../styles/globals.css";
import "../styles/variables.css";
import { store }        from "../store/store";
import { Provider }     from "react-redux";
import { AppProps }              from "next/app";
import { AuthProvider } from "@components/auth/AuthContext";
import * as React       from "react";
import { ProtectRoute } from "@components/auth/ProtectRoute";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <AuthProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </AuthProvider>
    </Provider>
  );
}


export default MyApp;
