import React from 'react'

const App = () => {
   // 좋지않지만 의외로 많이하는 inline
    return (
    <div>
        <h1
            onClick={(e) => {console.log('click !');} }
            style={{
                cursor: 'pointer'
            }}>
                ex03: InlineHandler
        </h1>
    </div>
  )
}

export default App

