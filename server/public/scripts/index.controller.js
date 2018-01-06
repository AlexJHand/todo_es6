myApp.controller('IndexController', function(TodoService) {
    console.log('In IndexController');
    let vm = this;

    vm.displayText = (text, date) => {
        console.log('Display text', text);
        console.log('Date', date);
        vm.addedText = text;
    }
})