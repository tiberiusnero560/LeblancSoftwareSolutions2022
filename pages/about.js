import React from 'react'
import styles from '../styles/about.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <div className={styles.pageWrapper}>
        <div className={styles.sectionWrapper}>
			   <div className={styles.titleContainer}>
					<h1>We build <span>beautiful</span>, <span>performant</span> websites that <span>scale</span>.<br></br> Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website. </h1>   
				</div>

            

			    <div className={styles.titleContainer}>
					<h1>As a young company, we have decided to specialize in Web and App design & development services first before expanding to offer additional services such as SAAS products etc</h1>   
				</div> 

                 <div className={styles.titleContainer}>
					<h1>As a young company, we have decided to specialize in Web and App design & development services first before expanding to offer additional services such as SAAS products etc</h1>   
				</div> 

                 <div className={styles.titleContainer}>
					<h1>As a young company, we have decided to specialize in Web and App design & development services first before expanding to offer additional services such as SAAS products etc</h1>   
				</div> 
			</div>


    </div>
  )
}

export default about