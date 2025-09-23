function existe(num, lista) {
    for(let item of lista) {
        if(item == num) {
            return true;
        }
    }
    return false;
}

function uniao(A, B) {
    let res = A.slice();
    for(let item of B) {
        if(!existe(item, res)) {
            res.push(item);
        }
    }
    return res;
}

function inter(A, B) {
    let res = [];
    for(let item of B) {
        if(existe(item, A)) {
            res.push(item);
        }
    }
    return res;
}

let A = [5,4,1,2];
let B = [1,2,3,4];

console.log(uniao(A, B));
console.log(inter(A, B));
// A diferença é exercício para você!!!