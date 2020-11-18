function myFunc(elem) {
    var matrix=[];
    //kreairanje i inicijalizacija matrice
    for (var i=0; i<10; i++) {
        matrix[i]=new Array(10);
        for (var j=0; j<10; j++) {
            matrix[i][j]=i*10+j+1;
        }
    }

    var suma=0;
    var index1 = -1;
    var index2 = -1;

    //pronaci indekse elementa
    for (var i=0; i<10; i++) {
        for (var j=0; j<10; j++) {
            if(elem==matrix[i][j]){
                index1 = i;
                index2 = j;
            }
        }
    }

    //sumiranje
    for (var i=0; i<10; i++) {
        for (var j =0; j<10; j++) {
            if((index1-i>=-1 && index1-i<=1)&&(index2-j>=-1 && index2-j<=1)) {
                suma+=matrix[i][j];
            }
        }
    }
    console.log(suma);
}

myFunc(2);
myFunc(100);
myFunc(45);
