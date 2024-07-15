import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../features/index";
import { Layout } from "../shared";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
  );
}

export default App;
