<?php
$conf = include('config.php');

$context = stream_context_create(array(
    'http' => array(
        'header' => "Authorization: Basic " . base64_encode($conf->apis->ns->user . ":" . $conf->apis->ns->pass)
    )
));

$data = file_get_contents($conf->apis->ns->url, false, $context);
$data = simplexml_load_string($data);
$data = json_encode($data);
print_r($data);
