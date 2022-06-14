import React from 'react'
import styles from '../styles/contact.module.css'

const contact = () => {
    const sendMail = async (data) => {

        try {
          await fetch("/api/contact", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
          })
    
        } catch (error) {
            console.log(error);
        }
    
      }
    

  return (
    <div className={styles.pageWrapper}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Contact</h1>

        </div>

        <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <form onSubmit={sendMail} className={styles.form}>
                    <div className={styles.formItem}>
                        <div className={styles.formItemContent}>
                            <label className={styles.label}>Name</label>
                            <input className={styles.input} 
                                type="text" 
                                placeholder="Enter your name" 
                                name="name"
                                required
                            />
                        </div>
                    </div>
                    
                     <div className={styles.formItem}>
                        <div className={styles.formItemContent}>
                            <label className={styles.label}>Subject</label>
                            <input className={styles.input} 
                                type="text" 
                                placeholder="Enter your subject"
                                name="subject"
                                required
                            />
                        </div>
                    </div>
                    
                     <div className={styles.formItem}>
                        <div className={styles.formItemContent}>
                            <label className={styles.label}>Company</label>
                            <input className={styles.input} 
                                type="text"
                                placeholder="Enter name of your company"
                                name="company"
                                optional
                            />
                        </div>
                    </div>

                     <div className={styles.formItem}>
                        <div className={styles.formItemTextArea}>
                            <label className={styles.label}>Content</label>
                            <textarea className={styles.textarea}
                                placeholder="Enter your message"
                                name="content"
                                required
                            >

                            </textarea>

                        </div>
                    </div>

                    <div>
                        <button className={styles.submit} type="submit">Submit</button>
                    </div>


                </form>
            </div>   
        </div>
    </div>
  )
}

export default contact