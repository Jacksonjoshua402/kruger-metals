import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Header current={page} navigate={navigate} />
      <main>
        {page === "home" && <Home navigate={navigate} />}
        {page === "about" && <About navigate={navigate} />}
        {page === "services" && <Services navigate={navigate} />}
        {page === "portfolio" && <Portfolio navigate={navigate} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
