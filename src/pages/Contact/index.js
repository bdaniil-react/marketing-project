import React from "react";

import Layout from "../../components/Layout";
import Address from "./Address";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-2 sm:grid-cols-1 px-32 gap-20 sm:p-5 mt-32 sm:mt-0">
        <Address />
        <ContactForm />
      </div>
    </Layout>
  );
}

export default Contact;
