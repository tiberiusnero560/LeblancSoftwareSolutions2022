import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";

export default function ContactUs() {

 async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact me for cool stuff!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Us
        </h1>

        <p className={styles.description}>
          We offer a free consultation
        </p>

        <div className={styles.grid}>
          <style jsx>{`
            form {
              font-size: 1.2em;
			  margin: 0 auto;
			  padding: 0 10%;
			  width: 100%;
			  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

			@media (max-width: 415px) {
				form {
					padding: 0 10%;
					width: 80%;
				}

			})
            label {
              display: block;
              margin-bottom: .2em;
            }
            input,
            textarea {
              width: 100%;
              padding: .8em;
            }
            button {
              color: white;
              font-size: 1em;
              background-color: blueviolet;
              padding: .8em 1em;
              border: none;
              border-radius: .2em;
            }
          `}</style>
          <form onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </p>

            <p>
              <label htmlFor="email">Email</label>
              <input id="email" type="text" name="email" />
            </p>

            <p>
              <label htmlFor="email">Company</label>
              <input id="company" type="text" name="company" />
            </p>
			
            <p>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
            </p>

            <div className={styles.buttonContainer}>
              <button>Submit</button>
			</div>
         

          </form>
        </div>
      </main>
    </div>
  )
}