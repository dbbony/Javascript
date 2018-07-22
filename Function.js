var arr = [2,3,4,5,8,7,9]

arr

console.log(arr);

function printMyInfo(data, callback){
    if(data.age >= 28){
        callback(data.email)
    }
    else{
        callback('Email No Need')
    }
}

printMyInfo(me, function(email){
    console.log('Email Send to : ' + email);
})
