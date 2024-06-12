import {services} from "../constants/index"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard key={service.lebel} {...service}/>
      ) )}
    </section>
  )
}

export default Services