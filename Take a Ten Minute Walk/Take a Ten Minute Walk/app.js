//http://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    var x = 0; y = 0;
    
    if (walk.length !== 10)
        return false;
    
    for (var i = 0; i < walk.length; ++i) {
        switch (walk[i]) {
            case "n":
                ++y;
                break;
            case "s":
                --y;
                break;
            case "w":
                --x;
                break;
            case "e":
                ++x;
                break;
        }
    }

    return x === 0 && y === 0;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(!isValidWalk(['w']), 'should return false');
console.log(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');