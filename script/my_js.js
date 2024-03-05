const showMenu = document.querySelector('#show-menu')
showMenu.onclick = function () {
    document.getElementById('overlay-menu').classList.add('overlay-menu-close')
}
const removeMenu = document.querySelector('#remove-menu')
removeMenu.onclick = function () {
    document.getElementById('overlay-menu').classList.remove('overlay-menu-close')
}

$(function () {
    $('#filter a').click(function () {
        let className = $(this).attr('class')
        if (className === 'all') {
            $('.sample').fadeIn(500)
        } else {
            $('.sample').hide().filter('.' + className).fadeIn(500)
        }
        return false
    })

    $('#main-navigation>li').has('ul').children('a').append('<i class="fa-solid fa-angle-down"></i>')
    $('#main-navigation li ul li').has('ul').children('a').append('<i class="fa-solid fa-angle-left"></i>')

    $('#main-navigation li').hover(function () {
        $(this).children('ul').stop(true).show('slow')
    }, function () {
        $(this).children('ul').stop(true).hide('slow')
    })


    $('#teams-box').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]

    });

    AOS.init();
    $('#comments-box').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    })


    $('input').click(function () {
        if ($(this).is('#checkbox')) {
            $(":root").toggleClass("root")
            $(":root").toggleClass("dark")
        }

    })
$(function (){
    $('button').click(function (){
        if ($(this).is('#primary')) {
            $(':root').css({
                '--primaryColor': 'rgba(187, 143, 206, 0.7)',
                '--hoverColor':'#c891dc',
                '--sampleOverlay':'rgba(187, 143, 206, 0.7)',


            }) }

        if ($(this).is('#red')) {
            $(':root').css({
                '--primaryColor': 'rgba(117,6,15,0.98)',
                '--hoverColor':'#e30909',
                '--sampleOverlay':'rgba(238,159,171,0.7)',
            }) }
        if ($(this).is('#purple')) {
            $(':root').css({
                '--primaryColor': 'purple',
                '--hoverColor':'#c891dc',
            '--sampleOverlay':'rgba(210,178,226,0.7)',

            }) }
        if ($(this).is('#hotpink')) {

            $(':root').css({
                '--primaryColor': 'hotpink',
                '--hoverColor':'rgb(247,179,208)',
                '--sampleOverlay':'rgba(220,103,195,0.7)',

            }) }
        if ($(this).is('#orange')) {
            $(':root').css({
                '--primaryColor': 'rgb(255,165,0)',
                '--hoverColor':'rgb(241,193,86)',
                '--sampleOverlay':'rgba(242,207,143,0.7)',

            }) }
        if ($(this).is('#lightblue')) {
            $(':root').css({
                '--primaryColor': '#3f7489',
                '--hoverColor':'#7998ad',
                '--sampleOverlay':'rgba(98,165,196,0.7)',


            }) }
    })
$('#box-color').hide()
    $('#toggleBtn').click(function (){

        $('#box-color').fadeToggle(500)


    })
})})

/*    $(document).ready(function () {
        $("#check-5").click(function () {
            $(":root").toggleClass("root,dark")
        })
    })*/
