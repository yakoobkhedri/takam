// sidebar menu

let hamIcon=document.getElementById('hamIcon');

hamIcon.addEventListener('click',function () {
  document.querySelector('aside').classList.add('active');
  document.querySelector('#overlay').classList.add('active');
  document.querySelector('#overlay').addEventListener('click',function () {
    document.querySelector('aside').classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
  })
})

// dropdown menu

let dropdownBtn=Array.from(document.getElementsByClassName('dropdownBtn'));
let tabs=Array.from(document.getElementsByClassName('tab'));
let tab2=Array.from(document.getElementsByClassName('tab2'));
let tab3=Array.from(document.getElementsByClassName('tab3'));
let tabContent=Array.from(document.getElementsByClassName('tab-content'));
let tabContent2=Array.from(document.getElementsByClassName('tab-content2'));
let openDropdown=document.getElementById('openDropdown');
let dropdown=document.getElementById('dropdown');

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active')
  })
})

openDropdown.addEventListener('click',function () {
  dropdown.classList.toggle('active');
})
tab2.forEach((tab) => {
  tab.addEventListener('click', function() {
    dropdown.classList.remove('active');
  })
})

tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    tabs.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      tabContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('d-none');
              content.classList.add('d-block');
          } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
          }
      })
  })
})

tab3.forEach((tab) => {
  tab.addEventListener('click', function() {
    tab3.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      tabContent2.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('d-none');
              content.classList.add('d-block');
          } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
          }
      })
  })
})