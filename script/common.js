//  gnb

const header = document.querySelector('header');
const gnb = document.querySelector('nav.gnb');


gnb.addEventListener('mouseenter', function(){
    header.classList.add('gnb_on');
});

gnb.addEventListener('mouseleave', function(){
    header.classList.remove('gnb_on');
});

//  mobile gnb

const mobile_menu = document.querySelector('.mobile_menu');
const m_gnb = document.querySelector('.m_gnb');
const body = document.querySelector('body');

const m_gnb_depth1 = document.querySelectorAll('.m_gnb .depth1 li');


mobile_menu.addEventListener('click', function(e){
    e.preventDefault();
    mobile_menu.classList.toggle('active');
    m_gnb.classList.toggle('active');
    body.classList.toggle('menu_active');
});

m_gnb_depth1.forEach(function(e, i){
    e.addEventListener('click', function(e){  
        this.classList.toggle('on');
    });
});


//  family site

let family_site = document.querySelector('#familysite');

family_site.addEventListener('change', function(){
    if(this.value != 'none'){
        window.open(this.value, '_blank');
    }else{
        return;
    }
});

