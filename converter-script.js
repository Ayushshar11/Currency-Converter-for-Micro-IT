function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  // Example static rates – update or connect to API for live data
  const rates = {
    USD: { USD: 1, INR: 83, EUR: 0.92, GBP: 0.79, JPY: 155, CAD: 1.37, AUD: 1.50 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0095, JPY: 1.87, CAD: 0.016, AUD: 0.018 },
    EUR: { USD: 1.09, INR: 90, EUR: 1, GBP: 0.86, JPY: 168, CAD: 1.48, AUD: 1.63 },
    GBP: { USD: 1.27, INR: 105, EUR: 1.16, GBP: 1, JPY: 195, CAD: 1.73, AUD: 1.90 },
    JPY: { USD: 0.0065, INR: 0.53, EUR: 0.0059, GBP: 0.0051, JPY: 1, CAD: 0.0089, AUD: 0.0098 },
    CAD: { USD: 0.73, INR: 61, EUR: 0.68, GBP: 0.58, JPY: 112, CAD: 1, AUD: 1.10 },
    AUD: { USD: 0.67, INR: 56, EUR: 0.61, GBP: 0.52, JPY: 102, CAD: 0.91, AUD: 1 },
  };

  const converted = amount * rates[from][to];
  document.getElementById("result").innerText =
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
