let money =parseFloat(prompt("Mời bạn nhập vào số tiền: "));

let text = money.toLocaleString("vi-VN", {style:"currency", currency:"VND"});

alert(`${text}`);