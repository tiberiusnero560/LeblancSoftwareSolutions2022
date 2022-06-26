import React from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';


const Sidebar = (props) => {

	// Toggle the sidebar on and off
	const closeSidebar = () => {
		props.toggleSidebar();
		console.log('is clicked')
	}
		
	return (
		<div className='sidebarContainer is--hidden'>
			<div className={styles.sidebar}>

			

				<div className={styles.linkWrapper}>
					<div className={styles.linkContainer}>
						<ul className={styles.links}>
							{/* onclick for these need to set state variable for the sidebar to false to close the sidebar so the user can see the new page */}
                            <div className={styles.linkitem}>
                                <Link href="/about">
                                    <a onClick={closeSidebar}>
                                        <li className={styles.link}>
                                            About
                                        </li>
                                    </a> 
                                </Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/services">
                                     <a onClick={closeSidebar}>
                                        <li className={styles.link}>
                                            Services
                                        </li>
                                    </a> 
                                </Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/clients">
                                     <a onClick={closeSidebar}>
                                        <li className={styles.link}>
                                            Clients
                                        </li>
                                    </a> 
                                </Link>
                            </div>

                            <div className={styles.linkitem}>
                                <Link href="/contact">
                                    <a onClick={closeSidebar}>
                                        <li className={styles.link}>
                                            Contact Us
                                        </li>
                                    </a> 
                                </Link>
                            </div>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Sidebar