import Layout from "../../shared/components/Layout";
import { Home } from "../../shared";

export const HomePage = () => {
  return (
    <Layout>
      <Home className={"flex flex-row justify-between h-1/2 p-20"} />
    </Layout>
  );
};
