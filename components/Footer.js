import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo/LSS-logo.jpg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <h3>About</h3>

                </div>

                <div className={styles.col}>
                    <h3>Services</h3>

                </div>

                <div className={styles.col}>
                    <h3>Our Clients</h3>

                </div>

                <div className={styles.col}>
                    <h3>Contact Us</h3>

                </div>

                    {/* Logo container */}
                {/* <div className={styles.logoWrapper}>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <Image
                                src={logo}
                                
                                className={styles.image}
                            />
                        </Link>

                    </div>
                </div> */}
                    
                <div className={styles.container2}>
                    <div className={styles.row2}>
                        <div className={styles.col2}>
                            <h3>Jobs</h3>
                            <h3>IT Consulting</h3>
                            <h3>About</h3>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer