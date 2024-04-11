import { useEffect } from "react"
// import ContactPageHeader from "../Components/ContactComponents/ContactPageHeader"
import { useGlobalContext } from "../Components/context"
import ContactInfo from "../Components/ContactComponents/ContactComponents/ContactInfo";
import ContactSection from './../Components/ContactComponents/ContactComponents/ContactSection';
import PageHeader from "../Components/PageHeader";

const ContactPage = () => {

  const {updateContactPage} = useGlobalContext();

  useEffect(()=> updateContactPage(), []);

  return (
    <>
      {/* <ContactPageHeader/> */}
      <PageHeader/>
      <ContactInfo/>
      <ContactSection/>
    </>
  )
}

export default ContactPage