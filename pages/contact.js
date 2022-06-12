import React from 'react'
import styles from '../styles/contact.module.css'

const contact = () => {
    const submitForm = (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader("Accept", "application/json")
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                form.reset()
                alert('Message sent!')
            } else {
                alert('Error sending message')
            }
        }
        xhr.send(data)
    }
    

  return (
    <div className={styles.pageWrapper}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Contact</h1>

        </div>

        <div className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <form onSubmit={submitForm} className={styles.form}>
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
                                contentEditable="true"
                            >

                            </textarea>

                        </div>
                    </div>


                </form>
            </div>   
        </div>
    </div>
  )
}

export default contact