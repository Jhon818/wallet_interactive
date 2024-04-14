import { FC, useState } from 'react'
import styles from '../styles/BalanceWallet.module.css'

export const BalanceWallet: FC = () => {

    const onClick = () => {
        console.log('Ping!')
    }
    
	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}

