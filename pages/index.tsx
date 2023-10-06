import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ContactsList from "@/components/ContactsList";

const inter = Inter({ subsets: ["latin"] });

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
