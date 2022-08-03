const container = document.querySelector('.container')



let x = 16
createBoard()
function createBoard (){
    for (i=0; i < x; i++) {
        const board = document.createElement('div');
        board.classList.add('row');
        for (j=0; j < x; j++){
            const cBoard = document.createElement('div');
            cBoard.classList.add('column')
            board.appendChild(cBoard);
            cBoard.addEventListener('mouseenter', () => cBoard.style.backgroundColor = 'black');

        }
        container.appendChild(board);
    }

}

function getNumber (numb) {
    const input = document.querySelector('#padnumber').value;
    x = input
}

function newBoard () {
    getNumber();
    createBoard();
    cBoard.style.backgroundColor = null;

}


const button = document.querySelector('#button');
button.addEventListener('click', newBoard);
