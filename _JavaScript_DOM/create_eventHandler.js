let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

const showInfo = () =>{
    moreInfo.style.display='block';
}

showInfo.addEventListener('click',showInfo)
readMore.addEventListener('click', showInfo)
