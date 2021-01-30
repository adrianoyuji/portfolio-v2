import Layout from "components/ui/Layout";
import Billboard from "components/body/Billboard";
import About from "components/body/About";
import Experience from "components/body/Experience";

const IndexPage = () => (
  <Layout title="Adriano Vasconcelos | Web Developer">
    <Billboard />
    <About />
    <Experience />
  </Layout>
);

export default IndexPage;
