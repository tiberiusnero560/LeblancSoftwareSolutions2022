import React from "react";
import styles from '../styles/contact.module.css'
import { useState } from "react";
import Head from "next/head";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        name,
        email,
        subject,
        company,
        message,
      };
      fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
      })
      console.log(data);
    };
  
    return (
      <div>
        <Head>
          <title>Contact</title>
          <meta name="contact page" content="Contact page for Leblanc Software Solutions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={e => setName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />

            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              type="subject"
              onChange={e => setSubject(e.target.value)}
            />

            <label htmlFor="company">Company:</label>
            <input
              id="company"
              type="compant"
              onChange={e => setCompany(e.target.value)}
            />


            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              type="text"
              rows="4"
              onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }

export default Contact;