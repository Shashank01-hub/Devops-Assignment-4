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

let counter = 0;
counter += 1;

let localValue = 10;
localValue = null;

counter += 1;

const total = [1, 2, 3].reduce((sum, value) => sum + value, 0);

return {
localValue,
counter,
total
};
}
