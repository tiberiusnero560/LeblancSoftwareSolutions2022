import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/contact.module.css";

export default function ContactUs() {
	const [fullname, setFullname] = useState("");
  	const [email, setEmail] = useState("");
  	const [subject, setSubject] = useState("");
  	const [message, setMessage] = useState("");
	const [company, setCompany] = useState("");
	//   Form validation
	const [errors, setErrors] = useState({});

	//   Setting button text
	const [buttonText, setButtonText] = useState("Send");

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (fullname.length <= 0) {
		tempErrors["fullname"] = true;
		isValid = false;
		}
		if (email.length <= 0) {
		tempErrors["email"] = true;
		isValid = false;
		}
		if (subject.length <= 0) {
		tempErrors["subject"] = true;
		isValid = false;
		}
		if (message.length <= 0) {
		tempErrors["message"] = true;
		isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	//   const [form, setForm] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
		setButtonText("Sending");
		const res = await fetch("/api/sendgrid", {
			body: JSON.stringify({
			email: email,
			fullname: fullname,
			subject: subject,
			company: company,
			message: message,
			}),
			headers: {
			"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			setShowSuccessMessage(false);
			setShowFailureMessage(true);
			setButtonText("Failed");

			// Reset form fields
			setFullname("");
			setEmail("");
			setMessage("");
			setSubject("");
			return;
		}
		setShowSuccessMessage(true);
		setShowFailureMessage(false);
		setButtonText("Sent Successfully");
		// Reset form fields
		setFullname("");
		setEmail("");
		setMessage("");
		setSubject("");
		}
		console.log(fullname, email, subject, message);
	};

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
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input 
				id="name" 
				type="text" 
				name="name" 
				value={fullname}
				onChange={(e) => setFullname(e.target.value)}
			  />
            </p>

            <p>
              <label htmlFor="email">Email</label>
              <input
				id="email"
				type="text"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			  />
            </p>

			<p>
              <label htmlFor="email">Subject</label>
              <input
				id="subject"
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => setSubject(e.target.value)}
			  />
            </p>

            <p>
              <label htmlFor="email">Company</label>
			  <input
				id="company"
				type="text"
				name="company"
				optional="true"
				value={company}
				onChange={(e) => setCompany(e.target.value)}
			  />
            </p>
			
            <p>
              <label htmlFor="message">Message</label>
			  <textarea
					id="message"
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
			  	/>
            </p>

            <div className={styles.buttonContainer}>
              <button>
				{buttonText}
			  </button>
			</div>

			<div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thank you! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
         

          </form>
        </div>
      </main>
    </div>
  )
}