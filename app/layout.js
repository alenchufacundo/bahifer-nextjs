import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bahifer",
  description: "Bahifer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <header>
          <NavBar />
        </header>
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
