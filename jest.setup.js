import '@testing-library/jest-dom';


// Suprimir o aviso específico
const originalError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: ReactDOMTestUtils.act is deprecated')
  ) {
    return;
  }
  originalError.call(console, ...args);
};