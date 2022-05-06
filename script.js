// RegExp - регулярні вирази
// const regex = new RegExp('pattern', 'gmi')
// const regex2 = /pattern/gmi

// Flags
// i - не зважаючи на реєстр, А і а - однакові
// g - по всьому рядку, а не тільки перше співпадіння
// m - багаторядковий пошук
// s - символьний клас
// u - юнікод підтримка

// Methods regex

// str.match(regex) - шукає співпадіння і повертає їх, не має співпадінь - null
// const regex = /like/g
// const str = 'I like reading and also like travelling'
// console.log(str.match(regex))

// str.matchAll(regex) - аналог до match, але новіший
//  const regex = /like/g
//  const str = 'I like reading and also like travelling'
//  console.log(Array.from(str.matchAll(regex)))

// str.split(regex) - розділяє рядок на частини

// str.search(regex) - пошук по рядку
// console.log('HTML, CSS and JavaScript'.search(/javascript/i))

// str.replace(regex, value) - заміняє певні частини в рядку
// console.log('12-24-56'.replace(/-/g, ':'))


// regex.exec(str)
// якщо немає g, то це є аналог до match
// lastIndex - запамятовує попередні співпадіння


// regex.test(str) - провіряє чи є regex в рядку
// console.log(/javascript/i.test('I like JavaScript'))


// Символьні класи

// \d - усі цифри
// console.log('HTML, CSS4 and 2022'.match(/\d/g))

// \D - усе, але не цифри
// const number = '+38(066)123-45-67'
// console.log(number.match(/\d/g).join(''))
// console.log(number.replace(/\D/g, ''))

// \s - пробіли і таби
// console.log('1-5'.match(/\d-\d/))
// console.log('1 - 5'.match(/\d\s-\s\d/))

// \S - все крім \s
// \w - букви, цифри, _
// console.log('HTML5'.match(/\w\w\w\w\d/g))

// \W - все крім \w
// . - любий знак, але тільки якщо є flag /s
// const cssRegex = /CS.4/s
// console.log('CSS4!'.match(cssRegex))
// console.log('CS-4!'.match(cssRegex))
// console.log('CS 4!'.match(cssRegex))

// Якори
// ^ - початок речення
// console.log(/^Mary/.test('Mary bla bla bla'))
// $ - кінець речення
// console.log(/snow$/.test('bla bla bla snow'))

// 19:45
// console.log('Now is 19:45!'.match(/\d\d:\d\d$/g))


// Границя слова \b
// Java i JavaScript
// const javaRegex = /\bJava\b/i
// console.log('My language is Java'.match(javaRegex))
// console.log('My language is JavaScript'.match(javaRegex))

// 12.45 = \/
// console.log(/\d\d\.\d\d/gi.test('12.45'))
// console.log(/hello\(\)/.test('function hello()'))

// Діапазони
// console.log('Exception 0xAF'.match(/0x[0-9a-fA-F][0-9a-fA-F]/))
// [0-9a-zA-Z] - будь-яка літера і будь-яка цифра
// \d - те саме [0-9]
// \w - те саме [a-zA-Z]


// Кількість {n}
// console.log('Im 21 years old'.match(/\d{2}/))
// {3, 5}
// console.log('Im 21 years old, born in 2001'.match(/\d{3,5}/))
// {3, } - від 3 і більше

// + - 1 і більше
// \d+ === \d{1, } - шукає одну і більше цифр

// ? - 0 або 1
// \d? === \d{0,1}
// console.log('color or colour'.match(/colou?r/g))

// * - 0 і більше
// \d* === \d{0, }

// console.log('100 10 1'.match(/\d0+/g))
// console.log('100 10 1'.match(/\d0*/g))

// Дужкові оператори
// console.log('Gogogogo now'.match(/(go)+/i))
// console.log('Gooooooooo now'.match(/go+/i))


// Domen
// const domen = 'My domens are site.com and my.site.com'
// console.log(domen.match(/(\w+\.)+\w+/g))


// | - або 00:00 до 23:59
// console.log('23:55'.match(/^([0-1]\d|2[0-3]):[0-5]\d$/g)) // 00:00 до 23:59




