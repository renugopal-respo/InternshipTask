import styles from "./Portfolio.module.css"
import { FaRocket, FaMobileAlt, FaShoppingCart, FaChartPie, FaUserTie } from "react-icons/fa"

const projects = [
  {
    icon: <FaRocket />,
    title: "Startup Website",
    desc: `
A modern website created for startup companies.
It focuses on presenting products and services clearly.
The layout is responsive across mobile and desktop devices.
Clean UI design improves navigation and readability.
Animations make the interface feel engaging.
`
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App UI",
    desc: `
A mobile application interface designed for smooth usability.
Navigation follows common mobile design patterns.
The layout adapts to different screen sizes.
Typography and spacing improve readability.
The UI focuses on simplicity and user experience.
`
  },
  {
    icon: <FaShoppingCart />,
    title: "Ecommerce Store",
    desc: `
An ecommerce platform for browsing and purchasing products.
Products are displayed in a clean grid layout.
Users can easily view product details and prices.
The design focuses on simple online shopping flow.
Responsive layout ensures usability on mobile devices.
`
  },
  {
    icon: <FaChartPie />,
    title: "SaaS Dashboard",
    desc: `
A dashboard built to visualize business data and analytics.
Charts help present statistics in a clear format.
The layout organizes information into sections.
Users can quickly understand performance metrics.
The interface focuses on clarity and simplicity.
`
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Website",
    desc: `
A personal portfolio website to showcase projects and skills.
It includes sections like about, services, and portfolio.
The layout is clean and professional.
Animations highlight important content sections.
Responsive design ensures compatibility across devices.
`
  }
]

export default function Portfolio(){
  return(
    <section className={styles.portfolio}>

      <h2 className={styles.title}>Our Work</h2>

      <div className={styles.grid}>

        {projects.map((project,index)=>(
          <div key={index} className={styles.project}>

            <div className={styles.icon}>
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p className={styles.desc}>
              {project.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}