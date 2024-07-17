let islem = "ing";

function Kontrol(event) {
    const number = document.getElementById('loan');
    const percentage = document.getElementById('installment');

    if (number.type !== 'number' || percentage.type !== 'number') {
        alert('Lütfen girdi türlerini değiştirmeyin!');
        event.preventDefault();
        return false;
    }

    calculate();
    event.preventDefault();
}

function calculate() {
    const loan = parseFloat(document.getElementById('loan').value.trim());
    const installment = parseFloat(document.getElementById('installment').value.trim());

    if (isNaN(loan) || isNaN(installment)) {
        alert('Lütfen boş yer bırakmayınız');
        return false;
    }

    let sonuc;
    switch (islem) {
        case "ing":
            sonuc = ING(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        case "hscb":
            sonuc = HSCB(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        case "icbc":
            sonuc = ICBC(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        case "aexp":
            sonuc = AmericanExpress(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        case "capital":
            sonuc = CapitalOne(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        case "qnb":
            sonuc = QNB(loan, installment);
            document.getElementById('result').innerText = "Your loan amount: " + sonuc;
            break;
        default:
            console.log("ERROR!!!");
    }
}

function handleSelectChange(event) {
    var selectElement = event.target;
    islem = selectElement.value;
}

function ING(loan, installment) {
    var result = loan * (1 + (3.69 / 100) * installment);
    return result;
}

function HSCB(loan, installment) {
    var result = loan * (1 + (7.50 / 100) * installment);
    return result;
}

function ICBC(loan, installment) {
    var result = loan * (1 + (4.25 / 100) * installment);
    return result;
}

function AmericanExpress(loan, installment) {
    var result = loan * (1 + (4.25 / 100) * installment);
    return result;
}

function CapitalOne(loan, installment) {
    var result = loan * (1 + (4.48 / 100) * installment);
    return result;
}

function QNB(loan, installment) {
    var result = loan * (1 + (4.49 / 100) * installment);
    return result;
}