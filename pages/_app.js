import "../styles/globals.css";
import { Outfit } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={outfit.className}>
      <Component {...pageProps} />
    </main>
  );
}
