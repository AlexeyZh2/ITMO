## Реализовать механизм регистрации и авторизации (для работы с БД использовать PDO)

1. Реализовать механизм регистрации нового пользователя. Пользователь вводит в форму телефон/почта/логин и пароль,
данные отправляются на сервер(метод post, не аякс). На сервере необходимо сохранить данные о пользователе в БД.
2. Реализовать механизм авторизации зарегистрированного пользователя. Пользователь вводит в форму телефон/почта/логин и пароль,
данные отправляются на сервер аякс запросом (метод post). На сервере необходимо авторизовать пользователя,
в случае успеха создать сессию пользователю, отправить информацию об этом клиенту (js).
Клиент (js) перенаправляет пользователя в личный кабинет ( window.location.replace('file_name.php') ).
В случае неудачной авторизации, отправить информацию об этом клиенту (js), клиент должен вывести информацию пользователю.

Хеширование пароля при регистрации:
$password = $_POST['password'];

$hash = password_hash($password, PASSWORD_DEFAULT);
в БД должен быть записан хеш пароля, не пароль в открытом виде

Сравнение введенного в форму пароля с хешем из БД (при авторизации):
$password = $_POST['password'];

if (password_verify($password, $hashFromDB)) {
    // пароли совпали
}

