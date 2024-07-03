import Layout from "../../shared/components/Layout";
import { Home } from "../../shared";

export const HomePage = () => {
  return (
    <Layout>
      <Home className={"flex flex-row justify-between items-center gap-20"} />
    </Layout>
  );
};
