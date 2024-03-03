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
const dropdownContent = Array.from(
  document.getElementsByClassName("dropdownContent")
);
const dropdownContent2 = Array.from(
  document.getElementsByClassName("dropdownContent2")
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
const openDropdown = Array.from(
  document.getElementsByClassName("openDropdown")
);
const dropdown = Array.from(document.getElementsByClassName("dropdown"));

dropdownBtn2.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.nextElementSibling.classList.toggle('active');
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

// modal

let closeModal=Array.from(document.getElementsByClassName('close-button'));

closeModal.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.parentElement.classList.add('active');
    item.parentElement.parentElement.parentElement.classList.remove('d-block')
  })
})

// datapicker

jalaliDatepicker.startWatch();
