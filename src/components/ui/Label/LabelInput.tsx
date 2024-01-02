import React from 'react'
import styles from './LabelInput.module.scss'

function LabelInput({ type, placeholder }) {
    return (
        <label>
            <input className={styles.input} type={type} placeholder={placeholder}></input>
        </label>
    )
}

export default LabelInput