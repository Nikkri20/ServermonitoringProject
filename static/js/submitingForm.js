const popup = document.querySelector('.popup');
const buttonOpen = document.querySelector('.button-add');
const buttonClose = document.querySelector('.close-popup');
const form = document.querySelector('#integration-form')
buttonOpen.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.remove('hidden');
    const statusElem = document.querySelector('.vote-status');
    const content = new FormData(form);
    
    createReq(content, statusElem);
} );
buttonClose.addEventListener('click', () => {
    popup.classList.add('hidden');
}); 

function createReq(formContent,elem) {
  fetch(form.action, {
    method: "POST",
    body: formContent
}).then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
}).then((data) => {
    elem.innerHTML = `Сервер успешно добавлен! ${data}`;
}).catch(function (error) {
    elem.innerHTML = 'Произошла ошибка, введите корректный url!';
});
};