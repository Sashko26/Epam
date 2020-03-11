function future() {
    let children = +prompt("Сколько детей хочешь, мммм?")
    let professions = ["Бухгалтер", "Программист", "Художник", "Python developer"]
    let profession = prompt("Кем хочешь быть?")
    if (!professions.includes(profession)){
        profession = "Работяга на заводе"
    }
    let cities = ["Киев", "Варшава", "Краков", "Прага", "Берлин"]
    let city = prompt("В какой город хочешь?")
    if (!cities.includes(city)){
        profession = "Малиновка"
    }
    let partner_name = prompt("Введите имя партнера?")
    alert(`Будешь жить в ${city}, работать ${profession} и у тебя с ${partner_name} будет ${children} детей`)
}

future()