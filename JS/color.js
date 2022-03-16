// Links 객체 선언
var Links = {
    setFontColor : function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){    
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

// Body 객체 선언
var Body = {
    setBodyColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBodyBgColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function modeHandler(self){
    var target = document.querySelector('body');
    if (self.value == 'NIGHT'){
        Body.setBodyBgColor('black');
        Body.setBodyColor('white');
        Links.setFontColor('powderblue');
        self.value = 'DAY';
    }else{
        Body.setBodyBgColor('white');
        Body.setBodyColor('black');
        Links.setFontColor('blue');
        self.value = 'NIGHT';
    }
}