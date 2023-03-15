// 화살표 함수 this

const relationship1 = {
    name : "one",
    friends:["hi", "hello", "bye"],
    logFriends:function(){
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, friend);
        });
    }
}

relationship1.logFriends();

console.log("-------------");

const relationship2 = {
    name : "one",
    friends:["hi", "hello", "bye"],
    logFriends:function(){
        this.friends.forEach((friend)=>{
            console.log(this.name, friend);
        });
    }
}

relationship1.logFriends();