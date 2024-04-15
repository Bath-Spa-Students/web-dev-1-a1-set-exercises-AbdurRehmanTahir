document.getElementById('calculateBtn').addEventListener('click', function() {
    var petrolCost = parseFloat(document.getElementById('petrolCost').value);
    var liters = parseFloat(document.getElementById('liters').value);
    var currency = document.getElementById('currency').value;
    var totalCost = petrolCost * liters;
    
    if (currency === 'usd') {
        totalCost *= 3.67; // Conversion rate from USD to AED
    } else if (currency === 'eur') {
        totalCost *= 4.38; // Conversion rate from EUR to AED
    }
    
    document.getElementById('costResult').textContent = 'DHS ' + totalCost.toFixed(2);
});
