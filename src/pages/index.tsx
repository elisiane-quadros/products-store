// Styles
import { GlobalStyle } from "@/styles/global";

// Local components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <main>
        <Products />
        <Footer />
      </main>
    </div>
  );
}
