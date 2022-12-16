### `data-*` атрибуты позволяют хранить дополнительную информацию в стандартных элементах HTML

## Синтаксис HTML

        <div class="item" data-id="3412" data-category="phone">
            содержимое элемента
        </div>

## Доступ в JavaScript
Осуществляется через свойство dataset

    const itemDiv = document.querySelector('.item');

    itemDiv.dataset.id // "3412"
    itemDiv.dataset.category // "phone"

    
