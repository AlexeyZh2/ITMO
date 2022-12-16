<?php
namespace Climbers\Controllers;

use Climbers\Kernel\Controller;

class IndexController extends Controller {
    public function main(){
        echo $this->getTemplate('main.php');
    }
}