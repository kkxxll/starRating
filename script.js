/**
 * Created by kxiner on 17/4/11.
 */
$(function () {
    var flag1;
    $('.main ul li').each(function () {
        $(this).hover(function () {
            $('.main ul li').removeClass('li_live');
           var inx = $(this).index();
           for(var i=0;i<=inx;i++) {
               $('.main ul li').eq(i).addClass('li_live');
           }
        },function () {
            for(var i=0;i<5;i++) {
                if(i<(flag1>=0?flag1+1:0)) {
                    $('.main ul li').eq(i).addClass('li_live');
                }else {
                    $('.main ul li').eq(i).removeClass('li_live');
                }
            }
        })
        $(this).click(function () {
            flag1 = $(this).index();
        })
    });
    var flag2;
    $('.main1 ul li').each(function () {
        $(this).hover(function () {
            $('.main1 ul li').removeClass('live');
            var inx = $(this).index();
            for(var i=0;i<=inx;i++) {
                $('.main1 ul li').eq(i).addClass('live');
            }
        },function () {
            // console.log(flag2);
            for(var i=0;i<10;i++) {
                if(i<(flag2>=0?flag2+1:0)) {
                    console.log(111);
                    $('.main1 ul li').eq(i).addClass('live');
                }else {
                    $('.main1 ul li').eq(i).removeClass('live');
                }
            }
        })
        $(this).click(function () {
            flag2 = $(this).index();
        })
    });
});



