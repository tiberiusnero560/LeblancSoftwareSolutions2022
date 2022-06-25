import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'

const About = () => {
  return (
    <div className={styles.pageWrapper}>
	<Head>
		<title>Leblanc Software  | About</title>
		<meta name="about page" content="About page for Leblanc Software Solutions" />
		{/* <link rel="icon" href="/public/favicon.ico" /> */}
	</Head>
        <div className={styles.sectionWrapper}>
			<h1>About Us</h1>
			   <div className={styles.titleContainer}>
					<h1>We are new in town. <span>Founded</span> in <span>2022</span> by <span>Kyle LeBlanc</span>.
                    We specialize in <span>custom</span> Web and App development where performance and SEO matter.
					</h1>   
				</div>
				
			    <div className={styles.titleContainer}>
					<h1>As a young company, we have decided to specialize in Web and App design & development services first before expanding to offer additional services such as SAAS products etc so we can offer the best quality product.</h1>   
				</div> 

                 <div className={styles.titleContainer}>
					<h1>We also offer IT consulting services because often times, we have an idea but we do not know what it will take to bring that idea to life. We can sit down with you over a virtual meeting and offer consultation on what products and services you need for your business or idea.
					</h1>   
				</div> 

                 <div className={styles.titleContainer}>
					<h1> You may only need to use a Wix website and only have to pay a designer. You may choose after the meeting that you are willing to spend that time yourself to save money. 
					We can go over all the details with you and you may find you only needed the consultation and decide you do not need a custom website at this time.	
					</h1>   
				</div> 
			</div>


    </div>
  )
}

export default About