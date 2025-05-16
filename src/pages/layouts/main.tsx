import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/functions/scrollToTop";

export const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
