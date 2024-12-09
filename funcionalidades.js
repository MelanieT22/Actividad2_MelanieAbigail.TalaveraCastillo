// Comparar dos números
document.getElementById('compareBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');

    if (num1 > num2) result.textContent = `El mayor es: ${num1}`;
    else if (num1 < num2) result.textContent = `El mayor es: ${num2}`;
    else result.textContent = 'Ambos números son iguales.';
});

// Mostrar mes correspondiente
document.getElementById('monthBtn').addEventListener('click', () => {
    const month = parseInt(document.getElementById('month').value);
    let monthName = '';

    switch (month) {
        case 1: monthName = 'Enero'; break;
        case 2: monthName = 'Febrero'; break;
        case 3: monthName = 'Marzo'; break;
        case 4: monthName = 'Abril'; break;
        case 5: monthName = 'Mayo'; break;
        case 6: monthName = 'Junio'; break;
        case 7: monthName = 'Julio'; break;
        case 8: monthName = 'Agosto'; break;
        case 9: monthName = 'Septiembre'; break;
        case 10: monthName = 'Octubre'; break;
        case 11: monthName = 'Noviembre'; break;
        case 12: monthName = 'Diciembre'; break;
        default: alert('Número inválido.');
    }
    if (monthName) alert(`El mes es: ${monthName}`);
});

// Gestión de arrays
const names = [];
document.getElementById('addNameBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        names.push(nameInput);
        document.getElementById('nameList').textContent = names.join(', ');
        document.getElementById('nameInput').value = '';
    }
});
