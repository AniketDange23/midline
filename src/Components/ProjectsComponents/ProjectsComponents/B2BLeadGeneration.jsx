import React, { useEffect } from 'react'
import ServiceSection from './ServiceSection'
import ServiceDetailSection from './ServiceDetailSection'
import PageHeader from './../../PageHeader';
import { useGlobalContext } from '../../context';

const B2BLeadGeneration = () => {

    const {B2BLeadGeneration} = useGlobalContext();

    useEffect(()=> B2BLeadGeneration(), []);

    return (
        <>
        <PageHeader/>
        <section className="section">
          <div className="container">
            <div className="row">
              <ServiceSection/>
              <ServiceDetailSection/>
            </div>
          </div>
        </section>
        </>
      )
}

export default B2BLeadGeneration
