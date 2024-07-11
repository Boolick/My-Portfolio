import { AboutMe } from "../../shared";
import Layout from "../../shared/components/Layout";

export const AboutPage = () => {
  return (
    <Layout>
      <AboutMe className={"flex flex-col justify-between h-1/2"} />
    </Layout>
  );
};
