//** 1 */
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію
//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind

//const students = {
//   name: "Oleh",
//    specialty: "Травматолог",
//    GPA: "4",
//    missedL: "3",
//    showInfo: function () {
//        console.log("studens: " + this.name + " specialty: " + this.specialty + " GPA: " + this.GPA + " missedL: " + this.missedL);
//    },
//};

//student2 = {
//    name: "Lesia",
//    specialty: "Акушер",
//    GPA: "4.5",
//    missedL: "1",
//};

//student3 = {
//    name: "Dima",
//    specialty: "Хірург",
//    GPA: "3.8",
//    missedL: "5",
//};

//students.showInfo.bind(student2)();
//students.showInfo.call(student3);
//students.showInfo.apply(students);


//** 2  */
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

//const info = {
//    showItems() {
//        console.log(this.items);
//    },
//};

//const html = {
//    items: ["HTML – це мова гіпертекстової розмітки документів"],
//};

//const css = {
//    items: ["CSS - відповідає за зовнішній вигляд сторінки"],
//};

//document.querySelector('#html')
//    .addEventListener("click", info.showItems.bind(html));

//    document.querySelector('#css')
//.addEventListener("click", info.showItems.bind(css));


//** 3  */
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:
//1) banana 30, 4,5
//2) cherry 58, 1,3
//3) orange 89. 3,4

//const shop = {
//    name: "banana",
//    price: "30",
//    weight: "4.5",
//    number: "5",
//    showItems: function () {
//        console.log("shop: ", + this.name + " ptice: ", + this.price);
//    },
//};

//const cherry = {
//   name: "cherry",
//    price: "58",
//    weight: "1.3",
//     number: "2",
//};

//const orange = {
//    name: "orange",
//    price: "89",
//   weight: "3.4",
//     number: "1",
//};

//shop.showItems.bind(orange)();
//shop.showItems.call(cherry);
//shop.showItems.apply(shop);

