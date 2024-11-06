import "@/styles/globals.css";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import { AuthProvider } from "../context/AuthContext";


import Header from "../components/Organisms/Header";
import Footer from "../components/Organisms/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      <Footer />
    </>
  );
}
