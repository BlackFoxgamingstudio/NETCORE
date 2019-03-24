'use strict';
angular.module('todoApp')
.controller('todoListCtrl', ['$scope', '$location', 'todoListSvc', function ($scope, $location, todoListSvc) {
    $scope.error = "";
    $scope.loadingMessage = "Loading...";
    $scope.todoList = null;
    $scope.editingInProgress = false;
    $scope.newToDoaccount = "";
    $scope.newToDocurrent_activity = "";
    $scope.newToDocurrent_task = "";
    $scope.newToDocontact = "";
    $scope.newToDocreationdate ="";
    $scope.newToDorole ="";
    $scope.newToDousecase ="";
    $scope.newToDonote ="";
    $scope.newToDoAction_plan ="";
    $scope.newToDoemail_template ="";
    $scope.newToDouser ="";
    $scope.newToDocreationdate ="";
    $scope.newToDostartdate ="";
    $scope.newToDoenddate ="";

    $scope.editInProgressTodo = {
        account: "",
        current_activity: "",
        current_task: "",
        contact: "",
        creationdate: "",
        role: "",
        usecase: "",
        note: "",
        Action_plan: "",
        email_template: "",
        user: "",
        creationdate: "",
        startdate: "",
        enddate:"",
        IsComplete: false,
        id: 0
    };

    

    $scope.editSwitch = function (todo) {
        todo.edit = !todo.edit;
        if (todo.edit) {
            
            $scope.editInProgressTodo.account = todo.account;
            $scope.editInProgressTodo.current_activity = todo.current_activity;
            $scope.editInProgressTodo.current_task = todo.current_task;
            $scope.editInProgressTodo.contact = todo.contact;
            $scope.editInProgressTodo.creationdate = todo.creationdate;
            $scope.editInProgressTodo.role = todo.role;
            $scope.editInProgressTodo.usecase = todo.usecase;
            $scope.editInProgressTodo.note = todo.note;
            $scope.editInProgressTodo.Action_plan = todo.Action_plan;
            $scope.editInProgressTodo.user = todo.user;
            $scope.editInProgressTodo.email_template = todo.email_template;
            $scope.editInProgressTodo.creationdate = todo.creationdate;
            $scope.editInProgressTodo.startdate = todo.startdate;
            $scope.editInProgressTodo.enddate = todo.enddate;
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
            
            'account': $scope.newToDoaccount,
            'current_activity': $scope.newToDocurrent_activity,
            'current_task': $scope.newToDocurrent_task,
            'contact': $scope.newToDocontact,
            'role': $scope.newToDorole,
            'Usecase': $scope.newToDousecase,
            'note': $scope.newToDonote,
            'action_plan': $scope.newToDoAction_plan,
            'Email_template': $scope.newToDoemail_template,
            'user': $scope.newToDouser,
            'creationdate': $scope.newToDocreationdate,
            'startdate': $scope.newToDostartdate,
            'enddate': $scope.newToDoenddate,
            'IsComplete': false

        }).success(function (results) {
            $scope.loadingMsg = "";
            $scope.newToDoaccount = "";
            $scope.newToDocurrent_activity = "";
            $scope.newToDocurrent_task = "";
            $scope.newToDocontact ="";
            $scope.newToDorole ="";
            $scope.newToDousecase = "";
            $scope.newToDonote = "";
            $scope.Action_plan= "";
            $scope.email_template= "";
            $scope.user="";
            $scope.creationdate="";
            $scope.startdate="";
            $scope.enddate="";
            
            $scope.populate();
        }).error(function (err) {
            $scope.error = err;
            $scope.loadingMsg = "";
        })
    };

}]);
