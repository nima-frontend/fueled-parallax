const Menu = document.querySelector('#menuBtn')
const hamLeft = document.querySelector('#ham_left')
const hamRight = document.querySelector('#ham_right')
const nav = document.querySelector('#nav_menu')
const Company = document.getElementById('company_section')
const Wire = document.getElementById('wire_section')
const Apple = document.getElementById('apple_section')
const Warby = document.getElementById('warby_section')
const Mgm = document.getElementById('mgm_section')
const RiteAid = document.getElementById('riteaid_section')
const CrunchBase = document.getElementById('crunchbase_section')
const WhiteHouse = document.getElementById('whitehouse_section')
const Secret = document.getElementById('secret_section')
const Press = document.getElementById('press_section')
const Invest = document.getElementById('invest_section')
const redPath = document.getElementById('secret_red')
const totalLength = redPath.getTotalLength();
const redBox = document.getElementById('red_box')
const scrollTrack = document.getElementById('track')
const Bar = document.getElementById('bar')
const mainText = document.querySelectorAll('.main_text')
const mainTextWrapper = document.querySelectorAll('.main_text_wrapper')
let state = 0;

//ham button
Menu.addEventListener('click',()=>{
    if(state === 0){
        Menu.classList.add('merge');
        setTimeout(()=>{
            Menu.classList.add('rotate');
        },100);
        setTimeout(() => {
            Menu.classList.add('split')
            state = 1;
        }, 300);
    }
    else{
        Menu.classList.remove('split');
        setTimeout(() => {
            Menu.classList.remove('rotate')
        }, 100);
        setTimeout(() => {
            Menu.classList.remove('merge');
            state = 0
        }, 300);
    }
    
    nav.classList.toggle('active')
})
//scroll based events
window.addEventListener('scroll',()=>{
    let st = window.scrollY
    // console.log(st)
    
 // section company
 if(st <= 200){
    showOnly(Company)
    colorTracker('#161616') 
    Bar.style.top = '-100%'
    let elevation = (-st)/25
    mainText[0].style.transform = 'translateY('+elevation+'px)'
}
//section Wire
 else if(st > 200 && st < 700){
    showOnly(Wire)
    colorTracker('#133091')
    Bar.style.top = ((st - 700)/5) + '%';
    let elevation =(200-st)/25;
    mainTextWrapper[1].classList.add('fade_in')
    mainText[1].style.transform = 'translateY('+elevation+'px)'
 } 
 //section Apple
 else if(st >=700 && st < 1200){
    showOnly(Apple)
    colorTracker('#f5f5f1')
    Bar.style.top = ((st - 1200)/5) + '%'
    let elevation =(700-st)/25;
    mainTextWrapper[2].classList.add('fade_in')
    mainText[2].style.transform = 'translateY('+elevation+'px)'
 }
 //section Warby
 else if(st >=1200 && st < 1700){
    showOnly(Warby)
    colorTracker('#45c6f9')
    Bar.style.top = ((st - 1700)/5) + '%'
    let elevation =(1200-st)/25;
    mainTextWrapper[3].classList.add('fade_in')
    mainText[3].style.transform = 'translateY('+elevation+'px)'
    mainText[4].style.transform = 'translateY('+elevation+'px)'
    mainText[5].style.transform = 'translateY('+elevation+'px)'

 }
 //section Mgm
 else if(st >=1700 && st < 2200){
    showOnly(Mgm)
    colorTracker('#4b2008')
    Bar.style.top = ((st - 2200)/5) + '%'
    let elevation =(1700-st)/25;
    mainTextWrapper[4].classList.add('fade_in')
    mainText[6].style.transform = 'translateY('+elevation+'px)'
 }
 //section RiteAid
 else if(st >=2200 && st < 2700){
    showOnly(RiteAid)
    colorTracker('#bc0f31')
    Bar.style.top = ((st - 2700)/5) + '%'
    let elevation =(2200-st)/25;
    mainTextWrapper[5].classList.add('fade_in')
    mainText[7].style.transform = 'translateY('+elevation+'px)' 
 }
 //section CrunchBase
 else if(st >=2700 && st < 3200){
    showOnly(CrunchBase)
    colorTracker('#485083')
    Bar.style.top = ((st - 3200)/5) + '%'
    let elevation =(2700-st)/25;
    mainTextWrapper[6].classList.add('fade_in')
    mainText[8].style.transform = 'translateY('+elevation+'px)'
 }
 //section whitehouse and press
 else if(st >=3200 && st < 6600){
    if(st < 4400){
    showOnly(WhiteHouse)
    colorTracker('#af161b')
    Bar.style.top = ((st - 4400)/12) + '%'
    let elevation =(3200-st)/30;
    mainTextWrapper[7].classList.add('fade_in')
    mainText[9].style.transform = 'translateY('+elevation+'px)'
    }else{
    showOnly(Press)
    colorTracker('white')
    Bar.style.top = ((st - 6600)/12) + '%'
    }
    //red box svg fill
    if(st > 4000 && st <= 5600){
        redBox.classList.add('visible_box')

    }else{
        redBox.classList.remove('visible_box')
        
    }
    if(st < 4000){
        redPath.style.strokeDashoffset = totalLength
    }else if(st > 5600){
        redPath.style.strokeDashoffset = 0
        let elevation =(5600-st)/40;
        mainTextWrapper[8].classList.add('fade_in')
        mainText[10].style.transform = 'translateY('+elevation+'px)'
    }else{
        const progress = (st - 4000) / 1600
        const offset = totalLength * (1 - progress)
        redPath.style.strokeDashoffset = offset
    }

 }
 //section invest
 else if(st >=6600 && st < 7200){
    showOnly(Invest)
    Bar.style.top = '-100%'
    Bar.style.top = ((st - 7200)/6) + '%'
    let elevation =(7200-st)/30;
    mainTextWrapper[9].classList.add('fade_in')
    mainText[11].style.transform = 'translateY('+elevation+'px)'
 }
 else{
    Bar.style.top = '0%'  
 }
})

//adding visibility to each section
function showOnly(visibleSection){
    [Company,Wire,Apple,Warby,Mgm,RiteAid,CrunchBase,WhiteHouse,Press,Invest].forEach(section =>{
        if(section === visibleSection){
            section.classList.add('scroll_visible')
        }else{
            section.classList.remove('scroll_visible')
        }
    })
}
//changing the opacity of custom scroll
function colorTracker(color){
    scrollTrack.style.backgroundColor = ''
    scrollTrack.style.backgroundColor = color
    if(color === 'white' || '#4b2008'){
        scrollTrack.style.opacity = '0.5'
    }else{
        scrollTrack.style.opacity = '1'
    }
}