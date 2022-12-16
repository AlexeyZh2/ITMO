<?php
require_once '../vendor/autoload.php';
// подключение скриптов, обеспечивающих автозагрузку классов


$url = $_SERVER['REQUEST_URI']; // строка запроса от клиента
var_dump($url);

$http_method = $_SERVER['REQUEST_METHOD'];
var_dump($http_method);

\Climbers\Kernel\Router::start();






