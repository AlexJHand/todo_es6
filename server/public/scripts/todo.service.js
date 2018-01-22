myApp.service('TodoService', function ($http) {
    console.log('In TodoService');

    let self = this;
    self.todos = {
        list: []
    }

    self.getList = () => {
        console.log('In getList');
        return $http({
            method: 'GET',
            url: '/todo'
        }).then(function (response) {
            console.log('Received', response);
            self.todos.list = response.data;
            console.log(response.data);
        })
    }
})