function convertTemperature() {
    const inputTemperature = document.getElementById("inputTemperature").value;
    const celsiusRadio = document.getElementById("celsius");
    const fahrenheitRadio = document.getElementById("fahrenheit");
    const resultElement = document.getElementById("result");
  
    // Check which radio button is selected
    if (celsiusRadio.checked) {
      // Convert Celsius to Fahrenheit
      const fahrenheit = (inputTemperature * 9/5) + 32;
      resultElement.textContent = ${inputTemperature} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit;
    } else if (fahrenheitRadio.checked) {
      // Convert Fahrenheit to Celsius
      const celsius = (inputTemperature - 32) * 5/9;
      resultElement.textContent = ${inputTemperature} Fahrenheit is ${celsius.toFixed(2)} Celsius;
    } else {
      // Handle invalid input or no radio button selected
      resultElement.textContent = "Please enter a temperature and select a unit.";
    }
  }
