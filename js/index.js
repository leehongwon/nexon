// =======사이드바
$(document).ready(function(){
    $('.head .inner1 .gnb-left .menu').click(function(e){
        e.preventDefault(e);
        $('.layer').addClass('layer-active')
        $('.sidebar').addClass('sidebar-open')

    })
    $('.sideBt').click(function(){
        $('.layer').removeClass('layer-active')
        $('.sidebar').removeClass('sidebar-open')
    })

})


// ========= 메인배너
$(document).ready(function () {
    slider();
})

function slider(){
    var titArray = ['<i>테일즈위버</i><br>로그 호라이즌 콜라보 넥슨플레이 이벤트', '<i>메이플스토리</i><br>메이플스토리M 크리에이터즈 워밍업 시즌 오픈','<i>메이플스토리 월드</i><br>월드 메이플스토리 월드에 삼성전자 제휴 월드 오픈!','<i>그랜드체이스 클래식</i><br>클래식 신규 캐릭터 아이(AI) 사전 등록 이벤트','<i>바람의나라</i><br>바람의나라 파트너 크리에이터 발표' ]; //슬라이드 타이틀
    $('.slider .slide_tit > li > a').each(function(index, item){
        var txt = $(this).text();
        titArray.push(txt);
        titArray.unshift(txt);

    }).promise().done(function() {
        //슬라이드 전체 페이지 번호
        var num = $(".slider .num");
        var slides = $(".slider .swiper-slide");
        var slideCount = slides.length;
        num.html(`<strong>1</strong> / ${slideCount}`);

        //슬라이드 시작
        var swiper = new Swiper('.slider', {
            loop: true,
            slidesPerView: 1,        
            autoplay: {
                delay: 5000,//CSS animation과 시간 동일하게
                disableOnInteraction: false
            }, 
            effect: 'fade',
            speed: 800,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.slider .btn_next',
                prevEl: '.slider .btn_prev',
            },
            //pagination 텍스트 & progress bar 형태로 변경
            pagination: {
                el: '.slider .slide_tit',
                clickable: 'true',
                type: 'bullets',
                renderBullet: (index, className) => {
                    return `<li class=${className}><span class="bar"></span><span class="txt">${titArray[index]}</span></li>`;
                },
            },
            //현재 페이지 번호 갱신
            on: {
                slideChange: () => {
                    num.html(`<strong>${swiper.realIndex + 1}</strong> / ${slideCount}`);
                }
            }
        })
    });
}











// ========상단tabmenu
$(function(){
    const tabtype = $('.view-nav li')
    
    tabtype.click(function(e){
        e.preventDefault();
        tabtype.find('a').removeClass('on')
        $(this).find('a').addClass('on')

        $('.tabitem').hide();
        let idx = $(this).index();
        $('.tabitem').eq(idx).show();
    })
    tabtype.eq(0).trigger('click')
})






// ========하단tabmenu
$(function(){
    const tabtitle = $('.game-nav li a')

    tabtitle.click(function(e){
        e.preventDefault();
        tabtitle.removeClass('active')
        $(this).addClass('active')

        $('.tabCon').hide();
        let target = $(this).attr('href')
        $(target).show();
    })
    tabtitle.eq(0).trigger('click')
})




// 푸터 language
$(document).ready(function(){
    $('footer .inner2 .s-footer .language .lang-btn').click(function(e){
        e.preventDefault(e);
        $(this).next().slideToggle().siblings('footer .inner2 .s-footer .language .sub').slideUp();
    })
})