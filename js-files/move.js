//*
// * Created by wxl on 2015/6/24.
window.onload = function () {
    var i = 0;
    setInterval(updateDay, 1000);
    setInterval(updateTime, 1000);

    var o_mit = document.getElementById('mit-search');
    var oImg_computer = document.getElementById('img-computer');
    o_mit.onmouseover = function () {
        oImg_computer.src = 'image01/pgxsq512-2.png';
    };
    o_mit.onmouseout = function () {
        oImg_computer.src = 'image01/pgxsq512-4.png';
    };

    var oImg_move = document.getElementsByClassName('move');
    for (i = 0; i < oImg_move.length; i++) {
        oImg_move[i].timer = null;
        oImg_move[i].bo = true;
        oImg_move[i].iSpeedX = 0;
        oImg_move[i].iSpeedY = 0;
        oImg_move[i].disX = 0;
        oImg_move[i].disY = 0;
        oImg_move[i].index = i;
        oImg_move[i].lastX = 0;
        oImg_move[i].lastY = 0;
        oImg_move[i].l = 0;
        oImg_move[i].t = 0;

        startMove4(oImg_move[i]);

    }


    var oTxt_search = document.getElementById('txt-search');
    var oMit_search = document.getElementById('mit-search');
    oMit_search.onclick = function () {
        setTimeout(function () {
            oTxt_search.value = '';
        }, 200);
    };

    var oImg_head = document.getElementById('img-x');
    oImg_head.onmouseover = function () {
        this.src = 'image01/me2.png';
    };
    oImg_head.onmouseout = function () {
        this.src = 'image01/me.png';
    };

    //var oA = document.getElementsByTagName('a');

    var oPre = document.getElementsByTagName('pre');
    for (i = 0; i < oPre.length; i++) {
        oPre[i].onmouseover = function () {
            this.style.background = '#7D0101';
        };
        oPre[i].onmouseout = function () {
            this.style.background = 'black';
        }
    }

    var oImg_zimu = document.getElementsByClassName('zimu');
    for (i = 0; i < oImg_zimu.length; i++) {
        //arr[i].index=i;
        oImg_zimu[i].timer = null;
        oImg_zimu[i].bo = true;
        oImg_zimu[i].onmouseover = function () {
            if (this.bo) {
                startMove(this, 'top', 100, 30);
            } else {
                startMove(this, 'top', 0, 30);
            }
        };
    }

    var oImg_study = document.getElementById('img-study');
    var oImg_study2 = document.getElementById('img-study2');
    var oDiv_study2 = document.getElementById('div-study2');
    var oDiv_study = document.getElementById('div-study');
    oDiv_study.timer = null;
    oDiv_study2.timer = null;
    oDiv_study.bo = true;
    oDiv_study2.bo = true;
    oImg_study.onclick = function () {
        if (oDiv_study.bo) {
            startMove(oDiv_study, 'left', 0, 8);
            this.src = 'image01/left_arrow_60.png';
        } else {
            startMove(oDiv_study, 'left', -260, 8);
            this.src = 'image01/prev_arrow_60.png';

        }
    };
    oImg_study2.onclick = function () {
        if (oDiv_study2.bo) {
            startMove(oDiv_study2, 'left', 0, 8);
            this.src = 'image01/left_arrow_60.png';
        } else {
            startMove(oDiv_study2, 'left', -260, 8);
            this.src = 'image01/prev_arrow_60.png';

        }
    };

    var oDiv_ccc = document.getElementById('div-ccc');
    var oDiv_aaa = document.getElementById('div-aaa');
    var oDiv_bbb = document.getElementById('div-bbb');
    oDiv_ccc.timer = null;
    oDiv_aaa.timer = null;
    oDiv_bbb.timer = null;
    oDiv_ccc.onmouseover = function () {
        startMove(oDiv_ccc, 'top', 0, 8);
    };
    oDiv_ccc.onmouseout = function () {
        startMove(oDiv_ccc, 'top', -416, 8);
    };
    oDiv_aaa.onmouseover = function () {
        startMove(oDiv_aaa, 'top', 0, 8);
    };
    oDiv_aaa.onmouseout = function () {
        startMove(oDiv_aaa, 'top', -416, 8);
    };
    oDiv_bbb.onmouseover = function () {
        startMove(oDiv_bbb, 'top', 0, 8);
    };
    oDiv_bbb.onmouseout = function () {
        startMove(oDiv_bbb, 'top', -416, 8);
    };
};


function toDouble(num) {   //让一个数字变成两个数字
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
function toYear(num) {    //将数字转化为字符串
    return '' + num;
}
function updateDay(obj) { //刷新显示时间
    var oImg_day = document.getElementsByClassName('img-day');
    var oDate = new Date();
    var str = toYear(oDate.getFullYear()) + toDouble(oDate.getMonth() + 1) + toDouble(oDate.getDate());
    var i = 0;
    for (i = 0; i < oImg_day.length; i++) {
        oImg_day[i].src = 'image01/' + str.charAt(i) + '.png';
    }
}
function updateTime() { //刷新显示时间
    var oImg_time = document.getElementsByClassName('img-time');
    var oDate = new Date();
    var str = toDouble(oDate.getHours()) + toDouble(oDate.getMinutes()) + toDouble(oDate.getSeconds());
    var i = 0;
    for (i = 0; i < oImg_time.length; i++) {
        oImg_time[i].src = 'image01/' + str.charAt(i) + '.png';
    }
}

function getStyle(obj, attr) {  //获得非行间的属性
    if (obj.currentStyle) {
        //IE
        return obj.currentStyle[attr];
    } else {
        //非IE,火狐
        return getComputedStyle(obj, false)[attr];
    }
}
function startMove(obj, attr, iTarget, coe) {  //元素任意值运动函数
    obj.bo = !obj.bo;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iCur = 0;//当前属性值
        if (attr == 'opacity') {
            iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            iCur = parseInt(getStyle(obj, attr));
        }
        var iSpeed = (iTarget - iCur) / coe;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (iCur == iTarget) {
            clearInterval(obj.timer);
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
    }, 30);
}
function startMove2(obj, json, v, fn) { //元素多属性同时运动，且链式运动
    obj.bo = !obj.bo;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var attr in json) {
            var iCur = 0;//当前属性值
            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }
            var iSpeed = (json[attr] - iCur) / v;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (iCur !== json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                //iSpeed+=(json[attr]-iCur)/50;
                //iSpeed*=0.95;
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}
function startMove3(obj, iSpeedX, iSpeedY) {  //重力弹性运动
    obj.bo = !obj.bo;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        iSpeedY += 3;

        var l = obj.offsetLeft + iSpeedX;
        var t = obj.offsetTop + iSpeedY;

        if (t >= document.documentElement.clientHeight- obj.offsetHeight) {
            iSpeedY *= -0.8;
            iSpeedX *= 0.8;
            t = document.documentElement.clientHeight - obj.offsetHeight;
        }
        else if (t <= 0) {
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            t = 0;
        }

        if (l >= document.documentElement.clientWidth - obj.offsetWidth) {
            iSpeedX *= -0.8;
            l = document.documentElement.clientWidth - obj.offsetWidth;
        }
        else if (l <= 0) {
            iSpeedX *= -0.8;
            l = 0;
        }

        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }

        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }

        if (iSpeedX == 0 && iSpeedY == 0 && t == document.documentElement.clientHeight - obj.offsetHeight) {
            clearInterval(obj.timer);
        }
        else {
            obj.style.left = l + 'px';
            obj.style.top = t + 'px';
        }

    }, 30);
}
function startMove4(obj) {  //拖拽重力运动
    obj.onmousedown = function (ev) {
        var oEvent = ev || event;
        obj.disX = oEvent.clientX - obj.offsetLeft;
        obj.disY = oEvent.clientY - obj.offsetTop;
        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            obj.l = oEvent.clientX - obj.disX;
            obj.t = oEvent.clientY - obj.disY;

            obj.style.left = obj.l + 'px';
            obj.style.top = obj.t + 'px';

            obj.iSpeedX = obj.l - obj.lastX;
            obj.iSpeedY = obj.t - obj.lastY;

            obj.lastX = obj.l;
            obj.lastY = obj.t;
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            startMove3(obj, obj.iSpeedX, obj.iSpeedY);
        };

        clearInterval(obj.timer);
        return false;
    };
}


function moveWithMouse(obj){
    var disX=0;
    var disY=0;

    obj.onmousedown=function (ev)
    {
        var oEvent=ev||event;

        disX=oEvent.clientX-obj.offsetLeft;
        disY=oEvent.clientY-obj.offsetTop;

        document.onmousemove=function (ev)
        {
            var oEvent=ev||event;
            var l=oEvent.clientX-disX;
            var t=oEvent.clientY-disY;

            if(l<0)
            {
                l=0;
            }
            else if(l>document.documentElement.clientWidth-obj.offsetWidth)
            {
                l=document.documentElement.clientWidth-obj.offsetWidth;
            }

            if(t<0)
            {
                t=0;
            }
            else if(t>document.documentElement.clientHeight-obj.offsetHeight)
            {
                t=document.documentElement.clientHeight-obj.offsetHeight;
            }

            obj.style.left=l+'px';
            obj.style.top=t+'px';
        };

        document.onmouseup=function ()
        {
            document.onmousemove=null;
            document.onmouseup=null;
        };

        return false;
    };
}
