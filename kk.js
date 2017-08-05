/**
 * Created by kxiner on 17/4/11.
 */
(function () {
    var StarScore = (function () {
        function StarScore (ele, options) {
            this.flag;
            this.score = 0;
            this.ele = ele;
            this.liLen = 5;
            this.oUl;
            this.oLis;
            this.span;
            this.settings = $.extend(false, $.fn.StarScore.defaults, options||{});
            this.init();
        }
        StarScore.prototype = {
            init: function () {
                this._dom();
                this._style();
                this._event();
            },
            _style: function () {
                var me = this;
                this.ele.css({"margin":0,"padding": 0});
                this.oUl.css({"margin":0,"padding": 0});
                this.ele.css({'height': this.settings.size});
                this.oUl.css({
                    'height': this.settings.size,
                    'width': this.settings.size*me.liLen,
                    'display':'inline-block'
                });
                if(this.settings.half) {
                    this.oUl.css({
                        'width': this.settings.size/2*me.liLen
                    });
                    this.ele.find('li:odd').css({
                        'backgroundPosition': 'right top'
                    });
                };
                this.span.css({
                    'margin-left': '10px',
                    'verticalAlign': 'text-top'
                });
                for(var i=0;i<me.liLen;i++) {
                    this.ele.find('li').eq(i).css({
                        'height': this.settings.size,
                        'width': this.settings.size,
                        'float': 'left',
                        'list-style': 'none',
                        'backgroundImage': 'url(./imgs/starky.png)',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': '100%'
                    });
                    if(this.settings.half) {
                        this.ele.find('li').eq(i).css({
                            'width': this.settings.size/2+'px',
                            'backgroundImage': 'url(./imgs/stark2.png)',
                            'backgroundSize': this.settings.size+'px'+' '+this.settings.size+'px'
                        })
                    }
                }
            },
            _dom: function () {
                this.liLen = this.settings.half?10:5;

                this.ele.append($('<ul>'));
                this.oUl = this.ele.find('ul');

                for(var i=0;i<this.liLen;i++) {
                    this.oUl.append($('<li>'));
                }
                this.oLis = this.ele.find('li');

                this.ele.append($('<span>'));
                this.span = this.ele.find('span');
                this.span.text('您的评分:'+this.score+'分');                
            },
            removeLive: function () {
                var me = this;
                $.each(this.oLis, function () {
                    if(me.settings.half) {
                        $(this).css({
                            'backgroundImage': 'url(./imgs/stark2.png)',
                        })
                    }else {
                        $(this).css({
                            'backgroundImage': 'url(./imgs/starky.png)'
                        })
                    }
                })
            },
            addLive: function (idx) {
                var me = this;
                for(var i=0;i<idx;i++) {
                    if(me.settings.half) {
                        this.ele.find('li').eq(i).css({
                            'backgroundImage': 'url(./imgs/stars2.png)',
                        });
                    }else {
                        this.ele.find('li').eq(i).css({
                            'backgroundImage': 'url(./imgs/starsy.png)'
                        });
                    }
                }
            },
            setScore: function (score) {
                if(this.settings.half) {
                    this.score = (score%2==0)?score/2:(score+1)/2-0.5;
                }else {
                    this.score = score;
                }
                this.span.text('您的评分:'+this.score+'分')
            },
            _event: function () {
                var me = this;
                this.ele.find('li').each(function () {
                    $(this).click(function () {
                        me.flag = $(this).index();
                    });
                    $(this).hover(function () {
                        me.removeLive();
                        var index = $(this).index();
                        me.setScore(index+1);
                        me.addLive(index+1);
                    },function () {
                        me.setScore(me.flag>=0?me.flag+1:0);
                        me.removeLive();
                        me.addLive(me.flag>=0?me.flag+1:0);
                    })
                })
            }
        };
        return StarScore;
    })();
    $.fn.StarScore = function (options) {
        var me = $(this);
        return new StarScore(me, options);
    };
    $.fn.StarScore.defaults = {
        'size': '21',
        'half': false
    }
})();


