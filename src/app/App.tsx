import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "../features/index";
import { Layout } from "../shared";
import "../i118n";
import { TranslationProvider } from "./providers/TranslationContext.Provider";

function App() {
  return (
    <BrowserRouter>
      <TranslationProvider>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </TranslationProvider>
    </BrowserRouter>
  );
}

export default App;
