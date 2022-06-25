import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/footer.module.css'


const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.col}>
                <Link href="/about">
                    <a className={styles.logo}>
                        <h3>About</h3>
                    </a>
                </Link>
            </div>

            <div className={styles.col}>
                <Link href="/services">
                    <a className={styles.logo}>
                       <h3>Services</h3>
                    </a>
                </Link>
            </div>

            <div className={styles.col}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Image 
                        src="/LSS-logo.jpg" 
                        width={100} height={100} 
                        alt="Leblanc Software" 
                        className={styles.logo}
                        />
                    </a>
                </Link>
            </div>
            <div className={styles.col}>
                <Link href="/clients">
                    <a className={styles.logo}>
                        <h3>Clients</h3>
                    </a>
                </Link>
            </div>

            <div className={styles.col}>
                <Link href="/contact">
                    <a className={styles.logo}>
                        <h3>Contact</h3>
                    </a>
                </Link>
            </div>


        </div>
    </div>
  )
}

export default Footer