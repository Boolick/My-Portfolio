import React, { useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation, Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, PortfolioPage } from "../../pages";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/contacts",
    element: <ContactPage />,
  },
];

export const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRefs = useRef(routes.map(() => React.createRef<HTMLDivElement>()));

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={500}
        classNames="page"
        unmountOnExit
        nodeRef={nodeRefs.current.find(
          (_, i) => location.pathname === routes[i].path
        )}
      >
        <>
          <Routes location={location}>
            {routes.map(({ path, element }, index) => (
              <Route
                key={path}
                path={path}
                element={<div ref={nodeRefs.current[index]}>{element}</div>}
              />
            ))}
          </Routes>
        </>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default AnimatedRoutes;
