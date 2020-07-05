let myStatus = document.querySelector(".status");
let Notification = document.querySelector('.notif')
function hasNetwork(online) {
  animation(online,OnOff)
}

function test() {
  hasNetwork(navigator.onLine);
  myStatus.style.color = 'white';
  setTimeout(()=>{
    Notification.style.display = 'flex';
  },100)
  setTimeout(()=>{
    Notification.style.opacity = 1;
  },200)
  setTimeout(()=>{
    Notification.style.opacity = 0;
  },3000)
  window.addEventListener("online", () => {
    hasNetwork(true);
  });

  window.addEventListener("offline", () => {
    hasNetwork(false);
  });
}

function OnOff(status) {
  setTimeout(()=>{
    if(status){
      Notification.classList.remove("offline");
      Notification.classList.add("online");
      myStatus.innerHTML = "You are <a class='on'>Online</a>";
    }else {
      Notification.classList.remove("online");
      Notification.classList.add("offline");
      myStatus.innerHTML = "You are <a class='off'>Offline</a>";
    }
  },800 + 1300)
  setTimeout(()=>{
    Notification.style.display = 'none'
  },3200)
}
document.querySelector('.signal').innerHTML = `
  <svg id="Capa_1" enable-background="new 0 0 512.017 512.017" height="512" viewBox="0 0 512.017 512.017" width="512" xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle class="layer-0" cx="256.016" cy="408.025" r="40"/>
    <path class="layer-1" d="m392.535 294.481c4.612 4.655 5.717 11.835 2.558 17.577-10.857 19.734-38.045 28.478-58.577 13.267-47.92-35.53-113.62-35.13-161 0-20.504 15.191-47.712 6.483-58.576-13.264-3.159-5.742-2.057-12.924 2.557-17.579 75.17-75.857 197.785-75.947 273.038-.001z"/>
    <path class="layer-2" d="m412.007 271.938c-87.621-86.099-225.589-84.832-311.98-.001-3.754 3.686-9.139 5.211-14.237 3.913-15.803-4.022-27.688-17.549-29.194-33.904-.414-4.49 1.247-8.933 4.476-12.081 108.616-105.9 281.399-105.772 389.888-.001 3.228 3.147 4.89 7.59 4.476 12.079-1.508 16.333-13.368 29.879-29.188 33.906-5.1 1.299-10.488-.223-14.241-3.911z"/>
    <path class="layer-3"  d="m500.516 209.895c-1.303 1.288-2.649 2.466-4.029 3.539-5.931 4.611-14.424 3.957-19.7-1.391-121.447-123.095-319.979-123.15-441.597.061-5.411 5.482-14.128 5.948-20.096 1.078-.971-.793-1.912-1.638-2.818-2.536-17.87-17.63-15.16-43.48 1.22-57.46 139.3-118.9 345.68-118.95 485.04 0 17.2 14.679 18.03 40.809 1.98 56.709z"/>
    
  </g>
  </svg>`;

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

async function animation(network,callback){
  let i = document.querySelectorAll('[class*="layer"]')
  myStatus.innerHTML = "Checking Connection . . .";
  i.forEach((e,y)=>{
    setTimeout(()=> {
      e.style.fill = 'white'
    },800 + y*300)
  })
  if(network){
    setTimeout(()=> {
      i.forEach(e => {
        e.style.fill = 'var(--signal-on)'
      })
    },800 + 1250)
  }else {
    setTimeout(()=> {
      i.forEach(e => {
        e.style.fill = 'var(--signal-off)'
      })
    },800 + 1250)
  }
  callback(network)
}

