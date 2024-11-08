// var myInfor = {
//     name: 'Cuong',
//     age: '21',
//     address: 'BD, DA',
// };

// myInfor.email = "Cglequang@gmail.com";
// console.log(myInfor.address); //console.log(myInfor. + biến nào thì khai báo ra biến đó)
// có 2 cách : .+ biến hay myInfor[' ' ]


// var languages = [
//     'php',
//     'Java',
//     'css',
// ];

// // console.log(languages.slice(1, 2)) // cắt phần tử ( có thể ghi số âm )
// // var languages2 = [
// //     'zzz',
// //     'abc',
// // ];


// // console.log(languages2.concat(languages))

// // languages.splice(1, 0, 'dart')// xoa di mot vi tri bat kì từ 1 -2
// // // nếu từ 1-0  thi k bị xóa bat cu j
// // // tham số 1 la vị trí con trỏ, tham số 2 là số lượng muốn xóa, tham số 3 là tên ban muốn truyền vào

// // console.log(languages)


// // console.log(languages.join(' - '))
// // console.log(languages.pop())// xoa phan tu cuoi mang
// // console.log(languages.push('dash', 'sabc')) //them phan tu cuoi mang
// // console.log(languages.shift()) // xoa phan tu dau mang
// // console.log(languages.unshiftshift('dash', 'ssss')) //them phan tu dau mang



// object constructor  xây dựng đối tượng

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// var author = new User('Cuong', 'Le', 'avatar')
// var user = new User('hai', 'nam', 'avatar2')

// author.title = 'chia se cho ';
// user.comment = 't dep trai';

// console.log(author.getName);
// console.log(user.getName);
//object prototype - nguyên liệu đối tượng


//bai tap
// function Student(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     Student.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// var student = new Student('cog', 'le');
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.getFullName());

// // đối tượng date 
// var date = new Date();

// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();


// console.log(`${day}\/${month}/${year}`);
// const date = new Date();

// function getNextYear() {

//     return date.getFullYear() + 1;

// }

// console.log(getNextYear());

// Math object ví du ko phải là contructor
// Math.PI trả lại số PI 
// Math.round() làm tròn số vd đưa số thập phân thì nó chuyển về số nguyên 1,8= 2
// Math.abs() giá trị tuyệt đối vd abs(4) 
// Math.ceil() làm tròn trên 4.1 = 5 khi lớn hơn 0 đều làm tròn
// Math.floor()nlam tròn dưới 5.9 = 5 
// Math.random() trả những số thập phân nhỏ hơn 1

// var random = Math.floor(Math.random() * 100)

// if (random < 50) {
//     console.log('Cuong hoa thanhcong')
// }

// // Math.min()
// console.log(Math.min(-100, 200, 3));
// // Math.max()
// console.log(Math.max(-100, 200, 3));

// var array = [
//     'Cuong',
//     'Hung',
//     14
// ]

// function getRandomItem(array) {
//     return array[Math.floor(Math.random() * array.length)]
// }
// console.log(getRandomItem(array));


//câu lệnh rẽ nhánh IF else
// function run(a) {
//     if ((a % 15) == 0) {
//         return 3
//     } else if ((a % 5) == 0) {
//         return 2
//     } else if ((a % 3) == 0) {
//         return 1
//     }
// }

// Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3


//câu lệnh rẽ nhánh Switch
// var date = 5;
// switch (date) {
//     case 2:

//     case 3:

//     case 4:
//         console.log('hom nay la thu 2, 3,  4')
//         break;
//     case 5:
//         console.log('hom nay la thu 5')
//         break;
//     default:
//         console.log('kobiet')
// }

// function run(fruits) {
//     var result;

//     switch (fruits) {
//         case "Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//         default:
//             result = "No fruits";
//     }

//     return result;
// }

//toan tử 3 ngôi - ternary operator
// var course = {
//     name: 'java',
//     coin: 210
// }
// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);

// } else {
//     console.log('Mien phi')
// }
// result = course.coin > 0 ? `${course.coin} Coins` : 'Mien pi';
// console.log(result); // toán tủ 3 ngôi


// function getCanVoteMessage(age) {
//     var result = age >= 18 ? "`Ban có thể `" : "` Bạn ko thể`";
//     return result;
// }
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'}


// Vòng lặp Loop
// 1. for - lặp với điều kiện đúng
// 2. for/in - lặp qua key của đối tượng
// 3. for/of - lặp qua value của đối tượng
// 4.while - lặp khi điều kiện đúng
// 5. do/while - lặp ít nhất 1 lần , sau đó lặp khi điều kiện đúng


// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }
function getRandNumber(arr) {
    for (var i = 1; i < length; i++) {
        arr[i] = Math.random() * (max - min) + min
    };
    return arr.slice(0, length)
}