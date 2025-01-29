import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Determine if the Navbar and Footer should be displayed
  const showNavbarAndFooter = router.pathname !== '/demo'; // Replace '/your-specific-url' with the URL where you don't want to show the Navbar and Footer

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Component {...pageProps} />
      {showNavbarAndFooter && <Footer />}
    </>
  );
}
