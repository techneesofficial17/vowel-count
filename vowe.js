const input = document.querySelector('#field');

const btn = document.querySelector('#submit');
const span = document.querySelector('#vowel');
const result = document.querySelector('.result');

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', () => {
        let text = input.value;

        if (text === '') {
            document.querySelector('h4').style.visibility = 'visible';
        } else {
            document.querySelector('h4').style.visibility = 'hidden';
            text = text.toLowerCase();
            result.style.visibility = 'visible';

            let num = 0;
            for (i = 0; i < text.length; i++) {
                if (text[i] === 'a') {
                    num++;
                } else if (text[i] === 'e') {
                    num++;
                } else if (text[i] === 'i') {
                    num++;
                } else if (text[i] === 'o') {
                    num++;
                } else if (text[i] === 'u') {
                    num++;
                }
            }
            input.select();
            document.execCommand('cut');
            span.textContent = num;
        }
    });
});