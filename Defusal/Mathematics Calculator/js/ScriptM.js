document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio normal do formulário para evitar recarregar a página

    // Captura os valores dos campos de texto e converte para maiúsculas
    let btn1 = document.getElementById("fbutton").value.toUpperCase();
    let btn2 = document.getElementById("sbutton").value.toUpperCase();

    // Tabela de conversão de letras para números
    const letterMapping = {
        'H': 0,
        'A': 1,
        'D': 2,
        'B': 3,
        'E': 4,
        'F': 5,
        'G': 6,
        'C': 7,
        'I': 8,
        'J': 9
    };

    // Função para converter uma letra para o número correspondente de acordo com a tabela fornecida
    function letterToNumber(letter) {
        return letterMapping[letter] !== undefined ? letterMapping[letter] : NaN;  // Retorna NaN se a letra não estiver na tabela
    }

    // Validação para garantir que ambos os pares tenham 2 caracteres e sejam válidos
    function isValidPair(pair) {
        return pair.length === 2 && letterMapping[pair[0]] !== undefined && letterMapping[pair[1]] !== undefined;  // Verifica se as letras estão na tabela
    }

    // Verifica se ambos os pares são válidos
    if (!isValidPair(btn1) || !isValidPair(btn2)) {
        alert("Por favor, insira pares válidos de letras (ex: GG, BC).");
        return;  // Interrompe a execução caso os pares sejam inválidos
    }

    // Converte as letras para números, juntando-os corretamente para formar números de 2 dígitos
    let num1 = letterToNumber(btn1[0]) * 10 + letterToNumber(btn1[1]);  // Ex: AH -> 10
    let num2 = letterToNumber(btn2[0]) * 10 + letterToNumber(btn2[1]);  // Ex: IH -> 80

    // Verifica se o resultado da conversão é válido (NaN) e mostra um erro se necessário
    if (isNaN(num1) || isNaN(num2)) {
        alert("Erro ao converter as letras para números.");
        return;
    }

    // Realiza o cálculo com os números obtidos
    let order = num1 * num2;

    // Exibe o resultado
    console.log(`Resultado: ${order}`); // Verificação do cálculo
    document.getElementById("order").textContent = `A ordem é: ${order}`; // Exibe no HTML
});

// Função para limpar os campos
document.getElementById('clear').addEventListener('click', function() {
    // Limpa os valores dos campos de texto e o resultado
    document.getElementById("fbutton").value = '';
    document.getElementById("sbutton").value = '';
    document.getElementById("order").textContent = ''; // Limpa o resultado

    // Seleciona automaticamente o primeiro campo de texto
    document.getElementById("fbutton").focus();
});

// Adiciona a funcionalidade para pressionar Enter também
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculator-form').requestSubmit();  // Submete o formulário ao pressionar Enter
    }
});
