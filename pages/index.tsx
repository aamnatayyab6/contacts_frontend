import Head from "next/head";
import Header from "@/components/Header";
import ContactsList from "@/components/ContactsList";

const Home = () => {
  return (
    <div className="home">
      <Head>
        <title>Contact</title>
      </Head>

      <Header />
      <ContactsList />
     
    </div>
  );
};

export default Home;
