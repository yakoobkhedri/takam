// show partner list

let showPartnerContent=Array.from(document.getElementsByClassName('showPartnerContent'));
let showPartnerContent2=Array.from(document.getElementsByClassName('showPartnerContent2'));
let showPartnerContent3=Array.from(document.getElementsByClassName('showPartnerContent3'));
let hidePartnerContent=Array.from(document.getElementsByClassName('hidePartnerContent'));
let hidePartnerContent2=Array.from(document.getElementsByClassName('hidePartnerContent2'));
let hidePartnerContent3=Array.from(document.getElementsByClassName('hidePartnerContent3'));

showPartnerContent.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent').classList.add('active');
  })
})

hidePartnerContent.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent').classList.remove('active');
  })
})

showPartnerContent2.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent2').classList.add('active');
  })
})
showPartnerContent3.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent3').classList.add('active');
  })
})
hidePartnerContent2.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent2').classList.remove('active');
  })
})
hidePartnerContent3.forEach((item)=>{
  item.addEventListener('click',function () {
    document.querySelector('.partnerContent3').classList.remove('active');
  })
})
// sidebar menu

let hamIcon = document.getElementById("hamIcon");

hamIcon.addEventListener("click", function () {
  document.querySelector("aside").classList.add("active");
  document.querySelector("#overlay").classList.add("active");
  document.querySelector("#overlay").addEventListener("click", function () {
    document.querySelector("aside").classList.remove("active");
    document.querySelector("#overlay").classList.remove("active");
  });
});

// dropdown menu

const dropdownBtn = Array.from(document.getElementsByClassName("dropdownBtn"));
const dropdownBtn2 = Array.from(document.getElementsByClassName("dropdownBtn2"));
const dropdownBtn3 = Array.from(document.getElementsByClassName("dropdownBtn3"));
const dropdownBtn4 = Array.from(document.getElementsByClassName("dropdownBtn4"));
const dropdownBtnSelect = Array.from(document.getElementsByClassName("dropdownBtnselect"));
const dropdownContent = Array.from(
  document.getElementsByClassName("dropdownContent")
);
const dropdownContent2 = Array.from(
  document.getElementsByClassName("dropdownContent2")
);
const dropdownContent3 = Array.from(
  document.getElementsByClassName("dropdownContent3")
);
const dropdownContentSelect = Array.from(
  document.getElementsByClassName("dropdownContentselect")
);
const showFish = Array.from(document.getElementsByClassName("showFish"));
const addTask = Array.from(document.getElementsByClassName("addTask"));
const tabs = Array.from(document.getElementsByClassName("tab"));
const tab2 = Array.from(document.getElementsByClassName("tab2"));
const tab3 = Array.from(document.getElementsByClassName("tab3"));
const tab4 = Array.from(document.getElementsByClassName("tab4"));
const tab5 = Array.from(document.getElementsByClassName("tab5"));
const tab6 = Array.from(document.getElementsByClassName("tab6"));
const tabContent = Array.from(document.getElementsByClassName("tab-content"));
const tabContent2 = Array.from(document.getElementsByClassName("tab-content2"));
const tabContent4 = Array.from(document.getElementsByClassName("tab-content4"));
const tabContent5 = Array.from(document.getElementsByClassName("tab-content5"));
const tabContent6 = Array.from(document.getElementsByClassName("tab-content6"));
const select1 = Array.from(document.getElementsByClassName("select1"));
const dropdownContentselect = Array.from(document.getElementsByClassName("dropdownContentselect"));
const select2=Array.from(document.querySelectorAll('.select2 a'));
const select3=Array.from(document.querySelectorAll('.select3 p'));
const openDropdown = Array.from(
  document.getElementsByClassName("openDropdown")
);
const dropdown = Array.from(document.getElementsByClassName("dropdown"));

select3.forEach((item)=>{
  item.addEventListener('click',function () {
    let itemText=item.textContent;
    item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').textContent=itemText;
    item.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
   })
})
select1.forEach((item)=>{
  item.addEventListener('click',function () {
    let itemText=item.querySelector('p').textContent;
    item.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').textContent=itemText;
  })
})

select2.forEach((item)=>{
  item.addEventListener('click',function () {
    let itemText=item.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').textContent;
    item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector('p').textContent=itemText;
    item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
  })
})
dropdownBtnSelect.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdownContentselect')&& !event.target.closest('.dropdownArea')) {
    dropdownContentselect.forEach((item)=>{
        item.classList.remove('active');
    })
  }
})
dropdownBtn4.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
  })
})

dropdownBtn2.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.nextElementSibling.classList.toggle('active');
  })
})
dropdownBtn3.forEach((item)=>{
  item.addEventListener('click',function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg:last-child').classList.toggle('active');
  })
})
addTask.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    item.parentElement.parentElement.nextElementSibling.classList.toggle(
      "active"
    );
  });
});

showFish.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement.parentElement.querySelector('.fishContent').classList.toggle("active");
    item.classList.toggle("active");
  });
});

dropdownBtn.forEach((item) => {
  item.addEventListener("click", function (e) {
    dropdownBtn.forEach((items) => {
      let itemClicked = false
      if (e.target === items ||
        e.target === items.children[0] ||
        e.target === items.children[1] ||
        e.target === items.children[2]
        )
        itemClicked = true
      if (!itemClicked) items.parentElement.classList.remove("active");
    });
    item.parentElement.classList.toggle("active");
  });
});

openDropdown.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    dropdown.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  });
});
tab2.forEach((tab) => {
  tab.addEventListener("click", function () {
    dropdown.classList.remove("active");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    tabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove("d-none");
        content.classList.add("d-block");
      } else {
        content.classList.add("d-none");
        content.classList.remove("d-block");
      }
    });
  });
});

tab3.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab3.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    tabContent2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove("d-none");
        content.classList.add("d-block");
      } else {
        content.classList.add("d-none");
        content.classList.remove("d-block");
      }
    });
  });
});

tab4.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab4.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    tabContent4.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove("d-none");
        content.classList.add("d-block");
      } else {
        content.classList.add("d-none");
        content.classList.remove("d-block");
      }
    });
  });
});
tab5.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab5.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    tabContent5.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove("d-none");
        content.classList.add("d-block");
      } else {
        content.classList.add("d-none");
        content.classList.remove("d-block");
      }
    });
  });
});

tab6.forEach((tab) => {
  tab.addEventListener("click", function () {
    tab6.forEach((tabs) => {
      tabs.classList.remove("active");
    });
    tab.classList.add("active");
    let tabId = tab.dataset.id;
    tabContent6.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove("d-none");
        content.classList.add("d-block");
      } else {
        content.classList.add("d-none");
        content.classList.remove("d-block");
      }
    });
  });
});

// datapicker

jalaliDatepicker.startWatch();

