import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '../components/HeroImage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
	<div className={styles.container}>
		<Head>
			<title>Leblanc Software Solutions</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<HeroImage />

		<section className={styles.main}>
			<div className={styles.aboutWrapper}>
			   <div className={styles.titleContainer}>
					<h1>We build <span>beautiful</span>, <span>performant</span> websites that <span>scale</span>.<br></br> Using Frameworks like Nextj. We are able to provide the versatility of choosing the best and fastest way to render your website. </h1>   
				</div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <Image src="/PagespeedScore-01.png" alt="about us" width={400} height={400} />
                        <Image src="/PagespeedScore-02.png" alt="about us" width={400} height={400} />
                    </div>
                </div> 

			    <div className={styles.titleContainer}>
					<h1>As a young company, we have decided to specialize in Web and App design & development services first before expanding to offer additional services such as SAAS products etc</h1>   
				</div> 
			</div>


			<div className={styles.servicesWrapper}>

				<div>
					<h1>Services</h1>

					<div>

					</div>
				</div>
		
			</div>




		</section>

	</div>
  )
}
