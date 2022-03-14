import React from 'react'
import styles from './assets/css/Banner01.css'
// module로 접근!!!!
// import form './assets/css/Banner01.css' 랑 다름
// 이걸로 접근하면 header 가 두개이기때문에 오류발생
const Banner01 = () => {
  return (
    <h1 className={styles.Header}>Hello React</h1>
  )
}

export default Banner01