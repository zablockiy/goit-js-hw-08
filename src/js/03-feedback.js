import throttle from 'throttleit';

const inputDataForm = document.querySelector('.feedback-form');
inputDataForm.addEventListener('input', throttle(onInputData, 500));
inputDataForm.addEventListener('submit', formSubmit);

const KEY_DATA = 'feedback-form-state';
const data = {};
savedFormData();
function onInputData(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY_DATA, JSON.stringify(data));
  
}
function savedFormData() {
  const saveData = JSON.parse(localStorage.getItem(KEY_DATA));
  if (saveData) {
    const inputEl = inputDataForm.querySelector('input');
    const textareaEl = inputDataForm.querySelector('textarea');
    inputEl.value = saveData.email ? saveData.email : '';
    
    textareaEl.value = saveData.message ? saveData.message : '';
    data.email = saveData.email;
    data.message = saveData.message;
  }
}

function formSubmit(event) {
  event.preventDefault();
  if (data.email && data.message) {
    data.email = '';
    data.message = '';
    event.currentTarget.reset();
    localStorage.removeItem(KEY_DATA);
  }
}
