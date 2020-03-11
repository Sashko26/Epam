function future() {
    let children = prompt("Скільки дітей хочеш?")
    let professions = ["Програміст", "Фермер", "Художник", "Маркетолог"]
    let profession = prompt("Ким хочеш стати?")
    if (!professions.includes(profession)){
        profession = "Працівник на заводі, який приходить з роботи і грає в танки."
    }
    let cities = ["Київ", "Варшава", "Бершадь", "Нью-Йорк", "Баланівка"]
    let city = prompt("В яке місто хочеш?")
    if (!cities.includes(city)){
        city = "Афіни"
    }
    let partner_name = prompt("Введіть ім'я партнера?")
    alert(`Будеш жити в ${city}, працювати ${profession} и в тебя з ${partner_name} будет ${children} детей`)
}

future()