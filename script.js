const menubar = document.getElementById('fa-bars');
const closeButton = document.getElementById('close-button');
const navigation = document.getElementById('navigation');

  menubar.addEventListener('click', () => {
    navigation.style.display = 'block';
    menubar.style.display='none';
    closeButton.style.display='block';
  });

  closeButton.addEventListener('click', () => {
    navigation.style.display = 'none';
    menubar.style.display='block';
    closeButton.style.display='none';
  });

const playlist=document.getElementById('play-list');
const musifylist=document.getElementById('musify-playlists');
const search=document.getElementById('search');
const rightBtn=document.getElementById('rightNextBtn');
const leftBtn=document.getElementById('leftNextBtn');
const searchBar=document.getElementById('search-bar');


search.addEventListener('click', () => {
    playlist.style.display='block';
    musifylist.style.display='none';
    searchBar.style.display='inline-block';
    leftBtn.style.backgroundColor='gray';
    leftBtn.style.color='white';
  });

rightBtn.addEventListener('click', () => {
    playlist.style.display='block';
    musifylist.style.display='none';
    searchBar.style.display='inline-block';
    leftBtn.style.backgroundColor='gray';
    leftBtn.style.color='white';
  });

leftBtn.addEventListener('click', () => {
    playlist.style.display='none';
    musifylist.style.display='block';
    searchBar.style.display='none';
    rightBtn.style.backgroundColor='gray';
    rightBtn.style.color='white';
  });




