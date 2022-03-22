import React, { Fragment } from 'react'
import Incrementor01 from './Incrementor01'
import Incrementor02 from './Incrementor02'


const App = () => {
   // 좋지않지만 의외로 많이하는 inline
    return (
    <Fragment>
        <h2>01. 기본개념</h2>
        <Incrementor01 step={1} begin={1}/>
        <Incrementor02 step={10} begin={10}/>
        
    </Fragment>
  )
}

export default App

