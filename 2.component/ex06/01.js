import fs from 'fs';

let state = {
    order : JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 비추천, 원래 배열 파괴
const updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "c002-003",
    "name": "파란양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("==========================================================================");

state = {
    order : JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 원래 배열을 파괴하진 않음
const updateProducts2 = state.order.products.concat({
    "no": "c002-003",
    "name": "파란양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);

console.log("==========================================================================");

state = {
    order : JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// 추천 배열 제어 방식
const updateProducts3 = [...state.order.products, {
    "no": "c002-003",
    "name": "파란양말",
    "price": 2000,
    "amount": 1
}]

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);










