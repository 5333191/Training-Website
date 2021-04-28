
//Code to handle inputs and outputs
let input = document.querySelector("#link");
let button = document.querySelector("#gerar");
let img = document.querySelector("#qr");
let imgIcon= document.querySelector("#imagescan");
let imgQr = document.querySelector('#qr-solo');
let sentence = document.querySelector("p");

let inputText= document.querySelector("#description");

////////
button.addEventListener("click",function(){


    let data = input.value;
    let data2 = inputText.value;
    sentence.textContent=data2;

  



/////
const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))


toDataURL(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`)
  .then(dataUrl => {
    console.log('RESULT:', dataUrl)
    if(data.length > 0){
        
        imgIcon.setAttribute(
            'src', `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QCaRXhpZgAASUkqAAgAAAABAA4BAgB4AAAAGgAAAAAAAABzY2FubmluZyBxciBjb2RlIHBob25lIGFwcCBsaW5lIGljb24gdmVjdG9yLiBzY2FubmluZyBxciBjb2RlIHBob25lIGFwcCBzaWduLiBpc29sYXRlZCBjb250b3VyIHN5bWJvbCBibGFjayBpbGx1c3RyYXRpb27/4QWZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyNzE1NzIwNzkiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPnZlY3RvcndpbjwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+c2Nhbm5pbmcgcXIgY29kZSBwaG9uZSBhcHAgbGluZSBpY29uIHZlY3Rvci4gc2Nhbm5pbmcgcXIgY29kZSBwaG9uZSBhcHAgc2lnbi4gaXNvbGF0ZWQgY29udG91ciBzeW1ib2wgYmxhY2sgaWxsdXN0cmF0aW9uPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9waG90by9saWNlbnNlLWdtMTI3MTU3MjA3OS0/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4K/+0AxFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAACoHAJQAAl2ZWN0b3J3aW4cAngAeHNjYW5uaW5nIHFyIGNvZGUgcGhvbmUgYXBwIGxpbmUgaWNvbiB2ZWN0b3IuIHNjYW5uaW5nIHFyIGNvZGUgcGhvbmUgYXBwIHNpZ24uIGlzb2xhdGVkIGNvbnRvdXIgc3ltYm9sIGJsYWNrIGlsbHVzdHJhdGlvbhwCbgAYR2V0dHkgSW1hZ2VzL2lT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`
        );
    
        img.setAttribute(
            'src', `${dataUrl}`
        );
    
        imgQr.setAttribute(
          'src', `${dataUrl}`
      );
  
      }
  })

 
})


