import { experiences } from "../../helper/data"

const About = () => {
  return (
    <div>
      <h1>Selim Güney</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo culpa,
        nesciunt earum vero consectetur unde voluptatem velit minima expedita,
        dolor facere harum recusandae. Quos repellendus, ipsum veniam nam
        eveniet magni?
      </p>
      <div className="p-3">
        {experiences?.map((item) => {
          return (
            <section key={item.id} className="border border-black p-3">
              <h4>{item.date}</h4>
              <h4>{item.company}</h4>
              <h5>{item.job}</h5>
              <span>{item.description}</span>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default About
