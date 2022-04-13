const menuBtn = document.querySelector('.menu-btn');
const navlinks =document.querySelector('.nav-links');
const clickText =document.querySelector('button')
const messAge =document.querySelector('.message')
const info1 = document.querySelector('info-data')


menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})


clickText.addEventListener('click',()=>{
    messAge.innerHTML = ' ';
})
messAge.innerHTML = 'This website stores cookies on your computer.These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy. If you decline, your information won`t be tracked when you visit this website. A single cookie will be usedin your browser to remember your preference not to be tracked.';


clickText.addEventListener('click',function(){
    document.querySelector('.msg').style.display='contents';
    document.querySelector('.footer-container').textContent=' ';
    // console.log(btnClick);
})
