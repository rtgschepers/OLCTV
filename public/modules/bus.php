<?php
$conf = include('config.php');
$data = file_get_contents($conf->apis->bus->url);
print_r($data);
