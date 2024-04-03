const has_tooltips = document.querySelectorAll('.has-tooltip')

has_tooltips.forEach((has_tooltip) => {
    const div = document.createElement('div')
    div.classList.add('tooltip')
    div.innerText = has_tooltip.title
    // позиционирование сделано относительно документа на основе фактического положения кнопок на странице
    div.style.position = 'absolute'
    div.style.left = has_tooltip.getBoundingClientRect().x + "px"
    div.style.top = has_tooltip.style.bottom
    has_tooltip.insertAdjacentElement('afterEnd', div)
    has_tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        // закрываем все подсказки, не относящиеся к нажатой кнопке
        tooltips.forEach((tooltip) => {
            if (has_tooltip.nextElementSibling != tooltip) {
                tooltip.classList.remove('tooltip_active')
            }
        })
        // если подсказка для нажатой кнопки закрыта, то откроется, и наоборот
        if (has_tooltip.nextElementSibling.classList.contains('tooltip_active')) {
            has_tooltip.nextElementSibling.classList.remove('tooltip_active')
        } else {
            has_tooltip.nextElementSibling.classList.add('tooltip_active')
        }

    })
})

const tooltips = document.querySelectorAll('.tooltip')