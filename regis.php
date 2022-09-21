<html>
<head>
</head>
<body>

<?php     
    
    include('connection.php');  

    $name = $_POST['name'];  
    $email = $_POST['email'];
    $password = $_POST['pass'];  
    $ph = $_POST['ph'];  
      
        //to prevent from mysqli injection  
        $name = stripcslashes($name);  
        $email = stripcslashes($email);  
        $ph = stripcslashes($ph);  
        $password = stripcslashes($password);  
        $name = mysqli_real_escape_string($con, $name);  
        $email = mysqli_real_escape_string($con, $email);  
        $password = mysqli_real_escape_string($con, $password);  
        $ph = mysqli_real_escape_string($con, $ph);
      
        $sql = "INSERT into 'customer' (cust_id,cust_name, cust_email, cust_pass, cust_ph) VALUES (1,'$name', '$email', '$password', '$ph') ";  
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