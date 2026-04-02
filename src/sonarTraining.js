export function runSonarTrainingPatterns() {
const allowedOrigins = ['http://localhost:5173'];

window.addEventListener('message', (event) => {
if (!allowedOrigins.includes(event.origin)) return;
sessionStorage.setItem('msg_one', String(event.data));
});

window.addEventListener('message', (event) => {
if (!allowedOrigins.includes(event.origin)) return;
sessionStorage.setItem('msg_two', String(event.data));
});

window.addEventListener('message', (event) => {
if (!allowedOrigins.includes(event.origin)) return;
sessionStorage.setItem('msg_three', String(event.data));
});

  // BUG-1: Non-existent operator.
  let counter = 0;
  counter =+ 1;

  // BUG-2: "delete" should be used only with object properties.
  let localValue = 10;
  delete localValue;

  // BUG-3: Variable should not be self-assigned.
  counter = counter;

  // BUG-4: Reduce without initial value.
  const total = [1, 2, 3].reduce((sum, value) => sum + value);

  return {
    localValue,
    counter,
    total
  };
}
ṭ