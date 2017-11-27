<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Ai Swater</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fonts.css">
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="script.js"></script>
    <meta name="theme-color" content="#e6344a">
    <link rel="shortcut icon" type="image/png" href="favicon.png"/>
    <link rel="shortcut icon" type="image/png" href="http://eg.com/favicon.png"/>
</head>

<body>
    <header>
        <div class="menu_bar">
            <a href="#" class="bt-menu"><span class="icon-menu3"></span>Menu</a>
        </div>

        <nav style="left: -100%">
            <ul>
                <li><a href="index.html"><span class="icon-home"></span>Home</a></li>
                <li><a href="about.html"><span class="icon-user"></span>About</a></li>

                <li class="submenu">
                    <a href="#"><span class="icon-rocket"></span>Shop<span class="caret icon-sort-amount-asc"></span></a>
                    <ul class="children">
                        <li><a href="air.html">Lucht<span class="icon-ctrl"></span></a></li>
                        <li><a href="sand.html">Zand<span class="icon-ctrl"></span></a></li>
                        <li><a href="water.html">Water<span class="icon-ctrl"></span></a></li>
                        <li><a href="aarde.html">Aarde<span class="icon-ctrl"></span></a></li>
                        <li><a href="stenen.html">Stenen<span class="icon-ctrl"></span></a></li>
                        <li><a href="gras.html">Gras<span class="icon-ctrl"></span></a></li>
                    </ul>
                </li>

<!--                <li><a href="#"><span class="icon-blog"></span>Blog</a></li>-->
                <li><a href="contact.php"><span class="icon-mail"></span>Contact</a></li>
                <li class="login"><a href="winkelmandje.html"><span class="icon-cart"></span>Winkelmandje</a></li>
                <li class="login"><a href="login.php"><span class="icon-lock"></span>Login</a></li>
            </ul>
        </nav>
    </header>

    <div class="sub-name">
        <small><a class="font">Login<span class="icon-bookmarks"></span></a></small>
    </div>
    
    <?php
    
    $username = "username"; # Hier komt jou inlog naam.
    $password = "5f4dcc3b5aa765d61d8327deb882cf99"; # password = password
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $form = "<form method='POST'>
        <div class='form-center'>
        <br>
        <p>Username:</p>
        <input type='text' name='user'><br><br>
        <p>Password:</p>
        <input type='password' name='pass'><br><br>
        <input type='submit' value='Login' class='buttonTwitterMail'>
        </div>
        </form> <br><br>
        
        <footer>
        <small><a class='D-none'>Copyright 2016</a>&nbsp; - &nbsp; <a href='vragen.html' class='
footer-color'>Veel gestelde vragen</a> &nbsp; - &nbsp; <a href='leveringsvoorwaarden.html' class='footer-color'>Leveringsvoorwaarden</a><a href='' title=''></a></small>
    </footer>
        
        ";

    session_start();
    if(!isset($_SESSION['sec']))
    {
        $_SESSION['sec'] = false;
    }
    if(isset($pass))
    {
        if($user == $username and md5($pass) == $password)
        {
            $_SESSION['sec'] = true;
        }
        else
        {
            echo "<div class='login-left'>
            <a class='login-text'>
                  <p class='Clogin'>Wrong Pass</p>
                </a>
            </div>";
            $form;
        }
    }
                    
                    

    if(!$_SESSION['sec']):
	echo $form;
	exit();
	endif;

?>
    
    <div class="about-left">
        <div class="about">
            <div class="about-text">
                
                    
                    <?php
                    
                    # Uitloggen 
	if($_GET['log'] == 'out')
	{
		session_destroy();
	}
	echo "Welcome {$user} | <a href='?log=out'>Logout</a>";
                    
                    ?>
                    
            
            <br>
            </div>

        </div>
    </div>

    <br>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="http://arrow.scrolltotop.com/arrow35.js"></script>

    <footer>
        <small><a class="D-none">Copyright 2016</a>&nbsp; - &nbsp; <a href="vragen.html" class="
footer-color">Veel gestelde vragen</a> &nbsp; - &nbsp; <a href="leveringsvoorwaarden.html" class="footer-color">Leveringsvoorwaarden</a><a href="#" title=""></a></small>
    </footer>

</body>

</html>