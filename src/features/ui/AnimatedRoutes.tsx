// src/components/AnimatedRoutes.tsx
import { createRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, PortfolioPage } from "../../pages";

const routes = [
  {
    path: "/",
    element: (
        <HomePage />
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/about",
    element: (
        <AboutPage />
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/contacts",
    element: <ContactPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
];

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={500}
        classNames="page"
        unmountOnExit
      >
        <div>
          <Routes location={location}>
            {routes.map(({ path, element, nodeRef }) => (
              <Route
                key={path}
                path={path}
                element={<div ref={nodeRef}>{element}</div>}
              />
            ))}
          </Routes>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimatedRoutes;
