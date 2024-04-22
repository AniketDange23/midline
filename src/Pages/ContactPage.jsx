import React, { useEffect } from "react";

import PageHeader from "../Components/PageHeader";
import { useGlobalContext } from "../Components/context";
import ContactInfo from './../Components/ContactComponents/ContactComponents/ContactInfo';
import ContactSection from './../Components/ContactComponents/ContactComponents/ContactSection';

const ContactPage = () => {
  const { updateContactPage } = useGlobalContext();

  useEffect(() => {
    updateContactPage();
  }, []); 

  return (
    <>
      <PageHeader />
      <ContactInfo />
      <ContactSection />
    </>
  );
};

export default ContactPage;
