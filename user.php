<? php

	$CN=mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"userlogin");
	$json=file_get_content('php://input');
	$obj=json_decode($json,true);
	
	$UserName=$obj['username'];
	$Password=$obj['password'];
	
	$IQ="insert into userdetails(UserName, Password) values('$UserName','$Password')";
	$R=mysqli_query($CN,$IQ);
	if($R)
	{
		$Message="Successfully Login";
	}
	else
	{
		$Message="Wrong Password");
	}
	$Response[]=array("Message"=>$Message);
	echo json_encode($Response);
	
		
?>