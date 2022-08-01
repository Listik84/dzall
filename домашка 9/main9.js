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
const addButton = document.getElementById('add');
const sortButton = document.getElementById('sort');
const removeButton = document.getElementById('remove');
const clearButton = document.getElementById('clear');
const list = document.getElementById('list');

class TodoList {
    constructor() {
        this.todo = [];
    }

    render() {
        list.innerHTML = '';
        this.todo.forEach((item) => {
            console.log(item)
            let itemList = document.createElement('li'); //создаем переменную которая создает элемент li 
            itemList.innerText = item.text //записываем введенный текст в строку li
            list.appendChild(itemList)//вставляем li в html
        })
    }

    addToList() {
        let text = prompt('введите текст'); //создаем переменную которая присваивает текст введенный в promt
        const obj = { text: text, date: Date.now(), id: Math.floor(Math.random() * 20) };
        this.todo.push(obj);//добавляет объекты в конец массива todo
        
        this.render();
    }
    removeFromList() {
        let userId = Number(prompt('введите id'));
        let index = this.todo.findIndex((item) => {
            return item.id === userId;
        })
        if (index !== -1) {
            this.todo.splice(index, 1);
        }

        this.render();
    }

    sort(date) {
        this.todo.sort((a, b) => {
            return b.date - a.date ;
        })

        this.render();
    }

    clear() {
        this.todo.splice(0, this.todo.length);
        this.render();
    }
}

const todo = new TodoList();
addButton.addEventListener('click', () => {
    todo.addToList()
})
removeButton.addEventListener('click', () => {
    todo.removeFromList()
})
clearButton.addEventListener('click', () => {
    todo.clear()
})
sortButton.addEventListener('click', () => {
    todo.sort()
})

console.log(todo);
