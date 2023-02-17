import React from "react";

import Layout from "../../components/Layout";
import Intro from "./Intro";
import ClientsList from "./ClientsList";
import Numbers from "./Numbers";

function Clients() {
  return (
    <Layout>
      <Intro />
      <ClientsList />
      <Numbers />
    </Layout>
  );
}

export default Clients;
