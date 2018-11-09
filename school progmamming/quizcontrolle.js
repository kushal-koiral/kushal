function quiz(questions){
	this.score=0;
	this.questions=questions;
	this.questionindex=0;
}
quiz.prototype.getquestionindex=function(){
	return this.questions[this.questionindex];

}
quiz.prototype.isEnded=function(){
	return this.questions.length ===this.questionindex;
}
quiz.prototype.guess=function(answer){
	this.questionindex++;
	if(this.getquestionindex().correctanswer(answer)) {
		this.score++;
	}
}