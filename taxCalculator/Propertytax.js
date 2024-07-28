function calculateTax() {
  const plinthArea = parseFloat(document.getElementById('plinthArea').value);
  const basicStreetRate = parseFloat(document.getElementById('basicStreetRate').value);
  const halfYearlyTax = plinthArea * basicStreetRate * 135.408; // 135.408%

  document.getElementById('result').innerText = `Your half-yearly tax is ₹ ${halfYearlyTax.toFixed(2)}`;
}
