import styles from "./Hero.module.css"
import { useNavigate } from "react-router-dom"
export default function Hero() {
    const navigate=useNavigate();
  return (
    <section className={styles.hero}>

      <p className={styles.subtitle}>
        Design • Development • Branding
      </p>

      <h1 className={styles.title}>
        Creative Design Agency
      </h1>

      <p className={styles.tagline}>
        We create beautiful digital experiences that help brands grow
        and connect with their audience in meaningful ways.
      </p>

      <div className={styles.buttons}>
        <button className={styles.primaryBtn}
        onClick={()=>navigate('/portfolio')}>
          View Work
        </button>

        <button className={styles.secondaryBtn}
        onClick={()=>navigate('/contact')}>
          Contact Us
        </button>
      </div>

      <p className={styles.features}>
        UI/UX Design • Web Development • Digital Marketing
      </p>

    </section>
  )
}