import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();


const initialState = {

    title: "",
    subTitle: "",
    banner:"",
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateContactPage = () => {

        return dispatch({
            type: "CONTACT_PAGE",
            payload: {
                title: "CONTACT US",
                subTitle: "Contact Us",
                image:"./images/g3.jpeg"
            }
        })
    }

   const  updateAboutPage = () =>{
        return dispatch({
            type: "ABOUT_PAGE",
            payload: {
                title: "ABOUT ",
                subTitle: "About",
                image:"./images/g8.jpg"

            }
        })
    }

    const updateServicesPage = () => {

        return dispatch({
            type: "SERVICES_PAGE",
            payload: {
                title: "SERVICES ",
                subTitle: "Services",
                image:"./images/g7.jpg"

            }
        })
    }



    const updateProjectPage = () => {
        return dispatch({
            type: "PROJECT_PAGE",
            payload: {
                title: "Project",
                subTitle: "Project Details",
                para1: `Running successful health insurance campaigns involves establishing and monitoring key performance indicators (KPIs) while recognizing the audience's needs. Effective call-to-actions are created through testing for quality assurance. The project aims to generate high intent health insurance exclusive inbound calls primarily driven by search, display, and native ad placements. Sales techniques such as knowing the customer, asking the right questions, building rapport, and handling objections effectively contribute to the project's success.
                Click-to-call lead generation and inbound marketing strategies are central to this project. Dedicated call capture/tracking phone numbers are utilized to generate leads from various channels including Facebook Ads, webinars, SEO, and content marketing. Customized calling campaigns and sales scripts play a crucial role in effectively selling final expense insurance and setting appointments, contributing to the project's objectives.`,
                para2: `The Medicare supplement and advantage campaign focuses on creating custom calling campaigns for live transfer leads. Various inbound marketing tactics like email marketing, real-time inbound phone calls, remarketing, seminars, and in-person events are employed for lead generation. The project aims to generate high-quality leads through a combination of outbound and inbound marketing tactics, enabling agents to generate their own Medicare leads using various channels.
                Identifying ideal customers for B2B products or services and attracting them to buy is the primary objective of this project. Various inbound marketing strategies such as content marketing, LinkedIn, Google Ads, webinars, and email marketing are utilized to drive prospective customers to the organization organically. The project aims to improve customer acquisition and sales through targeted marketing efforts and effective lead capture processes, ultimately contributing to the organization's growth in the B2B market.`,
                image: "/projects/project-1.jpg"
            }
        })
    }



    const HealthInsurancePPC = () => {
        return dispatch({
            type: "HealthInsurancePage",
            payload: {
                title: "Health Insurance PPC",
                para1: `We run a successful health insurance campaign, it is important to establish and monitor key performance indicators (KPIs), test for quality assurance, and recognize the audience's needs when creating effective call-to-actions. healthcare call centres need to overcome challenges such as understanding insurance and seeking treatment. best practices for new patients include identifying and documenting goals, starting migration in small steps, providing proper onboarding, and using technology to improve patient experience.`,
                para2: `Inbound call generation for health insurance achieved through high intent health insurance exclusive inbound calls primarily driven by search, display, and native ad placements offering a new service or product during an inbound call can make the customer feel special and generate high-quality leads. sales techniques that increase success on health insurance inbound calls include knowing your customer, asking the right questions and keeping it simple, building rapport with the customer, and being prepared to handle objections. our Insurance agents are driving inbound calls by using tips such as creating a sense of urgency in their messaging and offering free quotes or consultations.`,
                benifitsPara: `
                Health insurance Preferred Provider Organization (PPO) plans offer a range of benefits that make them an attractive option for individuals and families seeking comprehensive healthcare coverage. One of the key advantages of PPO plans is the flexibility they provide in choosing healthcare providers. With a wide network of doctors, specialists, and hospitals, individuals have the freedom to select their preferred healthcare professionals without the need for referrals from a primary care physician. Moreover, PPO plans offer coverage for out-of-network services, albeit at higher costs, ensuring access to care even when providers are not within the network. In-network providers typically offer discounted rates, resulting in lower out-of-pocket expenses for services such as office visits and procedures. Unlike Health Maintenance Organization (HMO) plans, PPO plans do not require individuals to select a primary care physician or obtain referrals for specialist care, granting them greater autonomy in managing their healthcare needs`
               ,
               image: "/projects/project-1.jpg"

            }
        })
    }



    const FinalExpense = () => {
        return dispatch({
            type: "FinalExpensePage",
            payload: {
                title: "Final Expense",
                para1: `Click to call lead generation is a tactic used in inbound marketing strategies. It involves using a dedicated Facebook call capture/tracking phone number to generate leads from Facebook Ads Business Nucleus offers click-to-call as part of their marketing services, Other effective strategies for lead generation include webinars, SEO, and content marketing.`,
                para2: `The strategies for click to call lead generation include creating a new lead generation campaign in Ads Manager and selecting phone as the "lead method" under the ad set settings Using a dedicated Facebook call capture/tracking phone number is also important for generating leads from call now ad units Click-to-call is an effective tactic offered by Business Nucleus as part of their marketing services.`,
                benifitsPara: `
                Final expense insurance, also known as burial insurance or funeral insurance, provides coverage for the costs associated with a person's funeral, burial, or other final expenses. This type of insurance offers several benefits to individuals and their families. Firstly, final expense insurance alleviates the financial burden on loved ones during a difficult time by covering funeral expenses, which can include the cost of the casket, burial plot, funeral service, cremation, and other related costs. By having this coverage in place, individuals can ensure that their final wishes are carried out without imposing financial strain on their family members. Additionally, final expense insurance typically requires minimal underwriting, making it accessible to individuals who may have difficulty obtaining traditional life insurance due to age or health issues.`
              ,            
              image: "/projects/project-3.jpg"


            }
        })
    }




    const MedicareSupplementAdvantage = () => {
        return dispatch({
            type: "MedicareSupplementAdvantagePage",
            payload: {
                title: "Medicare Supplement/Advantage",
                para1: `We run a Medicare supplement and advantage campaign, custom calling campaigns can be created for live transfer leads, sales scripts can also use to effectively sell Medicare insurance and set appointments with potential customers live transfer sales leads for Medicare supplement is purchased from call centre providers top vendors for Medicare supplement and advantage leads include those that offer call centre telesales and custom marketing campaign.`,
                para2: `Inbound call generation for Medicare supplement and advantage achieved through a combination of outbound and inbound marketing tactics such as email marketing, real-time inbound phone calls, remarketing, seminars, and in-person events, agents can also generate their own Medicare leads by using outbound/inbound phone calls, direct mail campaigns, digital advertising, and social media outreach.`,
                benifitsPara: `
                Medicare Supplement (Medigap) and Medicare Advantage plans offer crucial benefits to individuals seeking additional coverage beyond Original Medicare. Medigap plans provide supplemental coverage to fill the gaps in Original Medicare, such as copayments, coinsurance, and deductibles. This offers financial protection and peace of mind by reducing out-of-pocket expenses for healthcare services. Additionally, Medigap plans often provide coverage for services received outside the United States, which can be beneficial for travelers. Furthermore, Medigap policies allow individuals to see any healthcare provider that accepts Medicare, providing flexibility and choice in healthcare options.`
           
            ,   
            image: "/projects/project-4.jpg"
        }
        })
    }




    const B2BLeadGeneration = () => {
        return dispatch({
            type: "B2BLeadGenerationPage",
            payload: {
                title: "B2B Lead Generation",
                para1: `B2B lead generation is the process of identifying ideal customers for a product or service and attracting them to buy. It is an essential activity for businesses that primarily sell to other businesses demand generation teams share relevant leads with sales, while sales can gain leads directly through their actions such as emailing.
                B2B marketers like us use various inbound marketing strategies to drive prospective customers to their organization organically. Expert-approved B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, and email marketing.`,
                para2: `B2B lead generation strategies include content marketing, LinkedIn, well-timed Google Ads, webinars, email marketing, referral programs, and effective lead capture processes, other B2B lead generation ideas include social media advertising, influencer marketing, account-based marketing (ABM), trade shows and events, and customer reviews to be consistently successful in B2B lead generation, it is important to approach the content strategy from the perspective of the customer and understand what typical B2B buyers are looking for.`,
                benifitsPara: `
                B2B lead generation strategies are vital for businesses looking to expand their customer base and increase sales in the business-to-business (B2B) market. One effective approach involves leveraging targeted marketing campaigns tailored to specific industries or market segments. By identifying and focusing on potential clients within these niches, businesses can better tailor their messaging and offerings to meet the unique needs and pain points of their target audience, thus increasing the likelihood of generating qualified leads.
                Additionally, utilizing content marketing tactics such as creating informative blog posts, whitepapers, case studies, and webinars can help position a company as an industry thought leader and attract potential leads organically. Providing valuable content that addresses common challenges or offers solutions to industry-specific problems can establish credibility and trust with potential clients, ultimately driving them to engage with the business and inquire about its products or services.`,
                image: "/projects/project-1.jpg"
            }

        })
    }






    return (
        <AppContext.Provider

            value={{
                ...state, updateAboutPage,updateContactPage, updateServicesPage, updateProjectPage, HealthInsurancePPC, FinalExpense,
                MedicareSupplementAdvantage, B2BLeadGeneration
            }}>

            {children}

        </AppContext.Provider>
    );



};


const useGlobalContext = () => {
    return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext };

