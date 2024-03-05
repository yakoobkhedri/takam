
// modal

let closeModal=Array.from(document.getElementsByClassName('close-button'));
let showNotif=document.querySelector('.showNotif');
let notificationModalBox=document.querySelector('.notification-modalBox');

showNotif.addEventListener('click',function () {
  notificationModalBox.classList.add('d-block');
  notificationModalBox.querySelector('.modal-container').classList.remove('active');
})

closeModal.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.parentElement.classList.add('active');
    item.parentElement.parentElement.parentElement.classList.remove('d-block')
  })
})
