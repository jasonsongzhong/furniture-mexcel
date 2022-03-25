$(function (){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 1000, //图片切换速度
        grabCursor : true,
        autoplay: {     //是否开启自动循环
            delay: 3000,    //图片循环间隔时间
            disableOnInteraction :false,//鼠标点击是否切换
            pauseOnMouseEnter: false, //鼠标放入是否切换
        },

        // 如果需要分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

    var gallerySwiper = new Swiper('#service_category', {
        direction: 'vertical', // 垂直切换选项
        //抓手光标
        grabCursor : true,
        spaceBetween: 10,
        thumbs: {
            swiper: {
                //抓手光标
                grabCursor : true,
                //自动高度调整
                autoHeight: true,

                direction: 'vertical', // 垂直切换选项
                el: '#thumbs',
                spaceBetween: 5,
                slidesPerView: 3,
                watchSlidesVisibility: true,/*避免出现bug*/
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            },
        }

        // 左右翻页
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // autoplay: {
        //     disableOnInteraction: false,
        // },

        // 分页器
        // pagination: {
        //     el: '.swiper-pagination',
        // },
    })
})