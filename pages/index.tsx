import type { NextPage } from "next";
// Imports below are used server-side only
import promiseQuery from "lib/promise-query";
import { GetStaticProps } from "next";

interface HomePageProps {
  result: $TSFixMe;
}

const HomePage: NextPage<HomePageProps> = ({ result }) => {
  return (
    <div>
      Hello world! This is some data from a PlanetScale database.
      <pre>
        <code>{JSON.stringify({ result }, null, 2)}</code>
      </pre>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await promiseQuery("SELECT * FROM users;");
  return { props: { result } };
};

export default HomePage;
