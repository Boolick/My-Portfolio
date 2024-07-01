import { Header } from "./Header";
import { Footer } from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return (
    <div className="text-gray-200 bg-gray-900 min-h-screen p-8 flex flex-col">
      <Header />
      <div className="content flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
