$(document).ready(function(){
        var screenHeight = $(window).height();
        $("body").css("height", screenHeight);
    
        var padding = ((screenHeight-8)/2 - 64)/2;
        $("#top-left").css("padding-top",padding);
        $("#top-left").css("padding-bottom",padding);
        $("#top-right").css("padding-top",padding);
        $("#top-right").css("padding-bottom",padding);
        $("#bottom-left").css("padding-top",padding);
        $("#bottom-left").css("padding-bottom",padding);
        $("#bottom-right").css("padding-top",padding);
        $("#bottom-right").css("padding-bottom",padding);

        function displayTimeTL(){
            var currentTime = new Date();
            
            var hours = currentTime.getHours();
            
            var ampm = "am";
            if(hours > 12){
               hours = hours-12;
                ampm = "pm";
            }
            
            
            
            var minutes = currentTime.getMinutes();
            if (minutes < 10) minutes= "0" +minutes;
            var seconds = currentTime.getSeconds();
            if (seconds < 10) seconds= "0" +seconds;
            $("#top-left").html("Florida<br>"+hours+":"+minutes+":"+seconds+" "+ampm);
            $("#top-right").html("Cuba<br>"+hours+":"+minutes+":"+seconds+" "+ampm);
            $("#bottom-left").html("New York<br>"+hours+":"+minutes+":"+seconds+" "+ampm);
            $("#bottom-right").html("Boston<br>"+hours+":"+minutes+":"+seconds+" "+ampm);
        }
        setInterval(function(){
            displayTimeTL();
        },200);
    
});

