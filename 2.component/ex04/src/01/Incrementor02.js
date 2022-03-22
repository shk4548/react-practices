import React, {useState} from 'react';

export default function ({ begin, step }) {
  
    const [val, setVal] = useState(begin); // [선택값을 선택하고 val , 호출함 setVal ]
    console.log("!!!!!!")

    return (
        <div>
            <button onClick ={e => setVal(val+step)}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ val }</span>
        </div>
    );
}