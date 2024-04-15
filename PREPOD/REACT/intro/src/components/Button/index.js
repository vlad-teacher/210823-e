import React from "react";
import styles from './index.module.css';


export const Button = ({onClick, children}) => { 
    return (
        <button onClick={onClick} className={styles.common}>{children}</button>
    );
};