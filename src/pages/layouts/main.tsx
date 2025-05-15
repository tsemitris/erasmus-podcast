import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
