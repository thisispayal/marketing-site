<?php

require_once('Sitemap-github.php');

$m = new Sitemap('http://www.vigilantmedical.net');
$m->setPath('./');
$pages = scandir('./');
foreach ($pages as $page){
  $m->addItem('/' . $page);
}
$m->createSitemapIndex('./');

?>
