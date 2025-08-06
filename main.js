document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let peso = parseFloat(document.querySelector('#peso').value);
        let altura = parseFloat(document.querySelector('#altura').value);

        if (!peso) {
            alert('O campo peso está vazio ou inválido');
            return;
        }

        if (!altura) {
            alert('O campo altura está vazio ou inválido');
            return;
        }

        altura = altura / 100; // converter para metros
        const imc = peso / (altura * altura);

        function levelimc(imc) {
            if (imc <= 19) {
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
                return "Abaixo do peso";
            } else if (imc <= 25) {
                resultado.style.backgroundColor = 'green';
                resultado.style.color = 'white';
                return "Peso Normal";
            } else if (imc <= 30) {
                resultado.style.backgroundColor = 'yellow';
                resultado.style.color = 'black';
                return "Sobrepeso";
            } else if (imc <= 35) {
                resultado.style.backgroundColor = 'orange';
                resultado.style.color = 'black';
                return "Obesidade 1";
            } else if (imc <= 40) {
                resultado.style.backgroundColor = 'red';
                resultado.style.color = 'white';
                return "Obesidade 2";
            } else {
                resultado.style.backgroundColor = 'black';
                resultado.style.color = 'white';
                return "Obesidade 3";
            }
        }

        const nivel = levelimc(imc);

        resultado.innerHTML = `Seu IMC = ${imc.toFixed(1)}<br><p class="resultado">Seu peso está: ${nivel}</p>`;

        const log = document.getElementById('console');
        if (log) {
            log.innerHTML += `${peso} / (${altura} * ${altura}) = IMC = ${imc.toFixed(1)} status ${nivel}<br>`;
        }
    });
});
