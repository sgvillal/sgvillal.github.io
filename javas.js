

    /* --------------------------------------------------------------- */

    /* IF YOU WANT TO ADD NEW QUESTIONS OR ANSWERS, LOOK FOR THE GIANT WORD PAL TO SEE WHERE TO CHANGE THE CODE */


            /*
                         __|_|_|     _|_|_|_|     _|
                         _|    _|   _|      _|    _|
                         _|    _|   _|      _|    _|
                         _|_|_|_|   _|_|_|_|_|    _|
                         _|         _|      _|    _|
                         _|         _|      _|    _|_|_|_|_|
             */


     /* --------------------------------------------------------------- */







var choice = 0;
var EDS39 = 0;
var EDS130 = 0;
var EDS131 = 0;
var EDS136 = 0;
var EDS137 = 0;
var num = 0;
var keep = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var COURSES = 5;
var QUESTIONS = 7;
function check( browser) {
    /* Sets up scoreboard */
    if(num != 0){
    	EDS39 = keep[0][0]+keep[0][1]+keep[0][2]+keep[0][3]+keep[0][4]+keep[0][5];
    	EDS130 = keep[1][0]+keep[1][1]+keep[1][2]+keep[1][3]+keep[1][4]+keep[1][5];
    	EDS131 = keep[2][0]+keep[2][1]+keep[2][2]+keep[2][3]+keep[2][4]+keep[2][5];
    	EDS136 = keep[3][0]+keep[3][1]+keep[3][2]+keep[3][3]+keep[3][4]+keep[3][5];
    	EDS137 = keep[4][0]+keep[4][1]+keep[4][2]+keep[4][3]+keep[4][4]+keep[4][5];
    }
    document.getElementById("result").innerHTML = "EDS130 = " + EDS130 +
                                                       "<br>" + "EDS131 = " + EDS131 +
                                                       "<br>" + "EDS39 = " + EDS39 +
                                                       "<br>" + "EDS136 = " + EDS136+
                                                       "<br>" + "EDS137 = " + EDS137;
}
/* Starting code */
function start(){
    choice = 0;
    EDS39 = 0;
    EDS130 = 0;
    EDS131 = 0;
    EDS136 = 0;
    EDS137 = 0;
    num = 0;
    /* Make sure all scores start at zero */
    for(index = 0; index < COURSES; index++){
    	for(n = 0 ; n < QUESTIONS; n++){
            keep[index][n] = 0;
        }
    }
    /* Makes questions, scoreboard and buttons visible */
      document.getElementById("demo").style.visibility = 'visible';
      document.getElementById("choice").style.visibility = 'visible';
      document.getElementById("back").style.visibility = 'visible';
      /* sets up numbers of questions and answers */
    var q = ["q1","q2","q3","q4","q5","q6","q7"];
    var a = ["a1","a2","a3","a4","a5","a6"];
    /* Shows questions and answers one by one */
    /* Starts showing question 1 -> 7 */
    for(index = 0; index < QUESTIONS; index++){
      document.getElementById(q[index]).style.visibility = 'visible';
      document.getElementById(a[index]).style.visibility = 'visible';
    }







    /* --------------------------------------------------------------- */
         /*       __|_|_|     _|_|_|_|     _|
                  _|    _|   _|      _|    _|
                  _|    _|   _|      _|    _|
                  _|_|_|_|   _|_|_|_|_|    _|
                  _|         _|      _|    _|
                  _|         _|      _|    _|_|_|_|_|
          */
    /* FIRST QUESTION CODE */
    /* sets up question picture */
    /* IF ADD OR REMOVE A QUESTION, ACCOUNT FOR IT HERE TOO */
    document.getElementById("pic").src = "pics/Pal.jpg";
    document.getElementById("q1").checked = false;
    document.getElementById("q2").checked = false;
    document.getElementById("q3").checked = false;
    document.getElementById("q4").checked = false;
    document.getElementById("q5").checked = false;
    document.getElementById("q6").checked = false;
    document.getElementById("q7").checked = false;
    /* --------------------------------------------------------------- */








    /* Makes question show up on screen */
    document.getElementById("demo").innerHTML="What college are you in?";
    /* Makes answers show up on screen */
    document.getElementById("a1").innerHTML="ERC";
    document.getElementById("a2").innerHTML="Muir";
    document.getElementById("a3").innerHTML="Warren";
    document.getElementById("a4").innerHTML="Sixth";
    document.getElementById("a5").innerHTML="Marshal";
    document.getElementById("a6").innerHTML="Revelle";

}
/* CODE FOR QUESTIONS AFTER QUESTION 1 */
function change(questionNumber){
    /* Nothing happens if youre before the first question */
    if(questionNumber == 1 && num == 0 )
        return;
     /* At the first question: start the program, start calculating score */
    if(questionNumber == 1 && num == 1 ){
        start();
        calculate(1);
        return;
    }








    /* --------------------------------------------------------------- */
     /*       __|_|_|     _|_|_|_|     _|
              _|    _|   _|      _|    _|
              _|    _|   _|      _|    _|
              _|_|_|_|   _|_|_|_|_|    _|
              _|         _|      _|    _|
              _|         _|      _|    _|_|_|_|_|
      */
    /* All the questions except for the first one */
    /*  CAN
     *  ADD/REMOVE
     * ~QUESTIONS~
     *  HERE */
    var questions = ["Do you still need to take your DEI requirement?",
                     "Are you expecting an unusually heavy course load for the following quarter?",
                     "Have you thought about a career in teaching or education?",
                     "Of the subjects below, which do you enjoy the most?",
                     "What age group would you like to work with for these courses?",
                     "Are you a 1st or 2nd year?",
                     "What kind of environment would you prefer?"
                    ]; // end of question choices

    /* --------------------------------------------------------------- */









    /* --------------------------------------------------------------- */
    /*            __|_|_|     _|_|_|_|     _|
                  _|    _|   _|      _|    _|
                  _|    _|   _|      _|    _|
                  _|_|_|_|   _|_|_|_|_|    _|
                  _|         _|      _|    _|
                  _|         _|      _|    _|_|_|_|_|
    */
    /* All the answers except for the first one */
    /*  CAN
     *  ADD/REMOVE
     * ~ANSWERS~
     *  HERE */
    var answers = [
                   ["YES","NO"],
                   ["YES","NO"],
                   ["YES","NO"],
                   ["Science","Math","Social/Political"," Visual and Performance Arts"],
                   ["Early Childhood","Upper Elementary","Middle School","High School","Any Age"],
                   ["YES","NO"],
                   ["A constantly changing environment", "One-on-one, Mentorship", "Early Childhood development (K-3)", "Focusing on one subject area ", "Visual and Performing Arts in the classroom"]
                   ]; // end of answer choices
    /* --------------------------------------------------------------- */










    if(questionNumber == "1" && num != 0 && num != 1){
    	num = num - 2;
    }






    /* --------------------------------------------------------------- */
     /*
                             __|_|_|     _|_|_|_|     _|
                             _|    _|   _|      _|    _|
                             _|    _|   _|      _|    _|
                             _|_|_|_|   _|_|_|_|_|    _|
                             _|         _|      _|    _|
                             _|         _|      _|    _|_|_|_|_|
     */
    /* CAN ADD/REMOVE ~QUESTIONS~ HERE */
    var q = ["q1","q2","q3","q4","q5","q6", "q7"];
    var a = ["a1","a2","a3","a4","a5","a6"];
    /* Holds question pictures, which can be found in the pics file */
    /* CAN ADD/REMOVE QUESTION PICTURES HERE */
    var qp = ["pics/q1.jpg","pics/q2.jpg","pics/q3.jpg","pics/q4.jpg","pics/q5.jpg","pics/q6.jpg", "pics/q7.jpg"];
    /* --------------------------------------------------------------- */









    choice.value = choice.value+1;

    /* Makes sure right number of answer choices pops up, by what you entered above in var answers */
    if(num<QUESTIONS)
    	var NumberofAnswers = answers[num].length;
    var Index = 5;
    var changer = 6;


    /* Gets a new picture everytime you go to a new question, looks for picture from var qp */
    if(num<QUESTIONS){
    	document.getElementById("pic").src = qp[num];
    }



    /* --------------------------------------------------------------- */
         /*
                                 __|_|_|     _|_|_|_|     _|
                                 _|    _|   _|      _|    _|
                                 _|    _|   _|      _|    _|
                                 _|_|_|_|   _|_|_|_|_|    _|
                                 _|         _|      _|    _|
                                 _|         _|      _|    _|_|_|_|_|
         */


    /* CHANGED QUESTION NUMBER? CHANGE HERE TOO */
    document.getElementById("q1").checked = false;
    document.getElementById("q2").checked = false;
    document.getElementById("q3").checked = false;
    document.getElementById("q4").checked = false;
    document.getElementById("q5").checked = false;
    document.getElementById("q6").checked = false;
    /* --------------------------------------------------------------- */



    for(index = 0; index <= NumberofAnswers; index++){
      document.getElementById(q[index]).style.visibility = 'visible';
      document.getElementById(a[index]).style.visibility = 'visible';
    }
    if(num<QUESTIONS){
    	document.getElementById("demo").innerHTML=questions[num];
    	document.getElementById("a1").innerHTML=answers[num][0];
    	document.getElementById("a2").innerHTML=answers[num][1];
    	document.getElementById("a3").innerHTML=answers[num][2];
    	document.getElementById("a4").innerHTML=answers[num][3];
    	document.getElementById("a5").innerHTML=answers[num][4];
    	document.getElementById("a6").innerHTML=answers[num][5];
   }
   /* Hide some answer buttons if you arent using them all, example Yes/No quesitons only use two */
    for(index = 0; index <= Index-NumberofAnswers; index++){
      document.getElementById(q[5-index]).style.visibility = 'hidden';
      document.getElementById(a[5-index]).style.visibility = 'hidden';
    }
    if(questionNumber == 1){
    calculate(1);
    }
    else
    calculate(0);
    num = num + 1;

    //recommends();
}





    /* --------------------------------------------------------------- */
     /*
                             __|_|_|     _|_|_|_|     _|
                             _|    _|   _|      _|    _|
                             _|    _|   _|      _|    _|
                             _|_|_|_|   _|_|_|_|_|    _|
                             _|         _|      _|    _|
                             _|         _|      _|    _|_|_|_|_|
     */

     /* CAN ADD/REMOVE ~ANY PICTURES~ HERE */
function changepic(stage){
    choice = stage;
    if(num == 0){
      if(stage == 1)
          document.getElementById("pic").src = "pics/ERC.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/Muir.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = "pics/Warren.jpg"
      else if(stage == 4)
          document.getElementById("pic").src = "pics/Sixth.jpg"
      else if(stage == 5)
          document.getElementById("pic").src = "pics/Marshal.jpg"
      else if(stage == 6)
          document.getElementById("pic").src = "pics/Revelle.jpg"
    }
    if(num == 1){
      if(stage == 1)
          document.getElementById("pic").src = "pics/yes.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/No.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = ""
      else if(stage == 4)
          document.getElementById("pic").src = ""
      else if(stage == 5)
          document.getElementById("pic").src = ""
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }
    if(num == 2){
      if(stage == 1)
          document.getElementById("pic").src = "pics/yes.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/No.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = ""
      else if(stage == 4)
          document.getElementById("pic").src = ""
      else if(stage == 5)
          document.getElementById("pic").src = ""
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }
    if(num == 3){
      if(stage == 1)
          document.getElementById("pic").src = "pics/yes.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/No.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = ""
      else if(stage == 4)
          document.getElementById("pic").src = ""
      else if(stage == 5)
          document.getElementById("pic").src = ""
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }
    if(num == 4){
      if(stage == 1)
          document.getElementById("pic").src = "pics/Science.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/Math.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = "pics/Social.jpg"
      else if(stage == 4)
          document.getElementById("pic").src = "pics/Visual.jpg"
      else if(stage == 5)
          document.getElementById("pic").src = ""
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }
    if(num == 5){
      if(stage == 1)
          document.getElementById("pic").src = "pics/Early.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/Elementary.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = "pics/Middle.jpg"
      else if(stage == 4)
          document.getElementById("pic").src = "pics/HighSchool.jpg"
      else if(stage == 5)
          document.getElementById("pic").src = "pics/Any.jpg"
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }
    if(num == 6){
      if(stage == 1)
          document.getElementById("pic").src = "pics/yes.jpg"
      else if(stage == 2)
          document.getElementById("pic").src = "pics/No.jpg"
      else if(stage == 3)
          document.getElementById("pic").src = ""
      else if(stage == 4)
          document.getElementById("pic").src = ""
      else if(stage == 5)
          document.getElementById("pic").src = ""
      else if(stage == 6)
          document.getElementById("pic").src = ""
    }

    if(num == 7){
          if(stage == 1)
              document.getElementById("pic").src = "pics/const.jpg"
          else if(stage == 2)
              document.getElementById("pic").src = "pics/Mentorship.jpg"
          else if(stage == 3)
              document.getElementById("pic").src = "pics/devolpment.jpg"
          else if(stage == 4)
              document.getElementById("pic").src = "pics/focus-teamwork.jpg"
          else if(stage == 5)
              document.getElementById("pic").src = "pics/Visual1.jpg"
          else if(stage == 6)
              document.getElementById("pic").src = ""
     }
    /* restart back to question 1 */
    if(num > QUESTIONS){
      document.getElementById("pic").src = "pics/Pal.jpg"
    }
    /* --------------------------------------------------------------- */
}











/* This is where the score is calculated */


    /* --------------------------------------------------------------- */
     /*
                             __|_|_|     _|_|_|_|     _|
                             _|    _|   _|      _|    _|
                             _|    _|   _|      _|    _|
                             _|_|_|_|   _|_|_|_|_|    _|
                             _|         _|      _|    _|
                             _|         _|      _|    _|_|_|_|_|
     */



/* IF NEW QUESTION WAS ADDED, PLEASE MAKE SURE TO GIVE IT POINTS HERE */
function calculate(command){
   if(command == 0){
     if(num == 0){
         if(choice == 1){
         }
         else if(choice == 2){
         }
         else if(choice == 3){

         }
         else if(choice == 4){

         }
         else if(choice == 5){

         }
     }
     else if(num == 1){
         if(choice == 1){
             keep[0][num] = 0;
             keep[1][num] = 5;
             keep[2][num] = 5;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
         else if(choice == 2){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 3){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 4){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 5){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
     }
     else if(num == 2){
         if(choice == 1){
             keep[0][num] = 5;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 2){
            keep[0][num] = 0;
            keep[1][num] = 5;
            keep[2][num] = 5;
            keep[3][num] = 5;
            keep[4][num] = 5;

         }
         else if(choice == 3){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 4){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 5){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
     }
    else if(num == 3){
         if(choice == 1){
            keep[0][num] = 0;
            keep[1][num] = 5;
            keep[2][num] = 5;
            keep[3][num] = 5;
            keep[4][num] = 5;

         }
         else if(choice == 2){
            EDS39 = EDS39 + 5;
            keep[0][num] = 5;
            keep[1][num] = 0;
            keep[2][num] = 0;
            keep[3][num] = 0;
            keep[4][num] = 0;
         }
         else if(choice == 3){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 4){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 5){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;

         }
     }
    else if(num == 4){
         if(choice == 1){
             keep[0][num] = 5;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 2){
             keep[0][num] = 5;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 3){

             keep[0][num] = 0;
             keep[1][num] = 5;
             keep[2][num] = 5;
             keep[3][num] = 5;
             keep[4][num] = 0;
         }
         else if(choice == 4){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
         else if(choice == 5){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 5;
         }
     }
    else if(num == 5){
         if(choice == 1){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 5;
             keep[3][num] = 0;
             keep[4][num] = 5;
         }
         else if(choice == 2){
             keep[0][num] = 5;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 5;
         }
         else if(choice == 3){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
         else if(choice == 4){
             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
         else if(choice == 5){
             keep[0][num] = 0;
             keep[1][num] = 5;
             keep[2][num] = 5;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
     }
    else if(num == 6){
         if(choice == 1){

             keep[0][num] = 5;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 2){

             keep[0][num] = 0;
             keep[1][num] = 5;
             keep[2][num] = 5;
             keep[3][num] = 5;
             keep[4][num] = 5;
         }
         else if(choice == 3){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 4){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         else if(choice == 5){

             keep[0][num] = 0;
             keep[1][num] = 0;
             keep[2][num] = 0;
             keep[3][num] = 0;
             keep[4][num] = 0;
         }
         }

         else if(num == 7){
            if(choice == 1){
                      keep[0][num] = 5;
                      keep[1][num] = 0;
                      keep[2][num] = 0;
                      keep[3][num] = 0;
                      keep[4][num] = 0;
            }
                  else if(choice == 2){

                      keep[0][num] = 0;
                      keep[1][num] = 5;
                      keep[2][num] = 0;
                      keep[3][num] = 0;
                      keep[4][num] = 0;
                  }
                  else if(choice == 3){

                      keep[0][num] = 0;
                      keep[1][num] = 0;
                      keep[2][num] = 5;
                      keep[3][num] = 0;
                      keep[4][num] = 0;
                  }
                  else if(choice == 4){

                      keep[0][num] = 0;
                      keep[1][num] = 0;
                      keep[2][num] = 0;
                      keep[3][num] = 5;
                      keep[4][num] = 0;
                  }
                  else if(choice == 5){

                      keep[0][num] = 0;
                      keep[1][num] = 0;
                      keep[2][num] = 0;
                      keep[3][num] = 0;
                      keep[4][num] = 5;
                  }
                  /* --------------------------------------------------------------- */
                       /*
                                               __|_|_|     _|_|_|_|     _|
                                               _|    _|   _|      _|    _|
                                               _|    _|   _|      _|    _|
                                               _|_|_|_|   _|_|_|_|_|    _|
                                               _|         _|      _|    _|
                                               _|         _|      _|    _|_|_|_|_|
                       */
                  /* PUT THIS IN THE LAST QUESTION SPOT */
                  check(0);
                          finalpage();
                  /* --------------------------------------------------------------- */
           }

    /* --------------------------------------------------------------- */












   }
}

/* This is where results are shown */
function finalpage(){
    var q = ["q1","q2","q3","q4","q5","q6","q7"];
    var a = ["a1","a2","a3","a4","a5","a6"];
      document.getElementById("pic").src = "pics/thankyou.jpg";
      document.getElementById("demo").style.visibility = 'hidden';
      document.getElementById("choice").style.visibility = 'hidden';
      document.getElementById("back").style.visibility = 'hidden';
      for(index = 0; index < 6; index++){
      	document.getElementById(q[index]).style.visibility = 'hidden';
      	document.getElementById(a[index]).style.visibility = 'hidden';
      }
}
