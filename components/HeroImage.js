import React from 'react'
import Image from 'next/image'
import styles from '../styles/heroimage.module.css'
import heroImage from '/public/HeroImage/lss-hero-4klarge.jpg'
import heroImageMed from '/public/HeroImage/lss-hero-medium.jpg'
import heroImageMobile from '/public/HeroImage/lss-hero-mobile.jpg'

const HeroImage = (props) => {
  return (
    <div className={styles.Wrapper}>
        <div>
            <div className={styles.imageContainer}>
                <Image
                    src={heroImage}
                    alt="LSS"
                    width={1920}
                    height={1080}
                    layout="responsive"
                    className={styles.image}
                />


              
            </div>

         
        </div>


    </div>
  )
}

export default HeroImage