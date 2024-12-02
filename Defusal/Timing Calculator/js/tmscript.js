document.getElementById('timing-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio normal do formulário

    // Captura os valores dos campos
    let pair1 = document.getElementById("pair1").value; // Primeiro par: número de dois dígitos
    let pair2 = document.getElementById("pair2").value.toUpperCase(); // Segundo par: letras

    // Tabela de conversão de letras para números
    const letterMapping = {
        'A': 4,
        'B': 3,
        'C': 7,
        'D': 9
    };

    // Função para converter a letra para o número correspondente
    function letterToNumber(letter) {
        return letterMapping[letter] || NaN;  // Retorna NaN se a letra não estiver na tabela
    }

    // Verifica se o primeiro par tem 2 dígitos (um número de 2 dígitos)
    if (pair1.length !== 2 || isNaN(pair1)) {
        alert("Formato inválido para o primeiro par. Insira um número de dois dígitos.");
        return;
    }

    // Verifica se o segundo par tem 2 letras
    if (pair2.length !== 2 || !letterMapping[pair2[0]] || !letterMapping[pair2[1]]) {
        alert("Formato inválido para o segundo par. Insira duas letras válidas (A, B, C, D).");
        return;
    }

    // Converte o número e as letras
    let num1 = parseInt(pair1); // Primeiro número
    let letter1 = letterToNumber(pair2[0]); // Primeira letra
    let letter2 = letterToNumber(pair2[1]); // Segunda letra

    // Calcula o resultado
    let result = num1 * (letter1 + letter2);

    // Verifica se o resultado é válido
    if (isNaN(result)) {
        alert("Erro ao calcular. Verifique os valores inseridos.");
        return;
    }

    // Determina a cor com base no resultado
    let color = '';
    if (result <= 59) {
        color = 'Branco';
    } else if (result <= 99) {
        color = 'Vermelho';
    } else if (result <= 199) {
        color = 'Amarelo';
    } else if (result <= 299) {
        color = 'Verde';
    } else if (result <= 399) {
        color = 'Azul';
    } else if (result <= 499) {
        color = 'Amarelo';
    } else if (result <= 599) {
        color = 'Vermelho';
    } else {
        color = 'Branco';
    }

    // Exibe a cor correspondente
    document.getElementById("order").textContent = `Cor: ${color}`;
});

// Função para limpar os campos
document.getElementById('clear').addEventListener('click', function() {
    // Limpa os valores dos campos de texto e o resultado
    document.getElementById("pair1").value = '';
    document.getElementById("pair2").value = '';
    document.getElementById("order").textContent = '';

    // Seleciona automaticamente o primeiro campo de número
    document.getElementById("pair1").focus();
});

// Adiciona a funcionalidade para pressionar Enter também
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('timing-form').requestSubmit();  // Submete o formulário ao pressionar Enter
    }
});
