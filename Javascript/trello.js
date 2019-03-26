let myTodos = {
day: ' Monday',
meetings: 0,
meetDone:0,

addmeeting : function(num){
        this.meetings=this.meetings+num;
        return this.meetings;
},
 resetMeetings: function(){
     this.meetings=0;
     this.meetDone=0;
 },
 meetingsLeft: function(meetDone){
     this.meetings=this.meetings - meetDone;
     return this.meetings;
 }
}

console.log(myTodos.addmeeting(8 ));
console.log(myTodos.meetingsLeft(6));
