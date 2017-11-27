<?php

  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "AISwater@outlook.com";
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $comment = $_REQUEST['comment'];
  
  
  mail($admin_email, "$subject", $comment, "From:" . $email);
  
  
  echo "  <!DOCTYPE html>
<html lang='nl'>

<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'>
    <title>Ai Swater</title>
    <link rel='stylesheet' href='contact.css'>
    <link rel='stylesheet' href='fonts.css'>
    <script src='http://code.jquery.com/jquery-latest.js'></script>
    <script src='script.js'></script>
    <meta name='theme-color' content='#e6344a'>
    <link rel='shortcut icon' type='image/png' href='favicon.png'/>
    <link rel='shortcut icon' type='image/png' href='http://eg.com/favicon.png'/>
</head>

<body>
    <header>
        <div class='menu_bar'>
            <a href='#' class='bt-menu'><span class='icon-menu3'></span>Menu</a>
        </div>

        <nav style='left: -100%'>
            <ul>
                <li><a href='index.html'><span class='icon-home'></span>Home</a></li>
                <li><a href='about.html'><span class='icon-user'></span>About</a></li>

                <li class='submenu'>
                    <a href='#'><span class='icon-rocket'></span>Shop<span class='caret icon-sort-amount-asc'></span></a>
                    <ul class='children'>
                        <li><a href='air.html'>Lucht<span class='icon-ctrl'></span></a></li>
                        <li><a href='sand.html'>Zand<span class='icon-ctrl'></span></a></li>
                        <li><a href='water.html'>Water<span class='icon-ctrl'></span></a></li>
                        <li><a href='aarde.html'>Aarde<span class='icon-ctrl'></span></a></li>
                        <li><a href='stenen.html'>Stenen<span class='icon-ctrl'></span></a></li>
                        <li><a href='gras.html'>Gras<span class='icon-ctrl'></span></a></li>
                    </ul>
                </li>

<!--                <li><a href='#'><span class='icon-earth'></span>Blog</a></li>-->
                <li><a href='contact.php'><span class='icon-mail'></span>Contact</a></li>
                <li class='login'><a href='winkelmandje.html'><span class='icon-cart'></span>Winkelmandje</a></li>
                <li class='login'><a href='login.php'><span class='icon-lock'></span>Login</a></li>
            </ul>
        </nav>
    </header>
    <div class='sub-name'>
        <small><a class='font'>Map</a></small>
    </div>

        <div id='google_maps'>
            <div>
                <img src='google_maps.png' id='googleM' alt='google maps'>
            </div>
        </div>
    
    
    <div class='sub-name'>
        <small><a class='font'>Contact/Gegevens</a></small>
    </div>
    <div class='mid'>
        <div class='gegevens'>


  
  
 

 <form method='post' action='mailTo.php'>
            
            <h3 class='label'>E-mail </h3>
            <input id='mail' name='email' type='email' class='text' required autofocus><br>

            <h3 class='label'>Onderwerp</h3>
            <input id='mail1' name='subject' type='text' class='text' size='43' required><br>

            <h3 class='label'>Bericht</h3>
            <textarea id='mail2' name='comment' rows='6' cols='41' class='area' required></textarea>
            <div class='btn-con'>
                <input type='submit' class='button'>
            </div>
            </form>
   

            </div>
        <div class='gegevens'>
            <h3>E-mail</h3>

                <p>
                21281@ma-web.nl<br>
                20482@ma-web.nl</p><br>

            <h3>Address</h3>

                <p>Amsterdam<br>
                Contactweg 36<br>
                1014 AN Amsterdam</p><br>

                <h3>Telphone</h3>
                <p>020 850 95 00</p>
        </div>
    </div>
    <footer>
        <small><a class='D-none'>Copyright 2016</a>&nbsp; - &nbsp; <a href='vragen.html' class='
footer-color'>Veel gestelde vragen</a> &nbsp; - &nbsp; <a href='leveringsvoorwaarden.html' class='footer-color'>Leveringsvoorwaarden</a><a href='#' title=''></a></small>
    </footer>



</body>

</html>"; 
      echo ("<SCRIPT LANGUAGE='JavaScript'>
    window.alert('Uw mail is verzonden.')
    window.location.href='contact.php';
    </SCRIPT>");
  }
?>