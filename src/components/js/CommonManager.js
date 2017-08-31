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

    submitMember(name,area,comment,image,callback){
        let formData = new FormData();
        formData.append("image",image);
        formData.append("name",name);
        formData.append("area",area);
        formData.append("comment",comment);
        $.ajax({
            url:'/app/member/submit',
            async: true,
            cache: false,
            data:formData,
            type:"POST",
            contentType: false,
            processData : false,
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