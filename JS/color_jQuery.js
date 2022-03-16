// Links 객체 선언
var Links = {
    setFontColor : function(color){
        $('a').css('color', color);        
    }
}

// Body 객체 선언
var Body = {
    setBodyColor : function(color){
        $('body').css('color', color);
    },
    setBodyBgColor : function(color){
        $('body').css('backgroundColor', color);
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