const lista1 = [
    2,
    6,
    8,
    7,
    7,
    7,
    1,
    9,
    5
]


function mediaGeo() {
    let total = 1;
     lista1.forEach((item) => {
        total *= item;
    }); 

    total = 1 / (total ** lista1.length);

    console.log(total);
}

