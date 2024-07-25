import { useSwipeable } from "react-swipeable";
import { useSwiperNavigation } from "../../features/useSwiperNavigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import SkipButton from "./SkipButton";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  const handleSwipe = useSwiperNavigation();
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("Right"),
    onSwipedRight: () => handleSwipe("Left"),
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div
      className="text-gray-200 bg-gray-900 min-h-screen p-8 flex flex-col justify-center sm:p-4 xsm:p-2"
      {...handlers}
    >
      <Header />
      <main className="content flex-grow flex items-center justify-center m-8 relative xsm:m-2 ">
        {children}
        <SkipButton onClick={() => handleSwipe("Right")} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
