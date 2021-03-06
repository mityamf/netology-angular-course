'use strict';

bookApp.controller('BookListCtrl', function($scope) {

    $scope.books = [{
        "id": "978-0641723445",
        "name": "The Lightning Thief",
        "author": "Rick Riordan",
        "genre": "fantasy",
        "inStock": true,
        "price": 12.50,
        "pages": 34
    }, {
        "id": "978-1423103349",
        "name": "The Sea of Monsters",
        "author": "Rick Riordan",
        "genre": "fantasy",
        "inStock": true,
        "price": 6.49,
        "pages": 304
    }, {
        "id": "978-1857995879",
        "name": "Sophie's World : The Greek Philosophers",
        "author": "Jostein Gaarder",
        "genre": "fantasy",
        "inStock": true,
        "price": 3.07,
        "pages": 164
    }, {
        "id": "978-1933988177",
        "name": "Lucene in Action, Second Edition",
        "author": "Michael McCandless",
        "genre": "IT",
        "inStock": true,
        "price": 30.50,
        "pages": 475
    }];

    $scope.orderProperty = 'price';

});
