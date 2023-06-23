class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
  }

 set state(stateNum = 100) {
    if (stateNum < 0) {
        stateNum = 0;
    }
    if (stateNum > 100) {
        stateNum = 100
    }
    this._state = stateNum;
  }

  get state(){
    return this._state;
  }

  fix() {
    if ( this.state * 1.5 > 100) {
      this.state = 100;
    } else {this.state *= 1.5;}
  }
}

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

class Library {
  constructor (name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type_, value) {
    for (let i = 0; i < this.books.length; i++) {
      if ((this.books[i])[type_] == value) {
        return this.books[i];
      }   
    } 
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if ((this.books[i])['name'] == bookName) {
        let vol = this.books[i];
        this.books.splice(i,1);
        return vol;
      }   
    }
    return null;
  }
}

const library1 = new Library('Библиотека');
let book1 = new NovelBook('Фёдор Михайлович Достоевский', 'Братья Карамазовы', 1880, 840);
let book2 = new DetectiveBook('Артур Конан Дойл', 'Приключе́ния Ше́рлока Хо́лмса', 1892, 307);
let book3 = new NovelBook('Ше́рвуд А́ндерсон', 'Уайнсбург, Огайо', 1919, 288);
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
//console.log(library1.findBookBy('releaseDate', 1919));
let issuedBook = library1.giveBookByName('Братья Карамазовы');
//console.log(issuedBook);
issuedBook.state = 30;
//console.log(issuedBook);
issuedBook.fix();
issuedBook.fix();
issuedBook.fix();
//console.log(issuedBook);
library1.addBook(issuedBook);
//console.log(library1.books[2]);

//======================================================================

class Student{
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(grade, subject) {
    if(grade < 2 || grade > 5) {
      return -1;
    }
    if(subject in this.marks) {
      this.marks[subject].push(grade);
    } else {
      this.marks[subject] = [grade];
    }
  }

  getAverageBySubject(subject) {
    if(!(subject in this.marks)) {
      return 0;
    }
    let sum = this.marks[subject].reduce((pvalue, cvalue) => pvalue + cvalue);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    if (Object.keys(this.marks).length == 0) {
      return 0;
    }
    let sum = 0;
    for(let i = 0; i < Object.keys(this.marks).length; i++) {
      sum += this.getAverageBySubject(Object.keys(this.marks)[i]);
    }
    return sum / Object.keys(this.marks).length;
  }
}

student1 = new Student("Иван Петров");
student1.addMark(5, 'Химия');
student1.addMark(4, 'Химия');
student1.addMark(5, 'Химия');
student1.addMark(5, 'Музыка');
student1.addMark(3, 'Музыка');
student1.addMark(5, 'Музыка');
console.log(student1.getAverageBySubject('Музыка'));
console.log(student1.getAverage());