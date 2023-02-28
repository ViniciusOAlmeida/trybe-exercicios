import { nanoid } from 'nanoid';
import './style.css';
import  copy  from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEL = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const radomPassword = nanoid();
  displayPasswordEL.innerHTML = radomPassword;
});

displayPasswordEL.addEventListener('click', (event)=>{
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});
