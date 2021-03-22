/**
 * const letの変数宣言
 */
//
// const val4 = {
//   name: "アナゴ",
//   age: 25
// };
// val4.name = "カツオ";
// val4.adress = "東京";

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "anago";
// const age = 25;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
// 	return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
// 	return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
// 	return num1 + num2;
// }
// console.log(func3(10, 20));

// const myProfile = {
// 	name: "アナゴ",
// 	age: 25
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['アナゴ', 25];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const sayhello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayhello("アナゴ");

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["カツオ", "サザエ", "ワカメ"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ワカメ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

// const val1 = 1 > 0 ? 'true': 'false';
// console.log(val1);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): '数値を入力してください。';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています':　'許容範囲内です';
// }
// console.log(checkSum(50, 60));

// const flag1 = 'ture';
// const flag2 = 'false';

// if(flag1 || flag2 ) {
//   console.log('1か2はtrueです。');
// }
// if(flag1 && flag2 ) {
//   console.log('1も2もtrueです。');
// }

// const num = null;
// const fee = num || '金額が未設定です';
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && 'なにか設定されました';
// console.log(fee2)
