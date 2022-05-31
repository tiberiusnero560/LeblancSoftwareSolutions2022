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

				<div className={styles.linkContainer}>
					<div>
						<ul className={styles.links}>
							{/* onclick for these need to set state variable for the sidebar to false to close the sidebar so the user can see the new page */}
							<Link href="/about"><li>About</li></Link>
							<Link href="/check-availability"><li>Check Availability</li></Link>
							<Link href="/book-now"><li>Book Now</li></Link>
							<Link href="/about"><li>Contact</li></Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Sidebar