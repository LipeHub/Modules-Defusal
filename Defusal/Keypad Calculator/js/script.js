document.getElementById('keypad-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos campos e converte para números inteiros
    let btn1 = parseInt(document.getElementById("fbutton").value);
    let btn2 = parseInt(document.getElementById("sbutton").value);
    let btn3 = parseInt(document.getElementById("tbutton").value);
    let btn4 = parseInt(document.getElementById("lbutton").value);

    let x = 0;
    let y = 0;
    let z = 0;
    let order = '';

    // Verifica se os valores dos botões são números válidos e têm 2 dígitos

    // Cálculos para o valor de x
    if (btn1 < 10) {
        x = 15;
    } else if (btn1 < 20) {
        x = 20;
    } else if (btn1 < 80) {
        x = 30;
    } else {
        x = 10;
    }

    if (btn2 < 10) {
        x += 10;
    } else if (btn2 < 20) {
        x *= 2;
    } else if (btn2 < 80) {
        x *= 3;
    } else {
        x -= 10;
    }

    if (btn3 < 10) {
        x *= 2;
    } else if (btn3 < 20) {
        x *= 3;
    } else if (btn3 < 80) {
        x -= 5;
    }

    if (btn4 < 10) {
        x *= 2;
    } else if (btn4 < 20) {
        x += 20;
    } else if (btn4 < 80) {
        x += 50;
    } else {
        x *= 3;
    }

    // Cálculo de y
    y = (btn1 + btn2 + btn3 + btn4) / 2;

    // Cálculo de z
    z = x - y;

    // Lógica para determinar o padrão (order)
    if (z <= 0) {
        order = "1234";
    } else if (z <= 19.5) {
        order = "1243";
    } else if (z <= 49.5) {
        order = "4321";
    } else if (z <= 89.5) {
        order = "2413";
    } else {
        order = "3124";
    }

	// Exibe o resultado com a mensagem "A ordem é: [order]"
	document.getElementById("order").textContent = `A ordem é: ${order}`;

});

// Função para limpar os campos
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById("fbutton").value = '';
    document.getElementById("sbutton").value = '';
    document.getElementById("tbutton").value = '';
    document.getElementById("lbutton").value = '';
    document.getElementById("order").textContent = '';

    // Foca no primeiro campo de entrada
    document.getElementById("fbutton").focus();
});

// Funcionalidade para pressionar Enter também
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('keypad-form').requestSubmit();  // Submete o formulário ao pressionar Enter
    }
});
