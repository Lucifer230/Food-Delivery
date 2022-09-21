<html>
<head>
</head>
<body>

<?php     
    
    include('connection.php');  
    if (isset($_POST['submit'])) {
        // receive all input values from the form
        $name = mysqli_real_escape_string($con, $name);  
        $email = mysqli_real_escape_string($con, $email);  
        $password = mysqli_real_escape_string($con, $password);  
        $ph = mysqli_real_escape_string($con, $ph);
      
        
   
      
        //to prevent from mysqli injection  
       // $name = stripcslashes($username);  
        //$email = stripcslashes($email);  
      //  $ph = stripcslashes($ph);  
       // $password = stripcslashes($password);  
        
      
        $sql = "INSERT into 'customer' (cust_name, cust_email, cust_pass, cust_ph) VALUES ('$name', '$email', '$password', '$ph') ";  
        $result = mysqli_query($con, $sql);  
        
        if($result){  
            header("Location:http://localhost/foodapp/Register/main.html") ;
        }  
        else{  
            
            echo "<script>alert('Registration Unsuccessful!!')</script>";  
        }     
?>  
<body>
</html>


  
