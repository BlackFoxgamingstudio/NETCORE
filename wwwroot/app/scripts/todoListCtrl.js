'use strict';
angular.module('todoApp')
.controller('todoListCtrl', ['$scope', '$location', 'todoListSvc', function ($scope, $location, todoListSvc) {
    $scope.error = "";
    $scope.loadingMessage = "Loading...";
    $scope.todoList = null;
    $scope.editingInProgress = false;
    $scope.newToDoSubject = "";
    $scope.newToDoName = "";
    $scope.newToDoDescription = "";
    $scope.newToDoStartTime = "";
    $scope.newToDoCreationDate ="";
    $scope.newToDoStatus ="";



    $scope.editInProgressTodo = {
        subject: "",
        name: "",
        description: "",
        creationdate: "",
        status: "",
        starttime: "",
        isComplete: false,
        id: 0
    };

    

    $scope.editSwitch = function (todo) {
        todo.edit = !todo.edit;
        if (todo.edit) {
            
            $scope.editInProgressTodo.subject = todo.subject;
            $scope.editInProgressTodo.name = todo.name;
            $scope.editInProgressTodo.description = todo.description;
            $scope.editInProgressTodo.creationDate = todo.creationDate;
            $scope.editInProgressTodo.status = todo.status;
            $scope.editInProgressTodo.starttime = todo.startTime;

            $scope.editInProgressTodo.id = todo.id;
            $scope.editInProgressTodo.isComplete = todo.isComplete;
            $scope.editingInProgress = true;
        } else {
            $scope.editingInProgress = false;
        }
    };

    $scope.populate = function () {
        todoListSvc.getItems().success(function (results) {
            $scope.todoList = results;
            $scope.loadingMessage = "";
        }).error(function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        })
    };
    $scope.delete = function (id) {
        todoListSvc.deleteItem(id).success(function (results) {
            $scope.loadingMessage = "";
            $scope.populate();
        }).error(function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        })
    };
    $scope.update = function (todo) {
        $scope.editInProgressTodo.isComplete = todo.isComplete;
        todoListSvc.putItem($scope.editInProgressTodo).success(function (results) {
            $scope.loadingMsg = "";
            $scope.populate();
            $scope.editSwitch(todo);
        }).error(function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        })
    };
    $scope.add = function () {
        if ($scope.editingInProgress) {
            $scope.editingInProgress = false;
        }
        todoListSvc.postItem({
            'Subject': $scope.newToDoSubject,
            'Name': $scope.newToDoName,
            'Description': $scope.newToDoDescription,
            'CreationDate': $scope.newToDoCreationDate,
            'Status': $scope.newToDoStatus,
            'StartTime': $scope.newToDoStartTime,
            'IsComplete': false
        }).success(function (results) {
            $scope.loadingMsg = "";
            $scope.newToDoSubject = "";
            $scope.newToDoName = "";
            $scope.newToDoDescription = "";
            $scope.newToDoCreationDate ="";
            $scope.newToDoStatus ="";
            $scope.newToDoStartTime = "";
            
            $scope.populate();
        }).error(function (err) {
            $scope.error = err;
            $scope.loadingMsg = "";
        })
    };

}]);
