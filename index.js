// Write your code here
class Breakfast {
    constructor (food, drink) {
        this.food = food;
        this.drink = drink;

    }
}
let Breakfast2 = new Breakfast('Anjera', 'tea');


class Lunch {
    constructor (salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
let Lunch2 = new Lunch("Broccoli", "Camel", "Vanilla");

class Dinner {
    #dessert;
    constructor (salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;

    }
}
let Dinner2 = new Dinner('sukuma', 'mbuzi', 'miwa', "cake");
