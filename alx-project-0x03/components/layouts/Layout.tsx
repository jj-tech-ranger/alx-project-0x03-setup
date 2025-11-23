import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../../interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
