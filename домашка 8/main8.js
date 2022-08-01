// Домашка №8(до 11.07. 00-00)

// class TodoList {
//     constructor() {
//         this.todo = []
//     }

//     //принимает объект для добавление в массив
//     addToList(text) {
//         //подумать как сгенерировать id
//         const obj = { text: text, date: Date.now(), id: 1 }
//     }

//     // удалить из массива по id
//     removeFromList(id) {

//     }

//     //отсортировать по дате от большего к меньшему
//     sort() {

//         }
//         //очистить тудушки, сделайть начальное значение
//     clear() {

//     }

// }
// ----------------------------------------------------------------

class TodoList{
    constructor(){
        this.todo = [];
    }
    addToList(text){
        const obj = {text: text, date: Date.now(), id: Math.floor(Math.random() * 20)};
        this.todo.push(obj);
    }
    removeFromList(idUniq){
        let index = this.todo.findIndex((item) => {
            return item.id === idUniq.id;
        })
        if (index !== -1){
            this.todo.splice(index, 1);
        }
    }
    sort(date){
        this.todo.sort((a, b) => {
            return a.date - b.date;
        })
    }
    clear(){
        this.todo.splice(0, this.todo.length);
    }
}
const todo = new TodoList();
todo.addToList("Have breakfast"); 
todo.addToList("Have lunch"); 
todo.addToList("Have dinner"); 
todo.addToList("Do homework for JS"); 
todo.removeFromList({id:10});
todo.sort(); 
// todo.clear(); 
console.log(todo);
