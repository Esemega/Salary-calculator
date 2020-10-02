//initial data
const employee = {
  gross: 14500,
  children: 2,
  payments: 14,
};

// -------- calculate Annual Take home salary -----
//get withholdingsPercentage
let withholdingsPercentage;

if (employee.gross >= 34000) withholdingsPercentage = 0.3;
else if (employee.gross >= 24000) withholdingsPercentage = 0.16;
else if (employee.gross >= 12000) withholdingsPercentage = 0.08;
else withholdingsPercentage = 0;

//calculate withholdings if children
if (employee.children > 0 && withholdingsPercentage != 0)
  withholdingsPercentage = withholdingsPercentage - 0.02;

//calculate taxes
const withholdings = employee.gross * withholdingsPercentage;

//calculate annual salary
const annualTakeHome = employee.gross - withholdings;

// -------- Calculate Monthly Take home salary  -----
const monthlyTakeHome =
  employee.payments === 14
    ? annualTakeHome / employee.payments
    : annualTakeHome / 12;

//show results
console.log(`Los datos iniciales son:
Salario bruto: ${employee.gross},
Hijos: ${employee.children},
Pagos: ${employee.payments}`);
console.log("Retenciones: ", withholdings + "€");
console.log("Salario neto anual:", annualTakeHome + "€");
console.log("Salario neto mensual:", monthlyTakeHome + "€");
