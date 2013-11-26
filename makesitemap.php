<?php

require_once('sitemap.php');

$m = new Sitemap('http://www.vigilantmedical.net');
$m->setPath('./');
$pages = scandir('./');
foreach ($pages as $page){
  $m->addItem('/' . $page);
}
$m->createSitemapIndex('./');

?>
