var shopItemList = [];

var ShopItem = function(id, name, cost, costType) {
    var temp = {
        id: id,
        name: name,
        cost: cost
    }
    shopItemList.push(temp);
    return temp;
}

var getShopItemByName = function(name){
    for(var i = 0; i<shopItemList.length; i++){
        if(shopItemList[i].name === name){
            return shopItemList[i];
        }
    }
    return 0;
}

var Shop = function(name, itemList, shopChange){
    var temp = {
        name: name,
        itemList: itemList,
        shopChange: shopChange || 1
    }
    return temp;
}

var xAttack = ShopItem(6, "X Attack", 3000);
var xClick = ShopItem(7, "X Click", 3000);
var luckyIncense = ShopItem(8, "Lucky Incense", 10000);
var itemMagnet = ShopItem(9, "Item Magnet", 6000);
var xExp = ShopItem(10, "X Exp", 15000);
var thunderStone = ShopItem(12, "Thunder Stone", 25000);
var fireStone = ShopItem(13, "Fire Stone", 25000);
var leafStone = ShopItem(14, "Leaf Stone", 25000);
var waterStone = ShopItem(15, "Water Stone", 25000);
var moonStone = ShopItem(16, "Moon Stone", 25000);
var tradeStone = ShopItem(17, "Trade Stone", 30000);
var eevee = ShopItem(18, "Eevee", 100000);
var porygon = ShopItem(19, "Porygon", 25000);
var mrMime = ShopItem(20, "Mr. Mime", 50000);
var jynx = ShopItem(21, "Jynx", 25000);
var lickitung = ShopItem(22, "Lickitung", 12500);
var lapras = ShopItem(30, "Lapras", 12500);
var aerodactyl = ShopItem(31, "Aerodactyl", 25000);
var hitmonchan = ShopItem(32, "Hitmonchan", 25000);
var hitmonlee = ShopItem(33, "Hitmonlee", 25000);
var fireEgg = ShopItem(23, "Charmander Egg", 50000);
var waterEgg = ShopItem(24, "Squirtle Egg", 50000);
var grassEgg = ShopItem(25, "Bulbasaur Egg", 50000);
var electricEgg = ShopItem(26, "Pikachu Egg", 50000);
var dragonEgg = ShopItem(27, "Dratini Egg", 75000);
var randomEgg = ShopItem(28, "Random Egg", 30000);

var decreaseShopPriceDeviation = function(){
    for( var i = 0; i<player.shopPriceDeviation.length; i++){
        player.shopPriceDeviation[i] = Math.max(1, player.shopPriceDeviation[i]-0.01);
    }
}

var getShopPriceDeviation = function(itemName){
    for( var i = 0; i<player.shopPriceDeviation.length; i++){
        if(player.shopPriceDeviation[i] === itemName){
            return player.shopPriceDeviation[i];
        }
    }
}

var buyShopItem = function(itemName){
    var item;
    if(item = getShopItemByName(itemName)){
        var id = item.id;
        if(enoughResources(item.cost*player.shopPriceDeviation[id])){
            payShopItem(item.cost*player.shopPriceDeviation[id]);
            player.shopPriceDeviation[id] = Math.floor(player.shopPriceDeviation[id] * 1.05 * 100)/100;
            gainItemByName(item.name)
            loadShop(curShop.name);
            updateStats();
        } else {
            var string = "You don't have enough money";
            $.notify(string);
        }
    }
}

var enoughResources = function(cost){
    cost = Math.floor(cost);
    return player.money >= cost;
}

var payShopItem = function(cost){
    cost = Math.floor(cost);
    player.money -= cost;
}

var ViridianCityShop = function(){ return Shop("Viridian City", [xAttack, xClick, randomEgg]); }
var PewterCityShop = function(){ return Shop("Pewter City", [xExp]); }
var CeruleanCityShop = function(){ return Shop("Cerulean City", [waterStone, xAttack, waterEgg]) }
var SaffronCityShop = function(){ return Shop("Saffron City", [moonStone, xClick, hitmonchan, hitmontop, lapras]); }
var LavenderTownShop = function(){ return Shop("Lavender Town", [itemMagnet, luckyIncense, leafStone, grassEgg]) }
var CeladonCityShop = function(){ return Shop("Celadon City", [eevee, porygon, jynx, mrMime, lickitung]) }
var VermillionCityShop = function(){ return Shop("Vermillion City", [thunderStone, xExp, electricEgg]) }
var FuchsiaCityShop = function(){ return Shop("Fuchsia City", [tradeStone, xExp, dragonEgg]) }
var CinnabarIslandShop = function(){ return Shop("Cinnabar Island", [fireStone, fireEgg, aerodactyl])}

    var curShop;

var loadShop = function(shopName){

    if(curShop = getShop(shopName)){
        showShop(curShop);
    }
}

var showShop = function(shop){
    var items = shop.itemList;
    hideAllViews();
    var html = "";
    html += "<h3 class='townName'>" + shop.name + " Shop</h3>"
    html += "<div class='row'>";
    for(var i = 0; i<items.length; i++){
        html += "<div data-itemName='" + items[i].name + "' class='col-sm-3 col-md-2 pokedexEntry shopItem'>";
        html += "<br><img class='center-block' src=images/items/" + items[i].id + ".png >" + items[i].name;
        if(shop.name === "Celadon City"){
            if(alreadyCaught(items[i].name)){
                html += "<img id=alreadyCaughtImage src=images/Pokeball.PNG>";
            }
        }

        html += "<br><br>";
        html += "<p style='margin-top:15px'>" + (items[i].cost*player.shopPriceDeviation[getShopItemByName(items[i].name).id]).toFixed(0);
        html += "<br>";
        html += getFullResourceName(items[i].costType) + "</p>";
        html += "</div>";
    }

    html += "</div>";
    $("#shopView").html(html);
    $(".tooltipShopItem").tooltipster({
            position: "bottom",
            delay:10
    });

    $("#shopView").show();
}

var getShop = function(townName){
    for(var i = 0; i<townList.length; i++){
        if(townList[i].name === townName){
            return townList[i].shop;
        }
    }
    return -1;
}

var getFullResourceName = function(type){
    if(type === "money"){
        return "coins";
    }
    if(type === "mine"){
        return "diamonds";
    }
}
