import Layout from "components/ui/Layout";
import Billboard from "components/body/Billboard";
import About from "components/body/About";
import Experience from "components/body/Experience";
import Career from "components/body/Career";
import Projects from "components/body/Projects";
import Contact from "components/body/Contact";

const IndexPage = () => {
  return (
    <Layout title="Adriano Vasconcelos | Web Developer">
      <Billboard />
      <About />
      <Projects />
      <Career />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
