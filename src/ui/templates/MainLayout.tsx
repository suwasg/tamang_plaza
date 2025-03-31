import { ReactNode } from "react";
import Navbar from "../organisms/navbar/Navbar";
import Footer from "../organisms/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

/**
 * MainLayout Component
 * ------------------------
 * This layout wraps all pages with a **Navbar** at the top and a **Footer** at the bottom.
 * It ensures that every page in the app follows a consistent structure.
 */
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      {/* Navigation Bar at the top */}
      <Navbar />

      {/* Main Content (Injected from child components) */}
      <main>{children}</main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
