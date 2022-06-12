import React from 'react'
import styles from '../styles/clients.module.css'
import Image from 'next/image'

const clients = () => {
  return (
    <div className={styles.pageWrapper}>
        <div className={styles.titleContainer}>
            
        </div>

        <div className={styles.clientContainer}>
            <div className={styles.client}>
                <div className={styles.clientImageContainer}>
                    <div className={styles.clientImage}>
                        <Image 
                            src="/clients/lss-hero-medium.jpg"
                            priority="high"
                            alt="LSS"
                            width={1920}
                            height={1080}
                            layout="intrinsic"
                            className={styles.image}

                        />
                    </div>
                </div>

                <div className={styles.clientContentContainer}>
                    <div className={styles.clientContent}>
                        <h3>Donovans Detailing</h3>
                        <p>
                            Donovans Detailing is a full service detailing company that specializes in custom detailing of vehicles. A local business in the Ottawa area.
                        </p>
                    </div>
                </div>
            </div>


               <div className={styles.client}>
                    <div className={styles.clientImageContainer}>
                        <div className={styles.clientImage}>
                            <Image 
                                src="/clients/lss-hero-medium.jpg"
                                priority="high"
                                alt="LSS"
                                width={1920}
                                height={1080}
                                layout="intrinsic"
                                className={styles.image}

                            />
                        </div>
                    </div>

                    <div className={styles.clientContentContainer}>
                        <div className={styles.clientContent}>
                            <h3>LSS</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur sagittis,
                            </p>
                        </div>
                    </div>
                </div>




               {/* <div className={styles.client}>
                    <div className={styles.clientImageContainer}>
                        <div className={styles.clientImage}>
                            <Image 
                                src="/clients/lss-hero-medium.jpg"
                                priority="high"
                                alt="LSS"
                                width={1920}
                                height={1080}
                                layout="intrinsic"
                                className={styles.image}

                            />
                        </div>
                    </div>

                    <div className={styles.clientContentContainer}>
                        <div className={styles.clientContent}>
                            <h3>LSS</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec euismod, nisl eget consectetur sagittis,
                            </p>
                        </div>
                    </div>
                </div> */}

        </div>
    </div>
  )
}

export default clients