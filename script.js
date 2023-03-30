const p = document.querySelector('.info-title');
const heading = document.querySelector('.info-content');
const button = document.querySelector('button');
const image = document.querySelector('.profile-image');
const wrapperDiv = document.querySelector('.icons')
button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => diplayUser(data.results[0]))

})
function diplayUser(user){ 
                image.src = user.picture.large;
                heading.innerHTML = user.name.first;
                let content = `<div class='name active icon' data-title="Hi, my name is" data-value="${user.name.first}">
                            <img src="https://img.icons8.com/ios/50/000000/user--v1.png"/>
                    </div>
                    <div class='email icon' data-title="Hi, my email is" data-value="${user.email}">
                            <img src="https://img.icons8.com/ios/50/000000/email-open.png"/>
                    </div>
                    <div class='date icon' data-title="Hi, my date of birth is" data-value="${user.dob.date}">
                        <img src="https://img.icons8.com/ios/50/000000/calendar--v1.png"/>
                    </div>
                    <div class='address icon' data-title="Hi, my address is" data-value="${user.location.city}">
                        <img src="https://img.icons8.com/ios/50/000000/map-marker--v1.png"/>
                    </div>
                    <div class='phone icon' data-title="Hi, my phone is" data-value="${user.phone}">
                        <img src="https://img.icons8.com/ios/50/000000/phone.png"/>
                    </div>
                    <div class='password icon' data-title="Hi, my password is" data-value="${user.login.password}">
                        <img src="https://img.icons8.com/ios/50/000000/password-window.png"/>
                    </div>`
                    wrapperDiv.innerHTML = content;
                    let container = document.querySelector('.container')
                    if(user.gender ==='female'){
                        
                        container.style.background = ' linear-gradient(to bottom,  hsl(91, 80%, 57%) 50%, #343d46 50%)'
                    } else {
                        container.style.background = ' linear-gradient(to bottom, #82b0df 50%,#343d46 50%)'
                    }
                    const divList = document.querySelectorAll('.icon');
                    divList.forEach((el) => {
                        el.addEventListener('click', () => {
                             // const div = event.target.parentElement.classList[0];
                             // p.innerHTML = `My ${div} is...`
                             let text = el.getAttribute('data-title');
                             let text2 = el.getAttribute('data-value');
                             p.innerHTML = text;
                             heading.innerHTML = text2;
                             divList.forEach(el => el.classList.remove('active'))
                             el.classList.add('active')
                        })
                    })
}

// divList.forEach((el) => {
//    el.addEventListener('click', () => {
//         // const div = event.target.parentElement.classList[0];
//         // p.innerHTML = `My ${div} is...`
//         let text = el.getAttribute('data-title');
//         let text2 = el.getAttribute('data-value');
//         p.innerHTML = text;
//         heading.innerHTML = text2;
//         divList.forEach(el => el.classList.remove('active'))
//         el.classList.add('active')
//    })
    
    
    //on click, change paragraphs content based on current icon
    //chnage active class
// })