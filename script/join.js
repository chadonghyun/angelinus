//  모달 관련 변수
let clause_btn = document.querySelectorAll('.clause_btn');
let modal = document.querySelectorAll('.modal');
let close_btn = document.querySelectorAll('.close_btn');


//  약관 모달 열기
clause_btn.forEach(function(e, i){
    e.addEventListener('click', function(){
        modal[i].classList.add('on');
    });
});


// 모달 닫기
for(let i = 0; i < close_btn.length; i++){
    close_btn[i].addEventListener('click', function(e){
        e.preventDefault();
        close_btn[i].parentElement.parentElement.classList.remove('on');
    });
}


//  약관 동의 체크 변수
let check_all = document.querySelector('#agreement_btn_all');
let checkbox = document.querySelectorAll('.checkbox');
let agree_btn = document.querySelectorAll('.agree_btn');


// 약관 동의 전체체크
check_all.addEventListener('click', function(){
    if(check_all.checked == 1){
        checkbox.forEach(function(e){
            e.checked = 1;
        });
    }else{
        checkbox.forEach(function(e){
            e.checked = 0;
        });
    }
});

// 약관 체크 해제 => 전체 체크 버튼 해제
checkbox.forEach(function(e){
    e.addEventListener('click', function(){
        if(e.checked == 0){
            check_all.checked = 0;
        };
    });
});

// 모달 약관동의버튼 클릭 이벤트 => 해당 약관 체크
agree_btn.forEach(function(e, i){
    e.addEventListener('click', function(e){
        e.preventDefault();
        checkbox[i].checked = 1;
        modal[i].classList.remove('on');
    });
});




//  form 부분

let join_btn = document.querySelector('#join_btn');

// 아이디 변수, 함수
let input_id = document.querySelector('#input_id');
let input_alert_id = document.querySelector('.input_alert_id');

function alert_id(){
    if(input_id.value == ''){
        input_alert_id.classList.add('on');
        input_alert_id.innerHTML = `*아이디를 입력해주세요`;
    }else{
        input_alert_id.classList.remove('on');
    }
}

// 비밀번호 변수, 함수
let input_password = document.querySelector('#input_password');
let input_alert_pw = document.querySelector('.input_alert_pw');

function alert_pw(){
    if(input_password.value == ''){
        input_alert_pw.classList.add('on');
        input_alert_pw.innerHTML = `*비밀번호를 입력해주세요`;
    }else{
        input_alert_pw.classList.remove('on');
    }
}

// 비밀번호 재입력 변수, 함수
let input_password_re = document.querySelector('#input_password_re');
let input_alert_pw_re = document.querySelector('.input_alert_pw_re');

function alert_pw_re(){
    if(input_password_re.value == ''){
        input_alert_pw_re.classList.add('on');
        input_alert_pw_re.innerHTML = `*비밀번호를 다시 입력해주세요`;
    }else if(input_password.value != input_password_re.value){
        input_alert_pw_re.classList.add('on');
        input_alert_pw_re.innerHTML = `*입력한 비밀번호와 다릅니다.`;
    }else{
        input_alert_pw_re.classList.remove('on');
    }
}

// 이름 변수, 함수
let input_name = document.querySelector('#input_name');
let input_alert_name = document.querySelector('.input_alert_name');

function alert_name(){
    if(input_name.value == ''){
        input_alert_name.classList.add('on');
        input_alert_name.innerHTML = `*이름을 입력해주세요`;
    }else{
        input_alert_name.classList.remove('on');
    }
}

//  휴대폰 번호 변수, 함수
let input_phone = document.querySelector('#input_phone');
let input_alert_phone = document.querySelector('.input_alert_phone');

function alert_phone(){
    if(input_phone.value == ''){
        input_alert_phone.classList.add('on');
        input_alert_phone.innerHTML = `*휴대폰 번호를 입력해주세요`;
    }else{
        input_alert_phone.classList.remove('on');
    }
}

//  이메일 변수, 함수
let email_id = document.querySelector('#email_id');
let email_domain = document.querySelector('#email_domain');
let input_alert_email = document.querySelector('.input_alert_email');

function alert_email(){
    if((email_id.value == '') || (email_domain.value == '')){
        input_alert_email.classList.add('on');
        input_alert_email.innerHTML = `*이메일을 입력해주세요`;
    }else{
        input_alert_email.classList.remove('on');
    }
}

// 약관 동의 변수, 함수
let agreement_01 = document.querySelector('#agreement_01');
let agreement_02 = document.querySelector('#agreement_02');
let input_alert_agree = document.querySelector('.input_alert_agree');

function alert_agreement(){
    if((agreement_01.checked == 0) || (agreement_02.checked == 0)){
        input_alert_agree.classList.add('on');
        input_alert_agree.innerHTML = `*필수약관에 동의해주세요`;
    }else{
        input_alert_agree.classList.remove('on');
    }
}


// submit 버튼 클릭시
join_btn.addEventListener('click', function(){

    // 아이디
    alert_id();

    // 비밀번호
    alert_pw();

    // 비밀번호 재입력
    alert_pw_re();

    // 이름
    alert_name();

    // 휴대폰
    alert_phone();

    // 이메일
    alert_email();

    // 약관동의
    alert_agreement();

});



// change 이벤트

// 아이디
input_id.addEventListener('change', function(){
    alert_id();
});
input_id.addEventListener('blur', function(){
    alert_id();
});

// 비밀번호
input_password.addEventListener('change', function(){
    alert_pw();
});
input_password.addEventListener('blur', function(){
    alert_pw();
});

// 비밀번호 재입력
input_password_re.addEventListener('change', function(){
    alert_pw_re();
});
input_password_re.addEventListener('blur', function(){
    alert_pw_re();
});

// 이름
input_name.addEventListener('change', function(){
    alert_name();
});
input_name.addEventListener('blur', function(){
    alert_name();
});

// 휴대폰
input_phone.addEventListener('change', function(){
    alert_phone();
});
input_phone.addEventListener('blur', function(){
    alert_phone();
});

// 이메일
email_id.addEventListener('change', function(){
    alert_email();
});
email_id.addEventListener('blur', function(){
    alert_email();
});
email_domain.addEventListener('change', function(){
    alert_email();
});
email_domain.addEventListener('blur', function(){
    alert_email();
});

// 약관동의
agreement_01.addEventListener('change', function(){
    alert_agreement();
});
agreement_01.addEventListener('blur', function(){
    alert_agreement();
});
agreement_02.addEventListener('change', function(){
    alert_agreement();
});
agreement_02.addEventListener('blur', function(){
    alert_agreement();
});
