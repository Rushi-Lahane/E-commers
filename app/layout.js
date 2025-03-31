import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Provider from "./redux/Providers";
import Providers from "./redux/Providers";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Rushi_E-commers",
  icons: "/images/secondLogo.png", // Path to your favicon
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        
        <Providers>
          <ToastContainer/>
        <Header/>
          {children} {/* ✅ Redux Provider added here */}
        
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
