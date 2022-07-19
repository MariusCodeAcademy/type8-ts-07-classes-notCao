import Calc from './class/Calc.js';
// nusitaikom
const num1InputEl = document.getElementById('n1') as HTMLInputElement | null;
const num2InputEl = document.getElementById('n2') as HTMLInputElement | null;
const caclulateEl = document.getElementById('caclulate') as HTMLButtonElement | null;
const resultEl = document.getElementById('result') as HTMLSpanElement | null;
const selectEl = document.getElementById('action') as HTMLSelectElement | null;

const calculator = new Calc(10, 50);
console.log('calculator ===', calculator);

console.log('calculator.add() ===', calculator.add());

caclulateEl?.addEventListener('mousedown', (): void => {
  console.log('lifes good');
  if (!num1InputEl || !num2InputEl || !selectEl || !resultEl) return;
  const num1: number = num1InputEl.valueAsNumber;
  const num2: number = num2InputEl.valueAsNumber;
  const selectedOperationValue: string = selectEl.value;
  const calculator = new Calc(num1, num2);

  switch (selectedOperationValue) {
    case 'add':
      const result: number = calculator[selectedOperationValue]();
      console.log('result ===', result);
      resultEl.textContent = result.toString();
      break;
    default:
      throw new Error('Invalid operation');
  }
});
