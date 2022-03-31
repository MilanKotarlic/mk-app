import React from 'react'
import styles from './pageWrapper.module.scss'

const PageWrapper = () => {
	return (
		<div className={styles.container}>
			<img className={styles.backgroundImage} src="background-2.jpg" alt="background"/>
		</div>
	)
}

export default PageWrapper