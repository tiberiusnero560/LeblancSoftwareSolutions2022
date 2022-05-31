import React from 'react'
import Image from 'next/image'
import styles from '../styles/HeroImage.module.css'
import heroImage from '/public/HeroImage/lss-hero-medium.jpg'

const HeroImage = () => {
  return (
    <div className={styles.Wrapper}>
        <div>
            <div className={styles.imageContainer}>
                <Image 
                    src={heroImage}
                />
            </div>

         
        </div>


    </div>
  )
}

export default HeroImage