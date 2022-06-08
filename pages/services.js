import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'

const services = () => {
  return (
    <div className={styles.pageWrapper}>
            {/* Services Section  */}
			<div className={styles.servicesWrapper}>
				<div className={styles.servicesContainer}>
					<h1>Services</h1>
					<div className={styles.services}>
                        <div className={styles.service}>
                            <h2>Web Development & Design</h2>
                            <Image 
                                src="/pagespeed-insights-mobile-1.png"
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                         <div className={styles.service}>
                            <h2>App Development & Design</h2>
                            <Image 
                                src="/pagespeed-insights-mobile-1.png"
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                         <div className={styles.service}>
                            <h2>UI | UX Design</h2>
                            <Image 
                                src="/pagespeed-insights-mobile-1.png"
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                          <div className={styles.service}>
                            <h2>IT Consulting</h2>
                            <Image 
                                src="/pagespeed-insights-mobile-1.png"
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>
					</div>
				</div>
		
			</div>

    </div>
  )
}

export default services