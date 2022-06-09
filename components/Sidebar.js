import React from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';


const Sidebar = (props) => {
	const closeSidebar = () => {
		props.setSidebarActive(false)
	}

		
	return (
		<div className='sidebarContainer is--hidden'>
			<div className={styles.sidebar}>

				<div>
					<div className={styles.closeButtonContainer}>
						<a onClick={closeSidebar}>X</a>
					</div>
				</div>

				<div className={styles.linkWrapper}>
					<div className={styles.linkContainer}>
						<ul className={styles.links}>
							{/* onclick for these need to set state variable for the sidebar to false to close the sidebar so the user can see the new page */}
                            <div className={styles.linkitem}>
                                <Link href="/about"><li>About</li></Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/services"><li>Services</li></Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/clients"><li>Clients</li></Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/contact"><li>Contact</li></Link>
                            </div>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Sidebar