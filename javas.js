
var num = 0;
function check( browser) {
    document.getElementById("answer").value=browser;
}
function change(questionNumber){
    var questions = ["What subjects are you most interested in?",
                     "What age group would you like to work with for these courses?",
                     "Have you thought about a career in teaching or education?",
                     "How much time are you willing to dedicate a quarter?",
                     "What quarter would you be interested in taking a PAL course?"
                    ];
    var answers = [["Art","History","Math","English","Science"],
                   ["Early Childhood","Upper Elementary","Middle School","High School","Any Age"]                           
                   ,["Yes", "No", "Maybe"],
                   ["0-10", "10-20", "20-30","30-40","40+"],
                   ["Fall", "Winter", "Spring"]];
    var q = ["q1","q2","q3","q4","q5","q6"];
    var a = ["a1","a2","a3","a4","a5","a6"];
    var qp = ["q1.jpg","q2.jpg","q3.jpg","q4.jpg","q5.jpg"];
 
    choice.value = choice.value+1;
      
    var NumberofAnswers = answers[num].length;
    var Index = 5;
    var changer = 5;
      
    document.getElementById("pic").src = qp[num]; 
    document.getElementById("q1").checked = false; 
    document.getElementById("q2").checked = false;
    document.getElementById("q3").checked = false;
    document.getElementById("q4").checked = false;
    document.getElementById("q5").checked = false;
    document.getElementById("q6").checked = false;

    document.getElementById("demo").innerHTML=questions[num];
    document.getElementById("a1").innerHTML=answers[num][0];
    document.getElementById("a2").innerHTML=answers[num][1];
    document.getElementById("a3").innerHTML=answers[num][2];
    document.getElementById("a4").innerHTML=answers[num][3];
    document.getElementById("a5").innerHTML=answers[num][4];
    document.getElementById('a6').style.display = 'none';
    document.getElementById('q6').style.display = 'none';
    for(index = 0; index <= Index-NumberofAnswers; index++){
      document.getElementById(q[5-index]).style.display = 'none';
      document.getElementById(a[5-index]).style.display = 'none';      
    }    
    num = num + 1;
}
function changepic(stage){

    if(num == 0){
      if(stage == 1)
          document.getElementById("pic").src = "ERC.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "Muir.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "Warren.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "Sixth.jpg" 
      else if(stage == 5)
          document.getElementById("pic").src = "Marshal.jpg" 
      else if(stage == 6)
          document.getElementById("pic").src = "Revelle.jpg" 
    }
    if(num == 1){
      if(stage == 1)
          document.getElementById("pic").src = "Art.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "History.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "Math.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "English.jpg" 
      else if(stage == 5)
          document.getElementById("pic").src = "Science.jpg" 
      else if(stage == 6)
          document.getElementById("pic").src = "Pal.jpg" 
    }
    if(num == 2){
      if(stage == 1)
          document.getElementById("pic").src = "Early.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "Elementary.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "Middle.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "HighSchool.jpg" 
      else if(stage == 5)
          document.getElementById("pic").src = "Any.jpg" 
      else if(stage == 6)
          document.getElementById("pic").src = "Pal.jpg" 
    }
    if(num == 3){
      if(stage == 1)
          document.getElementById("pic").src = "yes.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "NO.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "maybe.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "" 
      else if(stage == 5)
          document.getElementById("pic").src = "" 
      else if(stage == 6)
          document.getElementById("pic").src = "" 
    }
    if(num == 4){
      if(stage == 1)
          document.getElementById("pic").src = "0-10.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "10-20.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "20-30.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "" 
      else if(stage == 5)
          document.getElementById("pic").src = "" 
      else if(stage == 6)
          document.getElementById("pic").src = "" 
    }
    if(num == 5){
      if(stage == 1)
          document.getElementById("pic").src = "fall.jpg" 
      else if(stage == 2)
          document.getElementById("pic").src = "winter.jpg" 
      else if(stage == 3)
          document.getElementById("pic").src = "spring.jpg" 
      else if(stage == 4)
          document.getElementById("pic").src = "" 
      else if(stage == 5)
          document.getElementById("pic").src = "" 
      else if(stage == 6)
          document.getElementById("pic").src = "" 
    }

    

}

