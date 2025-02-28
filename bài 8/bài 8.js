let date2 = prompt("Mời bạn nhập vào ngày trong quá khứ(YYYY-MM-DD):");

let num1  = new Date();
let num2 = new Date(date2);

let deviation = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);

alert("Độ lệch là " + deviation + " ngày.");