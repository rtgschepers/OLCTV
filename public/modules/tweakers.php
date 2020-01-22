<?php
$conf = include('config.php');
$data = file_get_contents($conf->apis->tweakers->url);
$data = simplexml_load_string($data);
$data = json_encode($data);
print_r($data);
