<?php
$lc = ''; 
if(isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])){
    $lc = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
}
if($lc == 'de'){
    header('location: http://de.dressland.ch');
    exit();
} else if($lc == 'en'){
    header('location: http://en.dressland.ch');
    exit();
}
else if ($lc == 0){
	header('location: http://de.dressland.ch');
    exit();
}
?> 



<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

    <!--[if ie]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

  <title>Dressland | Dress for Success | Choose Language</title>
  <meta name="description" content="Corporate Clothing Solution | Dressland - Ihr Partner für Firmenbekleidung und Merchandising | Von der Konzeption über das Design, die Beschaffung, die Lagerung, die weltweite Distribution und den Betrieb Ihres E-Shops">
  <meta name="author" content="FelixSchlatter.com | Büro für Design, Werbung & Code">

 <meta name="viewport" content="width=device-width,initial-scale=0.3"> 

  <link rel="stylesheet" href="de/css/style.css">
	<link href='http://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css'>
<link rel="apple-touch-icon" href="de/apple-touch-icon-114x114-precomposed.png"/>

<script src="de/js/libs/modernizr-2.0.6.min.js"></script>
<script src="de/js/libs/jquery.min.js"></script>
<script src="de/js/plugins.js"></script>
<script src="de/js/script.js"></script>
  
	
</head>

<body>

  <div id="container">
	

	
    <header>
		
			
    </header>
		<div id="main" role="main">
	
		<div class="inner" id="oben">
			<div id="logo_dressland"><a href="index.html"><img alt="bild" src="de/img/blank.png" width="43" height="207" class="fixxxer" /></a></div>
			<div class="text" id="home">
		<div class="supertitel">
			<h1>Ihr Browser unterstützt keine Weiterleitungen</h1>
			<h1>Your Browser does not support redirections</h1>
			</div>
		<div class="lauftext"><h2>Für die Deutsche Version: <a href="http://de.dressland.ch">de.dressland.ch</a></h2></div>
		<div class="lauftext"><h2>For the english Version: <a href="http://en.dressland.ch">en.dressland.ch</a></h2></div>
		</div><!--! end of .text -->
	

		</div><!--! end of .inner #oben -->
		
		
		

      </div>
    </div>

  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->
  
</body>
</html>
