import React from 'react'
import Image from 'next/image'
import styles from '../styles/heroimage.module.css'
// import heroImage from '/public/HeroImage/lss-hero-medium.jpg'
// import heroImageMobile from '/public/HeroImage/lss-hero-mobile.jpg'

const HeroImage = (props) => {
  return (
    <div className={styles.Wrapper}>
        <div>
            <div className={styles.imageContainer}>
                <Image 
                    src={props.image}
                    className={styles.image}
                    layout="responsive"
                    width={props.width}
                    height={props.height}
                />

              
            </div>

         
        </div>


    </div>
  )
}

export default HeroImage