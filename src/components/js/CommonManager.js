class CommonManager {
    checkUser(callback){
        $.ajax({
            url:'/app/member/checkUser',
            async: false,
            cache: false,
            type:"POST",
            contentType: "application/x-www-form-urlencoded",
            dataType: "json",
            error:function (xhr, msg, e) {
                callback(null,false);
            },
            success:function (result) {
                callback(result,true);
            }
        });
    }
}

export default CommonManager