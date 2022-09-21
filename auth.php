<html>
<head>
</head>
<body>

<?php     
    
    include('connection.php');  
    $username = $_POST['user'];  
    $password = $_POST['pass'];  
      
        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($con, $username);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "select * from superadmin_login where super_login = '$username' and super_pass = '$password'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<script>localStorage.setItem('name','Siddhi')</script>";  
            header("Location:http://localhost/foodapp/Register/hmepage.html") ;
        }  
        else{  
            
            echo "<script>alert('Login Unsuccessful!!Username or Password is incorrect.')</script>";  
        }     
?>  
<body>
</html>