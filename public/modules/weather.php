<?php
$conf = include('config.php');
$data = file_get_contents($conf->apis->weather->url);
//print_r($data);
