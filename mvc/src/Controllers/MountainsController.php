<?php
namespace Climbers\Controllers;


use Climbers\Db\MountainsDb;
use Climbers\Kernel\Controller;

class MountainsController extends Controller {

    private $mountains_db;

    public function __construct()
    {
        $this->mountains_db = new MountainsDb();
    }

    public function mountains(){
        $mountains = $this->mountains_db->getMountains();
        echo $this->getTemplate('mountains.php', ['mountains' => $mountains]);
    }
}
