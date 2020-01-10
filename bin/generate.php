<?php

require_once './vendor/autoload.php';

$parser = new \cebe\markdown\GithubMarkdown();

$tplDir = realpath(dirname(__DIR__).'/src/templates/');
$tpl = new PhpRenderer($tplDir, [ 'markdown' => $parser ]);

$data = file_get_contents('https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes');
$data = json_decode($data, true);

foreach($data['data'] as $item) {
    if ( strlen($item['recipe_code'] ?? '') > 0 ) {
        if  ($item['lang'] === 'ja' ) {
            $filename = $item['recipe_code'] . '.html';
            $content = $tpl->fetch('/page/recipe.phtml', $item);
            $r = file_put_contents('./htdocs/' . $filename, $content, LOCK_EX);
        }
    }
}

