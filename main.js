//Дан массив [1, 2, 3, 4, 5] с помощью метода
// reduce сделать объект в котором ключ будет
// равен элементу массива, а значение (элемент * 100)
// input: [1, 2, 3, 4, 5]
// output: {1: 100, 2: 200, 3: 300 ...}

// let num = [1, 2, 3, 4, 5];
// const res = num.reduce((item, element )=>{
//     return {
//         ...item,
//         [element] : element * 100
//     }
// }, {})
// console.log(res)

// 2 **********************************************

// Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы
// произвольные самим придумать. Написать функцию
// которая создает из массива skills объект с рандомными
// значениями от 1 до 100, использовать reduce и Math.random()
// input: ['hook', 'blackhole']
// output: {'hook': 20, 'blackhole: 100'}

// let number = ['qwerty','sky','skill','skilln'];
// const  resalt = number.reduce((object, elem)=>{
//     return{
//         ...object,
//         [elem]: Math.floor((Math.random()*100+1))
//     }
// },{})
// console.log(resalt)

//   3 ****************************************

// Дан произвольный массив из чисел больше 0 с помощью
// reduce посчитать сумму четных и нечетных чисел.
// input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
// output: { even: 100, odd: 100 } // 100 это для
// примера, сумма должна высчитываться

// const numbers =  [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300];
// const calcNumbers = numbers.reduce((obj, elem)=>{
//     if (elem % 2 === 0){
//         obj.even += elem;
//     }else {
//         obj.odd += elem;
//     }
//     return obj;
//
// }, {even:0, odd:0});
// console .log(calcNumbers);



//  4 ******************************************

// Дан массив  [ { name: 'Harry Potter', house:
// 'Gryfindor' }, { name: 'Cedric Diggory', house:
// 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' },
// { name: 'Ronald Weasley', house: 'Gryfindor' },
// { name: 'Hermione Granger', house: 'Gryfindor' }];
// Создайте новый массив, который будет содержать только
// имена мастеров из Хаффлпаффа. Сделайте эту задачу
// двуми способоами:
// C помощью filter и map
// C помощью reduce

// const nameHouse = [
//     { name: 'Harry Potter', house: 'Gryfindor'},
//     { name: 'Cedric Diggory', house:  'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryfindor' },
//     { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const  userName = nameHouse .filter(item => item.house === "Hufflepuff")
//     .map(item => item.name);
// console.log(userName);
//
// const userName2 = nameHouse.reduce((obj,elem) =>{
//     if (elem.house === 'Hufflepuff'){
//         return [...obj, elem.name];
//     }
//     return obj;
// }, []);
//
// console.log(userName2)


//  5 ***********************************************

// Дан массив [3, 4, 1, 2, 7]. Создайте две переменные
// и запишите туда результат сортировки:
// От большего к меньшему
// От меньшего к большему

// let sum = [3, 4, 1, 2, 7];
// const more = sum.slice().sort((a,b) => (b-a ));
// const less = sum.slice().sort((a,b) => (a-b));
// console.log(more);
// console.log(less);



// 6 *************************************************

//Создайте произвольный массив из строк и также
// создайте две переменные, куда запишите результат
// сортировки:
// От A-Z
// От Z-A

// const strSort = ['qwerty', 'sky','sun','sunshine'];
// const A_Z_sort = strSort.slice().sort(function(a,b) {
//     let strSortA = a.toLowerCase();
//     let strSortB = b.toLowerCase();
//     if(strSortA > strSortB) return 1;
//     if(strSortA < strSortB) return -1;
//     return 0;
// })
//
// const Z_A_sort = strSort.sort(function(a,b) {
//     let strSortA = a.toLowerCase();
//     let strSortB = b.toLowerCase();
//     if(strSortA > strSortB) return -1;
//     if(strSortA < strSortB) return 1;
//     return 0;
// })
// console.log(A_Z_sort);
// console.log(Z_A_sort);