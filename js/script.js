
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
    const numCell = 100;

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

    
    function drawGrid(){
        const fieldGame = document.getElementById('field-game');
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(let i = 1; i <= 100; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        fieldGame.appendChild(grid);
    }

    drawGrid();
}

playButton.addEventListener('click', play);