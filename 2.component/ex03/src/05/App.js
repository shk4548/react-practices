import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {

    // import 후 변수 설정후 돌리는 타입
    
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    const result = Array.from({length:10}, (e,i) => i+1)
    console.log(result);


    // const a = [];
    // for(let i = 0; i <100 ; i++){
    //     a.push(<li>dwqwq</li>)
    // }
    // console.log(a);

    return (
        <div
            ref={outterRef}
            className={'App'}
            onScroll={ e=> console.log(outterRef.current.clientHeight, ':', outterRef.current.scrollTop,':', innerRef.current.clientHeight)}>

            <div
                ref={ innerRef }>
                <ul>
                    {/* { Array.from({length: 100}, (_, i) => i+1).map(i =>
                        <li>
                            { `아이템 ${i} 입니다.` }
                        </li> */}
                    {/* ) } */}
                    {Array.from({length:100}, (_,i) => 
                    <li key={i}>
                        {`아이템${i + 1} 입니다.`}
                    </li>)}
                </ul>
            </div>
        </div>
    );
}