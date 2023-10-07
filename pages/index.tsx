import Head from "next/head";
import Header from "@/components/Header";
import ContactsList from "@/components/ContactsList";
import { useState } from "react";

type Props = {
  isVisible: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home">
      <Head>
        <title>Contacts</title>
      </Head>

      <Header isVisible={showModal} setShowModal={setShowModal}/>
      <ContactsList />
    </div>
  );
};

export default Home;
