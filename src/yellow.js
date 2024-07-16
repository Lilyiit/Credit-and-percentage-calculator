let islem = "yuzde";

function Kontrol(event) {
   
    const number = document.getElementById('number');
    const percentage = document.getElementById('percentage');

  
    if (number.type !== 'number' || percentage.type !== 'number') {
        alert('Lütfen girdi türlerini değiştirmeyin!');
        event.preventDefault();
        return false;
    }

    
    calculate();
    event.preventDefault(); 
}

function calculate() {
    var number = document.getElementById('number').value.trim();
    var percentage = document.getElementById('percentage').value.trim();

    if (number === "" || percentage === "") {
        alert('Lütfen boş yer bırakmayınız');
        return false;
    }

    var sonuc;
    switch (islem) {
        case "yuzde":
            sonuc = calculatepercentage(number, percentage);
            document.getElementById('result').innerText = number + " sayısının yüzde " + percentage + " = " + sonuc;
            break;
        case "toplam":
            sonuc = calculatetoplam(number, percentage);
            document.getElementById('result').innerText = number + "+" + percentage + "=" + sonuc;
            break;
        case "fark":
            sonuc = calculatefark(number, percentage);
            document.getElementById('result').innerText = number + "-" + percentage + "=" + sonuc;
            break;
        case "carp":
            sonuc = calculatecarp(number, percentage);
            document.getElementById('result').innerText = number + "*" + percentage + "=" + sonuc;
            break;
        case "bolme":
            sonuc = calculatediv(number, percentage);
            document.getElementById('result').innerText = number + "/" + percentage + "=" + sonuc;
            break;
        case "mod":
            sonuc = calculatemod(number, percentage);
            document.getElementById('result').innerText = number + "%" + percentage + "=" + sonuc;
            break;
        case "us":
            sonuc = calculateus(number, percentage);
            document.getElementById('result').innerText = number + " " + "üssü " + percentage + "=" + sonuc;
            break;
        default:
            console.log("ERROR!!!")
    }
}

function handleSelectChange(event) {
    var selectElement = event.target;
    islem = selectElement.value;
}

function calculatepercentage(number, percentage) {
    var result = (number * percentage) / 100;
    return result;
}

function calculatetoplam(number, percentage) {
    var result = (number * percentage) / 100 + number;
    return result;
}

function calculatefark(number, percentage) {
    var result = number - (number * percentage) / 100;
    return result;
}

function calculatecarp(number, percentage) {
    var result = ((number * percentage) / 100) * number;
    return result;
}

function calculatediv(number, percentage) {
    var result = number / ((number * percentage) / 100);
    return result;
}

function calculatemod(number, percentage) {
    var result = number % ((number * percentage) / 100);
    return result;
}

function calculateus(number, percentage) {
    var result = (number ** ((percentage * number) / 100));
    return result;
}
