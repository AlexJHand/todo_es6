myApp.controller('IndexController', function(TodoService) {
    console.log('In IndexController');
    let vm = this;

    vm.displayText = (text) => {
        console.log('Display text', text);
        vm.addedText = text;
    }
})