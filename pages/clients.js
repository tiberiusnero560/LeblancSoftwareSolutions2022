import React from 'react'
import styles from '../styles/clients.module.css'
import Image from 'next/image'
import Head from 'next/head'

const Clients = () => {
  return (
    <div className={styles.pageWrapper}>
        <Head>
            <title>Clients</title>
            <meta name="clients page" content="Clients page for Leblanc Software Solutions" />
            {/* <link rel="icon" href="/public/favicon.ico" /> */}
        </Head>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>Meet Our Clients </h1>
        </div>

        <div className={styles.titleContainer}>
            <div>
                <h2 className={styles.subtitle}>We have just recently launched. we expect our portfolio of Clients to continue to grow as we aim impress each and every client with our services.</h2>
            </div>
        </div>

        <div className={styles.clientContainer}>
            <div className={styles.client}>
                <div className={styles.clientImageContainer}>
                    <div className={styles.clientImage}>
                        <Image 
                            src="/clients/Nicks-marketing-bg.jpg"
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
                        <h1>Launching soon</h1>
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

export default Clients