const getNumberSign = (num) => {
    if (num > 0) {
    return 'positive';
    } else if (num < 0) {
    return 'negative';
    } else {
    return 'zero';
    }
}

getNumberSign(3);
getNumberSign(0);
getNumberSign(-5);


