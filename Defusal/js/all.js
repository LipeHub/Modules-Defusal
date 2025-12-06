document.addEventListener('DOMContentLoaded', () => {
                /* 
    ADD MORE LANGUAGES, AT LEAST 3 (DS, FR, ES)
                */ 


    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            // General
            "site-title": "Home Page",
            "home-nav": "Home",
            "math-nav": "Mathematics",
            "timing-nav": "Timing",
            "keypad-nav": "Keypad",
            "theme-toggle": "Theme",
            "footer-text": "All rights reserved ©",
            // Index Page
            "welcome-title": "Welcome to the Defusal Assistant!",
            "welcome-p1": "This website is a fan-made resource for the Roblox game <em>Defusal</em>, a thrilling co-op game where one player, the defuser, must disarm a bomb with the help of their friends, the experts, who have the manual. This game is inspired by the popular title <em>Keep Talking and Nobody Explodes</em>.",
            "welcome-p2": "Here you will find simplified guides and interactive tools for some of the most common modules. The goal is to provide quick instructions to help you and your team succeed.",
            "featured-modules-title": "Module Guides & Tools",
            "math-card-title": "Mathematics",
            "math-card-desc": "Guide and calculator for the Mathematics module.",
            "timing-card-title": "Timing",
            "timing-card-desc": "Guide and calculator for the Timing module.",
            "keypad-card-title": "Keypad",
            "keypad-card-desc": "Guide and calculator for the Keypad module.",
            // Module Guide Pages
            "math-page-title": "Mathematics Module Guide",
            "timing-page-title": "Timing Module Guide",
            "keypad-page-title": "Keypad Module Guide",
            "how-to-solve": "How to Solve the Module",
            "steps-title": "Step-by-step instructions:",
            "open-calculator-btn": "Open Calculator Tool",
            "math-desc": "The Mathematics module presents you with two pairs of letters, for example, <code>CC</code> and <code>CB</code>. Your task is to translate these letters into numbers and then multiply them to get the defusal code.",
            "math-step1": "<strong>Translate the letters:</strong> Each letter corresponds to a number based on a key provided in the manual. For instance, if 'C' is 7 and 'B' is 3, the pair <code>CC</code> becomes the number 77, and <code>CB</code> becomes 73.",
            "math-step2": "<strong>Multiply the numbers:</strong> Take the two numbers you've just translated (77 and 73 in our example) and multiply them together. Or, use our calculator tool!",
            "math-step3": "<strong>Enter the result:</strong> The product of the multiplication (e.g., 77 * 73 = 5621) is the code you need to enter into the module to disarm it.",
            "timing-desc": "The Timing module has a flashing button and displays a pair of numbers and a pair of letters. Your goal is to perform a calculation to find a specific color, and then press the button at the exact moment it flashes that target color.",
            "timing-step1": "<strong>Find the target color:</strong> You must use the numbers and letters on the module to calculate a final value. This value corresponds to one of the colors in the flashing sequence (Red, Orange, Yellow, Green, Blue, or Purple).",
            "timing-step2": "<strong>Use the calculator:</strong> To avoid doing the math under pressure, open our calculator tool. Input the numbers and letters from the module, and it will instantly tell you the correct target color.",
            "timing-step3": "<strong>Wait and press:</strong> Watch the flashing button. When it lights up with the target color revealed by the calculator, press it immediately to defuse the module.",
            "keypad-desc": "The Keypad module shows four numbers and requires you to press the buttons in a specific sequence determined by a series of calculations. The numbers on the keypad should be read from top left to bottom right.",
            "keypad-step1": "<strong>Follow button-specific rules:</strong> The manual provides rules for each of the four buttons based on the value of the numbers shown on the keypad (e.g., if a number is under 10, between 20 and 80, etc.). You must apply these rules in sequence.",
            "keypad-step2": "<strong>Perform sequential calculations:</strong> You will perform a series of calculations based on the rules for each button. This can be complex, so our calculator tool is highly recommended.",
            "keypad-step3": "<strong>Calculate the final number:</strong> After following the rules for all four buttons and summing the results, you'll perform a final set of calculations to get your final number.",
            "keypad-step4": "<strong>Determine the button press order:</strong> This final number will fall within a range that dictates the correct order to press the four keypad buttons (e.g., a final number between 20 and 50 might mean pressing the buttons in the order 4, 3, 2, 1).",
            "keypad-note": "<em>Note: Always ensure you are using the most up-to-date manual, as instructions can change.</em>",
            // Calculator Pages
            "calculate-btn": "Calculate",
            "result-prefix": "Result:",
            "error-invalid-input": "Error: Please check your inputs.",
            "math-calc-title": "Mathematics Calculator",
            "math-calc-p1": "Enter the two numbers you translated from the letter pairs in the module.",
            "math-calc-num1-label": "First Number",
            "math-calc-num2-label": "Second Number",
            "timing-calc-title": "Timing Calculator",
            "timing-calc-p1": "Enter the numbers and letters exactly as they appear on the module. The letter values are A=1, B=2, C=3, D=4.",
            "timing-calc-num-label": "Number Pair (e.g., 2 6)",
            "timing-calc-letter-label": "Letter Pair (e.g., A B)",
            "timing-result-prefix": "Press button on:",
            "keypad-calc-title": "Keypad Calculator",
            "keypad-calc-p1": "Enter the four numbers displayed on the keypad, reading from top-left to bottom-right.",
            "keypad-calc-num1-label": "Number 1 (Top-Left)",
            "keypad-calc-num2-label": "Number 2 (Top-Right)",
            "keypad-calc-num3-label": "Number 3 (Bottom-Left)",
            "keypad-calc-num4-label": "Number 4 (Bottom-Right)",
            "keypad-result-prefix": "Press Order:",
        },
        pt: {
            // Geral,
            "site-title": "Página Inicial",
            "home-nav": "Início",
            "math-nav": "Matemática",
            "timing-nav": "Tempo",
            "keypad-nav": "Teclado",
            "theme-toggle": "Tema",
            "footer-text": "Todos os direitos reservados ©",
            // Página Inicial
            "welcome-title": "Bem-vindo ao Assistente de Defusal!",
            "welcome-p1": "Este site é um recurso feito por fãs para o jogo do Roblox <em>Defusal</em>, um emocionante jogo cooperativo onde um jogador, o desarmador, deve desativar uma bomba com a ajuda de seus amigos, os especialistas, que têm o manual. Este jogo é inspirado no popular título <em>Keep Talking and Nobody Explodes</em>.",
            "welcome-p2": "Aqui você encontrará guias simplificados e ferramentas interativas para alguns dos módulos mais comuns. O objetivo é fornecer instruções rápidas para ajudar você e sua equipe a terem sucesso.",
            "featured-modules-title": "Guias e Ferramentas de Módulos",
            "math-card-title": "Matemática",
            "math-card-desc": "Guia e calculadora para o módulo de Matemática.",
            "timing-card-title": "Tempo",
            "timing-card-desc": "Guia e calculadora para o módulo de Tempo.",
            "keypad-card-title": "Teclado",
            "keypad-card-desc": "Guia e calculadora para o módulo do Teclado.",
            // Páginas de Guia dos Módulos
            "math-page-title": "Guia do Módulo de Matemática",
            "timing-page-title": "Guia do Módulo de Tempo",
            "keypad-page-title": "Guia do Módulo de Teclado",
            "how-to-solve": "Como Resolver o Módulo",
            "steps-title": "Instruções passo a passo:",
            "open-calculator-btn": "Abrir Calculadora",
            "math-desc": "O módulo de Matemática apresenta dois pares de letras, por exemplo, <code>CC</code> e <code>CB</code>. Sua tarefa é traduzir essas letras em números e depois multiplicá-los para obter o código de desarme.",
            "math-step1": "<strong>Traduza as letras:</strong> Cada letra corresponde a um número com base em uma chave fornecida no manual. Por exemplo, se 'C' é 7 e 'B' é 3, o par <code>CC</code> se torna o número 77, e <code>CB</code> se torna 73.",
            "math-step2": "<strong>Multiplique os números:</strong> Pegue os dois números que você acabou de traduzir (77 e 73 em nosso exemplo) e multiplique-os. Ou, use nossa ferramenta de calculadora!",
            "math-step3": "<strong>Insira o resultado:</strong> O produto da multiplicação (ex: 77 * 73 = 5621) é o código que você precisa inserir no módulo para desarmá-lo.",
            "timing-desc": "O módulo de Tempo tem um botão que pisca e exibe um par de números e um par de letras. Seu objetivo é realizar um cálculo para encontrar uma cor específica e, em seguida, pressionar o botão no momento exato em que ele piscar nessa cor alvo.",
            "timing-step1": "<strong>Encontre a cor alvo:</strong> Você deve usar os números e as letras no módulo para calcular um valor final. Este valor corresponde a uma das cores na sequência de piscadas (Vermelho, Laranja, Amarelo, Verde, Azul ou Roxo).",
            "timing-step2": "<strong>Use a calculadora:</strong> Para evitar fazer a matemática sob pressão, abra nossa ferramenta de calculadora. Insira os números e as letras do módulo, e ela informará instantaneamente a cor alvo correta.",
            "timing-step3": "<strong>Aguarde e pressione:</strong> Observe o botão piscando. Quando ele acender com a cor alvo revelada pela calculadora, pressione-o imediatamente para desativar o módulo.",
            "keypad-desc": "O módulo de Teclado mostra quatro números e exige que você pressione os botões em uma sequência específica determinada por uma série de cálculos. Os números no teclado devem ser lidos da esquerda para a direita, de cima para baixo.",
            "keypad-step1": "<strong>Siga as regras específicas dos botões:</strong> O manual fornece regras para cada um dos quatro botões com base no valor dos números mostrados no teclado (por exemplo, se um número for menor que 10, entre 20 e 80, etc.). Você deve aplicar essas regras em sequência.",
            "keypad-step2": "<strong>Realize cálculos sequenciais:</strong> Você realizará uma série de cálculos com base nas regras de cada botão. Isso pode ser complexo, então nossa ferramenta de calculadora é altamente recomendada.",
            "keypad-step3": "<strong>Calcule o número final:</strong> Após seguir as regras para todos os quatro botões e somar os resultados, você fará um conjunto final de cálculos para obter o número final.",
            "keypad-step4": "<strong>Determine a ordem de pressionamento dos botões:</strong> Este número final cairá dentro de um intervalo que dita a ordem correta para pressionar os quatro botões do teclado (por exemplo, um número final entre 20 e 50 pode significar pressionar os botões na ordem 4, 3, 2, 1).",
            "keypad-note": "<em>Nota: Sempre certifique-se de estar usando o manual mais atualizado, pois as instruções podem mudar.</em>",
            // Páginas de Calculadora
            "calculate-btn": "Calcular",
            "result-prefix": "Resultado:",
            "error-invalid-input": "Erro: Por favor, verifique os valores inseridos.",
            "math-calc-title": "Calculadora de Matemática",
            "math-calc-p1": "Insira os dois números que você traduziu dos pares de letras no módulo.",
            "math-calc-num1-label": "Primeiro Número",
            "math-calc-num2-label": "Segundo Número",
            "timing-calc-title": "Calculadora de Tempo",
            "timing-calc-p1": "Insira os números e letras exatamente como aparecem no módulo. Os valores das letras são A=1, B=2, C=3, D=4.",
            "timing-calc-num-label": "Par de Números (ex: 2 6)",
            "timing-calc-letter-label": "Par de Letras (ex: A B)",
            "timing-result-prefix": "Pressione o botão no:",
            "keypad-calc-title": "Calculadora de Teclado",
            "keypad-calc-p1": "Insira os quatro números exibidos no teclado, lendo do canto superior esquerdo para o inferior direito.",
            "keypad-calc-num1-label": "Número 1 (Sup-Esquerdo)",
            "keypad-calc-num2-label": "Número 2 (Sup-Direito)",
            "keypad-calc-num3-label": "Número 3 (Inf-Esquerdo)",
            "keypad-calc-num4-label": "Número 4 (Inf-Direito)",
            "keypad-result-prefix": "Ordem para Pressionar:",
        }
    };

    // --- THEME & LANGUAGE INITIALIZATION (No changes here) ---
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const languageSelector = document.getElementById('lang-selector');
    const htmlEl = document.documentElement;

    const setLanguage = (lang) => {
        htmlEl.lang = lang;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);
    };
    
    // Theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', currentTheme);
    themeToggleButton.addEventListener('click', () => {
        let newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Language
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelector.value = savedLanguage;
    setLanguage(savedLanguage);
    languageSelector.addEventListener('change', (event) => setLanguage(event.target.value));

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#wiki-nav ul li a').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPage)) {
            link.classList.add('active');
        }
    });

    // --- CALCULATOR LOGIC ---

    const resultDisplay = document.getElementById('result-display');
    const currentLang = () => localStorage.getItem('language') || 'en';

    // ** Mathematics Calculator **
    const mathForm = document.getElementById('math-calculator-form');
    if (mathForm) {
        mathForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const num1 = parseInt(document.getElementById('math-num1').value);
            const num2 = parseInt(document.getElementById('math-num2').value);
            if (isNaN(num1) || isNaN(num2)) {
                resultDisplay.innerHTML = `<span class="result-value">${translations[currentLang()]['error-invalid-input']}</span>`;
                return;
            }
            const result = num1 * num2;
            resultDisplay.innerHTML = `<span class="result-prefix">${translations[currentLang()]['result-prefix']}</span> <span class="result-value">${result}</span>`;
        });
    }

        // ** Timing Calculator **
    const timingForm = document.getElementById('timing-calculator-form');
    if (timingForm) {
        const letterValues = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
        timingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const numPair = document.getElementById('timing-nums').value.trim().split(/\s+/);
            const letterPair = document.getElementById('timing-letters').value.trim().toUpperCase().split(/\s+/);

            // --- Input Validation ---
            if (numPair.length !== 2 || letterPair.length !== 2 || isNaN(parseInt(numPair[0])) || isNaN(parseInt(numPair[1])) || !letterValues[letterPair[0]] || !letterValues[letterPair[1]]) {
                 resultDisplay.innerHTML = `<span class="result-value">${translations[currentLang()]['error-invalid-input']}</span>`;
                return;
            }

            // --- Calculation ---
            const x = parseInt(numPair[0]) + parseInt(numPair[1]);
            const y = letterValues[letterPair[0]] + letterValues[letterPair[1]];
            const z = x * y;

            // --- Determine Logical Color (based on your provided ranges) ---
            let logicalColor;
            if (z >= 0 && z <= 59) logicalColor = 'WHITE';
            else if (z >= 60 && z <= 99) logicalColor = 'RED';
            else if (z >= 100 && z <= 199) logicalColor = 'YELLOW';
            else if (z >= 200 && z <= 299) logicalColor = 'GREEN';
            else if (z >= 300 && z <= 399) logicalColor = 'BLUE';
            else if (z >= 400 && z <= 499) logicalColor = 'YELLOW';
            else if (z >= 500 && z <= 599) logicalColor = 'RED';
            else logicalColor = 'WHITE';
            
            // --- Determine Display Color (to fix the invisibility issue) ---
            let displayColor = logicalColor; // By default, display color is the same as logical color
            if (logicalColor === 'WHITE') {
                // *** THE FIX IS HERE ***
                // If the color is white, we show the word "WHITE" but use a visible color like gray.
                displayColor = 'slategray'; 
            } else if (logicalColor === 'YELLOW') {
                // Make yellow more visible on light theme
                displayColor = '#B8860B'; // DarkGoldenRod
            }

            // --- Display the Result ---
            resultDisplay.innerHTML = `<span class="result-prefix">${translations[currentLang()]['timing-result-prefix']}</span> <span class="result-value" style="color: ${displayColor};">${logicalColor}</span>`;
        });
    }

    // ** Keypad Calculator **
    const keypadForm = document.getElementById('keypad-calculator-form');
    if(keypadForm) {
        keypadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const n1 = parseInt(document.getElementById('keypad-num1').value);
            const n2 = parseInt(document.getElementById('keypad-num2').value);
            const n3 = parseInt(document.getElementById('keypad-num3').value);
            const n4 = parseInt(document.getElementById('keypad-num4').value);

            if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
                resultDisplay.innerHTML = `<span class="result-value">${translations[currentLang()]['error-invalid-input']}</span>`;
                return;
            }
            
            let v1=0, v2=0, v3=0, v4=0;
            // Logic based on Defusal Wiki
            if (n1 < 10) v1 = 15; else if (n1 > 9 && n1 < 50) v1 = 3; else if (n1 > 49 && n1 < 100) v1 = 26; else v1 = 48;
            if (n2 < 20) v2 = v1 * 3; else if (n2 > 19 && n2 < 80) v2 = v1 + 50; else v2 = v1 - 10;
            if (n3 % 2 === 0) v3 = v2 * 2; else v3 = v2 + v1;
            if (n4 > 50) v4 = v3 - v2; else v4 = v3 + n1;
            
            const sum = v1 + v2 + v3 + v4;
            let final = (sum / 2) - v1;

            let order;
            if (final < 0) order = "1, 2, 3, 4";
            else if (final >= 0 && final < 20) order = "1, 3, 2, 4";
            else if (final >= 20 && final < 50) order = "4, 3, 2, 1";
            else if (final >= 50 && final < 100) order = "2, 4, 1, 3";
            else if (final >= 100 && final < 200) order = "3, 1, 4, 2";
            else order = "4, 2, 3, 1";

            resultDisplay.innerHTML = `<span class="result-prefix">${translations[currentLang()]['keypad-result-prefix']}</span> <span class="result-value">${order}</span>`;
        });
    }
});