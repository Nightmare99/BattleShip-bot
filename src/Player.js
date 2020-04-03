import _ from 'lodash';

var grid = {};
var rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var columns = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (var c of columns)
    for (var r of rows) {
        grid[[r + c]] = {
            status: 'unattacked',
            hasShip: false,
        }
    }
//console.log(grid);

function isSameRow(list, rowName) {
    for (var i of list)
        if (i.charAt(0) != rowName) return false;
    return true;
}

function isSameCol(list, colName) {
    for (i of list)
        if (i.charAt(1) != colName) return false;
    return true;
}

export class Player {
    constructor(id) {
        this.id = id; // discord id of player
        this.myTurn = false; // is it this player's turn?
        this.board = grid; // the player's board
        this.opponentBoard = grid; // opponent's board
        this.ships = {
            'Carrier': {
                len: 5,
                points: [],
            },
            'Battleship': {
                len: 4,
                points: [],
            },
            'Destroyer': {
                len: 3,
                points: [],
            },
            'Submarine': {
                len: 3,
                points: [],
            },
            'Patrol Boat 1': {
                len: 2,
                points: [],
            },
            'Patrol Boat 2': {
                len: 2,
                points: [],
            },
        };
        this.attackedPoints = [];
    }

    placeShip(name, list) {
        // Some basic error checks
        if (!_.includes(Object.keys(this.ships), name)) throw new Error('invalid ship');
        if (list.length != this.ships[name].len) throw new Error('invalid length');
        for (var item of list)
            if (!_.includes(rows, item.charAt(0)) || !_.includes(columns, item.charAt(1)))
                throw new Error('invalid point in list of points');
        if (!isSameRow(list, list[0].charAt(0)) && !isSameCol(list, list[0].charAt(1))) throw new Error('invalid points');
        
        // Add ship to grid, create a sort of 2 way relationship
        this.ships[name].points = list;
        for (var item of list) 
            this.board[item].hasShip = true;
        return 'success';
    }

    attack(player, point) {
        // some basic error handling
        if (_.includes(this.attackedPoints, point)) throw new Error('point already attacked');
        if (!_.includes(rows, point.charAt(0)) || !_.includes(columns, point.charAt(1))) throw new Error('invalid point in list of points');
        
        // handle attack
        this.attackedPoints.push(point);
        if (player.board[point].hasShip == false) {
            this.opponentBoard[point].status = 'miss';
            player.board[point].status = 'miss';
        }
        else {
            this.opponentBoard[point].status = 'hit';
            this.opponentBoard[point].hasShip = true;
            player.board[point].status = 'hit';
        }
    }
}

// var p1 = new Player(1);
// p1.placeShip('Patrol Boat 1', ['c1','c2']);
// var p2 = new Player(2);
// p2.attack(p1, 'c1');
// p2.attack(p1, 'c2');
// console.log(p2.opponentBoard);
// console.log(p1.getPoints());
// var p1 = new Point("1", "a");
// var p2 = new Point("1", "a");
// console.log(p1.equals(p2));