import { Header } from "./Header";
import { Footer } from "./Footer";
import SkipButton from "./SkipButton";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <div className="text-gray-200 bg-gray-900 min-h-screen p-8 flex flex-col justify-center">
      <Header />
      <main className="content flex-grow flex items-center justify-center m-8 relative">
        {children}
        <SkipButton />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
