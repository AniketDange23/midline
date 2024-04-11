// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import ServiceSection from './ServiceSection'
import ServiceDetailSection from './ServiceDetailSection'
import PageHeader from '../../PageHeader'
import { useGlobalContext } from '../../context'

const HealthInsurance = () => {

    const {HealthInsurancePPC} = useGlobalContext();

    useEffect(()=> HealthInsurancePPC(), []);

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

export default HealthInsurance
