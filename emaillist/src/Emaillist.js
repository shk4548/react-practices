import React from 'react'
import styles from './assets/scss/Emaillist.scss'
import Email from './Email'


const Emaillist = ({emails}) => {
  return (
    <ul className={styles.Emaillist}>
        {
            // emails.map(e => <Email />) 처리해줌됨
        }
        <Email />
        <Email />
        <Email />
        
    </ul>
  )
}

export default Emaillist