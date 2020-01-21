<?php

ini_set('display_erros', 0);
error_reporting(E_ALL ^ E_NOTICE);
date_default_timezone_set('Asia/Tokyo');

require_once './../vendor/autoload.php';

define('__APPROOT__', dirname(__DIR__));

$data = file_get_contents('https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/columns/1');
$data = json_decode($data, true);

$tplDir = realpath(__APPROOT__.'/src/templates/');
$tpl = new PhpRenderer($tplDir, [ 'markdown' => $parser ]);
echo $tpl->fetch('/page/column.phtml', $data);
