// const word = 'world'
// const teg = document.createElement('p');
// const wrapper = document.querySelector('.wrapper')
// teg.textContent = 'hello ${word}'
// wrapper.append(teg)


const ism = prompt('Ismingizni kiriting:');

const resultDiv = document.getElementById('result');
const paragraph = document.createElement('p');

if (ism) {
    paragraph.textContent = ` ${ism}!`;
    resultDiv.appendChild(paragraph);
} else {
    paragraph.textContent = 'Ism kiritilmadi.';
    resultDiv.appendChild(paragraph);
}



