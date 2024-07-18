function processPayment() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expirationDate = document.getElementById('expirationDate').value;
    var cvv = document.getElementById('cvv').value;

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert('El número de tarjeta debe tener 16 dígitos numéricos.');
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
        alert('La fecha de expiración debe tener el formato MM/AA.');
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert('El CVV debe tener 3 dígitos numéricos.');
        return;
    }

    // Redirigir a otra página después de un pago exitoso
    window.location.replace('pagoTerminado.html');
}
