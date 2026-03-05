import { useState } from "react"
import styles from "./Contact.module.css"

export default function Contact(){

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const [success,setSuccess] = useState(false)

  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    setSuccess(true)

    setTimeout(()=>{
      setSuccess(false)
      setFormData({name:"",email:"",message:""})
    },300000)
  }

  return(
    <section className={styles.contact}>

      <h2 className={styles.title}>Contact Us</h2>

      {success && (
        <p className={styles.success}>
          Thank you <span style={{width:'5px'}}></span><strong>{`${formData.name}`}</strong>!  
          Our team will reach out you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>

        <div className={styles.field}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Messag →</button>

      </form>

    </section>
  )
}