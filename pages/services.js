import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'

// services images
import webdev from '../public/services/web-dev.jpg'
import ux from '../public/services/ui-dev-large.jpg'
import appdevlarge from '../public/services/app-dev-large.jpg'
import appdevsmall from '../public/services/app-dev-small.jpg'
import consulting from '../public/services/consulting.jpg'

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
                                src={webdev} alt="about us" width={1024} height={800}
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                         <div className={styles.service}>
                            <h2>App Development & Design</h2>
                            <Image 
                                src={appdevlarge} alt="about us" width={1024} height={800}
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                         <div className={styles.service}>
                            <h2>UI | UX Design</h2>
                            <Image 
                                src={ux} alt="about us" width={1024} height={800}
                                width={1024}
                                height={800}
                            />
                            <p>We build beautiful, performant websites that scale. Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website.</p>
                        </div>

                          <div className={styles.service}>
                            <h2>IT Consulting</h2>
                            <Image 
                                src={consulting} alt="about us" width={1024} height={800}
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