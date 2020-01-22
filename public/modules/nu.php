<?php
$conf = include('config.php');
$news = file_get_contents($conf->apis->nu->url);
$news = simplexml_load_string($news);
$news = json_encode($news);
print_r($news);
