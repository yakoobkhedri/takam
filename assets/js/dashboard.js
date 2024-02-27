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
let dropdownContent=Array.from(document.getElementsByClassName('dropdownContent'));
let showFish=Array.from(document.getElementsByClassName('showFish'));
let addTask=Array.from(document.getElementsByClassName('addTask'));
let tabs=Array.from(document.getElementsByClassName('tab'));
let tab2=Array.from(document.getElementsByClassName('tab2'));
let tab3=Array.from(document.getElementsByClassName('tab3'));
let tab4=Array.from(document.getElementsByClassName('tab4'));
let tab5=Array.from(document.getElementsByClassName('tab5'));
let tab6=Array.from(document.getElementsByClassName('tab6'));
let tabContent=Array.from(document.getElementsByClassName('tab-content'));
let tabContent2=Array.from(document.getElementsByClassName('tab-content2'));
let tabContent4=Array.from(document.getElementsByClassName('tab-content4'));
let tabContent5=Array.from(document.getElementsByClassName('tab-content5'));
let tabContent6=Array.from(document.getElementsByClassName('tab-content6'));
let openDropdown=Array.from(document.getElementsByClassName('openDropdown'));
let dropdown=Array.from(document.getElementsByClassName('dropdown'));

addTask.forEach((item)=>{
  item.addEventListener('click',function () {
    item.classList.toggle('active');
    item.parentElement.parentElement.nextElementSibling.classList.toggle('active');
  })
})

showFish.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
    item.classList.toggle('active');
  })
})

dropdownBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    dropdownBtn.forEach((item2)=>{
      item2.querySelectorAll('svg:last-child').forEach((allsvg)=>{
        allsvg.classList.remove('active')
      })
    });
    dropdownContent.forEach((items)=>{
      items.classList.remove('active');
    });
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg:last-child').classList.add('active');
  })
})

openDropdown.forEach((tab) => {
  tab.addEventListener('click', function() {
    tabs.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      dropdown.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
      })
  })
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

tab4.forEach((tab) => {
  tab.addEventListener('click', function() {
    tab4.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      tabContent4.forEach((content) => {
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
tab5.forEach((tab) => {
  tab.addEventListener('click', function() {
    tab5.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      tabContent5.forEach((content) => {
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

tab6.forEach((tab) => {
  tab.addEventListener('click', function() {
    tab6.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      tabContent6.forEach((content) => {
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

// datapicker

jalaliDatepicker.startWatch();