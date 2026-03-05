import styles from "./Services.module.css"
import { FaPalette, FaCode, FaBullhorn, FaChartLine } from "react-icons/fa"

const services = [
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "User friendly and modern design"
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "High performance websites"
  },
  {
    icon: <FaBullhorn />,
    title: "Branding",
    description: "Powerful brand identity"
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    description: "Grow your business online"
  }
]

export default function Services() {
  return (
    <section className={styles.services}>

      <h2 className={styles.title}>Our Services</h2>

      <div className={styles.grid}>

        {services.map((service, index) => (
          <div key={index} className={styles.card}>

            <div className={styles.icon}>
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>
        ))}

      </div>

    </section>
  )
}