import styles from './initial.module.scss'

const InitialView = () => {
	return (
		<div className={styles.container}>
			{/* <div className={styles.logo} /> */}
			<h1>Aegis.</h1>
			<h2>A tiny game to practice AoE building shortcuts.</h2>
		</div>
	)
}

export default InitialView
