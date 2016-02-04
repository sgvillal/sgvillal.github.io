<?php 
if($_SERVER['REQUEST_METHOD'=="POST") {
$errors=array(); 

if(empty($_POST["q1"])) {
	$errors[] = "You forgot to answer a question (1)."
} 

if(empty($errors)){
	if(isset($_POST['sub']) 
	{ 
	$Question1 = $_POST['q1']; 
	$Question2 = $_POST['college']; 
	$Question3 = $_POST['subjects']; 
	} 
	else 
	{ 
	header("location:index.html"; 
	}

}
e;se {
foreach($errors as $msg) { echo " - $msg<br/>\m", }
}


}
?> 
