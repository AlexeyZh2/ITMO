<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h2>Горы</h2>
<?php foreach ($mountains as $mountain): ?>
    <h3><?= $mountain['name'] ?></h3>
    <a href="mountain.php?id=<?=$mountain['id']?>">Перейти</a>
<?php endforeach; ?>
</body>
</html>