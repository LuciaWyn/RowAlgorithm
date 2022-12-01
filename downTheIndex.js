function indexesRows(number, array){
    let row = [];
    if(number >= 2){
        let subRow = [];
        array.forEach((item, index)=>{
            subRow.push(item);
            if(index === (array.length-1)){
                row.push(subRow);
                subRow = [];
            }
            else if(index%number === (number-1)){
                row.push(subRow);
                subRow = [];
            }
        })
    }
    else{
        return array;
    }
    return row;
}

let pets = ["cat", "dog", "goldfish", "hampster", "parrot", "mouse", "Gerible","fish", 'monkey',"frog"]

let petsLength = pets.length;

for(petsLength; petsLength>=1; petsLength--){
    console.log(petsLength);
    console.log(indexesRows(petsLength, pets));
}