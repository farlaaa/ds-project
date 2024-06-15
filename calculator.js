function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Tidak dapat melakukan pembagian dengan nol!';
    }
}

function kalkulator(operator, a, b) {
    if (isNaN(a) || isNaN(b))
        return 'Error: Inputan harus berupa angka!';
    
    switch (operator) {
        case '+':
            return tambah(a, b);
        case '-':
            return kurang(a, b);
        case '*':
            return kali(a, b);
        case '/':
            return bagi(a, b);
        default:
            return 'Operator tidak ditemukan';
    }
}

const operator = [
    {operator: '+', angka1: 35, angka2: 8},
    {operator: '-', angka1: 50, angka2: 10},
    {operator: '*', angka1: 8, angka2: 2.5},
    {operator: '/', angka1: 28, angka2: 3},
    {operator: '/', angka1: 50, angka2: 0},
    {operator: '♡︎', angka1: 143, angka2: 143},
    {operator: '+', angka1: '727', angka2: '6X'}
];

operator.forEach((hitungan) => {
    const hasil = kalkulator(hitungan.operator, hitungan.angka1, hitungan.angka2);
    console.log(`${hitungan.angka1} ${hitungan.operator} ${hitungan.angka2} = ${hasil}`);
});
