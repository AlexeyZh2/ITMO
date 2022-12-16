# Добавление обработчиков через addEventListener
## Обработчик события - именованная функция

    let element = document.getElementById("element");
    element.addEventListener("click", handler); 

    function handler(event) {
        console.log(event, this);
        this.removeEventListener("click", handler); // удаление обработчика события
    }

## Обработчик события - именованная функция, передача аргументов в функцию

    let element = document.getElementById("element");
    // если не нужно будет удалять обработчик:
    element.addEventListener("click", handler.bind(element, "аргументы в handler"), {once: true}); // {once: true} - вызов не более одного раза
    // если нужно будет удалять обработчик:
    let handlerWithArgs = handler.bind(element, "аргументы в handler");
    element.addEventListener("click", handlerWithArgs);

    function handler(some_data, event) {
        console.log("some_data " + some_data); // аргументы, переданные через bind
        console.log("event", event); // информация о событии
        console.log("this", this);
        this.removeEventListener("click", secondHandlerInVar); // удаление обработчика события
    }

## Обработчик события - анонимная функция без сохранения в переменную
Такой вариант нельзя использовать, если нужно удаление обработчика события.
Если нужна возможность удаления обработчика функцию нужно сохранить в переменную.

    let element = document.getElementById("element");
    element.addEventListener("click", (event)=>{
        console.log("event", event);
        // анонимная стрелочная функция: this - window,
        // анонимная функция:  this - element
        console.log("this", this);
    });

# Добавление обработчиков через on+название_события
## Обработчик события - именованная функция

    let element = document.getElementById("element");
    element.onclick = handler;

    function handler(event) {
        console.log("event", event);
        console.log("this", this); // this - element
        // удаление обработчика события
        element.onclick = null;
    }

## Обработчик события - именованная функция, передача аргументов в функцию
В такой ситуации лучше использовать addEventListener!

    let element = document.getElementById("element");
    element.onclick = handler.bind(element, "аргументы в handler"); 
    
    function handler(arg, event) {
        console.log("arg " + arg);
        console.log("event", event);
        console.log("this", this);
        // удаление обработчика события
        element.onclick = null;
    }

## Обработчик события - анонимная функция без сохранения в переменную

    let element = document.getElementById("element");
    element.onclick = (event) => {
        console.log("event", event);
        // для анонимных стрелочных this - window,
        // для анонимных this - element
        console.log("this", this);
        // удаление обработчика события
        element.onclick = null;
    };