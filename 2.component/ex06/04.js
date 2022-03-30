import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    // 해당 패스의 값 변경 1
    receive: {
        $set: '부산시 해운대구 우동'

    },
    // 해당 패스의 값 변경2
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 요소 변경 ( 인덱스로 찾아서 )
        0: {
            amount: {
                $set: 5
            }
        },
            // 배열 요소 추가
        $push: [{
             "no" : "c002-003",
             "name": "정의진이 입던 옷",
             "price": 30000,
             "amount": 1
        },
        {
            "no" : "c03",
            "name": "정의진이 먹던 빵",
            "price": 3000000000000,
            "amount": 3
        }]        
    }
})

console.log(
    state.order,
    updateOrder );