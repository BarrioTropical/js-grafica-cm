
/*
<div class="grid">
    <div class="square">
    <span>1</span>
    </div>
</div>
*/

const playButton = document.getElementById('play');

function play(){
    console.log('il bottone funziona');
    const numCell
    const levelHtml = document.getElementById('livello');
    const level = levelHtml.value;
    switch(level){
        case '1':
            numCell = 100;
            break;
        case '2':
            numCell = 81;
            break;
        case '3':
            numCell = 49;
            break;
    }

    //creo la cella
    function drawCell(numCell){
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.innerHTML = `
            <span>${numCell}</span>
        `;
        cell.addEventListener('click', function(){
            this.classList.add('blue');
        })
        return cell;
    }

    //creo la griglia
    function drawGrid(){
        const fieldGame = document.getElementById('field-game');
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(let i = 1; i <= numCell; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        fieldGame.appendChild(grid);
    }

    //avvia griglia e quindi cella
    drawGrid();
}

playButton.addEventListener('click', play);