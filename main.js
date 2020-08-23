let imageHover = document.getElementById('image');
imageHover.onmouseover = function(){
  imageHover.classList.toggle('hover');
}

let nameHeader = document.getElementById('nameHeader');
nameHeader.onclick = function(){
  nameHeader.classList.toggle('fade');
}

let cellPhone = document.getElementById('phone');
cellPhone.onmouseover = function(){
  let phoneNumber = document.getElementById('cell')
  phoneNumber.classList.toggle('show');
}