$(document).ready(function(){
    $("#messageOutput").hide();
    $('#getDetails').click(function(){
        console.log("click");
        var data = {
            name: $("#userName").val()      
        };
        $.ajax({
            url: 'users/message',
            data: data,
            type: 'GET',
            success: function(data) {
                console.log(data);
                $("#messageOutput").html(data); 
                $("#messageOutput").show();
                setTimeout(function(){
                    $("#messageOutput").hide();
                },5000)

            },
            error: function() {

            }
        });
    });
});