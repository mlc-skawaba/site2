<?php
	
ini_set('display_erros', 0);
error_reporting(E_ALL ^ E_NOTICE);
date_default_timezone_set('Asia/Tokyo');
	
require_once './vendor/autoload.php';

define('__APPROOT__', dirname(__DIR__));

$parser = new \cebe\markdown\GithubMarkdown();

$tplDir = realpath(__APPROOT__.'/src/templates/');
$tpl = new PhpRenderer($tplDir, [ 'markdown' => $parser ]);

$data = file_get_contents('https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes');
$data = json_decode($data, true);

foreach($data['data'] as $item) {
    if ( strlen($item['recipe_code'] ?? '') > 0 ) {
        if  ($item['lang'] === 'ja' ) {
            $filename = $item['recipe_code'] . '.html';
            $content = $tpl->fetch('/page/recipe.phtml', $item);
            $r = file_put_contents(__APPROOT__.'/dist/' . $filename, $content, LOCK_EX);
        }
    }
}

