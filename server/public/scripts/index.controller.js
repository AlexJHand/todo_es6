myApp.controller('IndexController', function(TodoService) {
    console.log('In IndexController');
    let vm = this;
    vm.todos = {
        list = []
    }
    vm.todos.list = TodoService.todos.list;

    vm.displayText = (text, date) => {
        console.log('Display text', text);
        console.log('Date', date);
        vm.addedText = text;
    }

    vm.getTodos = () => {
        console.log('In getTodos');
        TodoService.getList().then(function () {
            console.log('vm.todos', vm.todos.list);

        })
    }
})