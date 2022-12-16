<?php

namespace Climbers\Db;

use Climbers\Kernel\DBConnection;
use PDO;

class MountainsDb
{
    private $dbConnection;

    public function __construct(){
        $this->dbConnection = DbConnection::getInstance()->getConnection();
    }


    public function getMountains(){
        $sql = "SELECT * FROM tb_mountains;";
        $statement = $this->dbConnection->prepare($sql);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}