(function(){
    
    const colorCodes = ['#6E97A7', '#2B8EAD', '#2F454D', '#2B8EAD', '#2F454D', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454D'];

    const getRandomNum = (currentIndex) => Math.floor(Math.random() * currentIndex);

    const quickSort = function (left = 0, right = this.length - 1) {
        if (right - left <= 0) {
            return;
        }
        const pivot = this[right];

        let i = left;
        let j = right - 1;

        while (true) {
            while (this[i] < pivot) { i++ }
            while (j > 0 && this[j] > pivot) { j--; }

            if (i >= j) { break };
            ([this[i], this[j]] = [this[j], this[i]])
        }

        [this[i], this[right]] = [this[right], this[i]];

        this.quickSort(left, i - 1);
        this.quickSort(i + 1, right);

        return this;
    }

    Array.prototype.quickSort = quickSort;

    const suffle = function () {
        let currentIndex = this.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = getRandomNum(currentIndex)
            currentIndex--;
            [numArrayObj[currentIndex], numArrayObj[randomIndex]] = [numArrayObj[randomIndex], numArrayObj[currentIndex]];
        }
        return this;
    }
    Array.prototype.suffle = suffle;

    let numArrayObj = Array.from({ length: 9 }, (v, i) => i + 1);
    
    const render = () => {
        let tileContainer = document.getElementById('grid');
        tileContainer.innerHTML = numArrayObj.map(value => 
            `<div class='tile' style='background-color: ${colorCodes[value-1]}'><span>${value}</span></div>`).join(' ');
        console.log(numArrayObj);
    }
    render();

    const suffleBtn = document.getElementById('suffle');
    const sortBtn = document.getElementById('sort');

    suffleBtn.addEventListener('click', (e) => {
        numArrayObj.suffle();
        render();
    });

    sortBtn.addEventListener('click', (e) => {
        numArrayObj.quickSort();
        render();
    });

})();