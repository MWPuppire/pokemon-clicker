var shopItemList = [];

var ShopItem = function(id, name, cost, costType) {
    var temp = {
        id: id,
        name: name,
        cost: cost,
        costType: costType
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

var xAttack = ShopItem(6, "X Attack", 3000, 'money');
var xClick = ShopItem(7, "X Click", 3000, 'money');
var luckyIncense = ShopItem(8, "Lucky Incense", 10000, 'money');
var itemMagnet = ShopItem(9, "Item Magnet", 6000, 'money');
var xExp = ShopItem(10, "X Exp", 15000, 'money' );
var thunderStone = ShopItem(12, "Thunder Stone", 25000, 'money');
var fireStone = ShopItem(13, "Fire Stone", 25000, 'money');
var leafStone = ShopItem(14, "Leaf Stone", 25000, 'money');
var waterStone = ShopItem(15, "Water Stone", 25000, 'money');
var moonStone = ShopItem(16, "Moon Stone", 25000, 'money');
var tradeStone = ShopItem(17, "Trade Stone", 30000, 'money');
var eevee = ShopItem(18, "Eevee", 100000, 'money');
var porygon = ShopItem(19, "Porygon", 25000, 'money');
var mrMime = ShopItem(20, "Mr. Mime", 50000, 'money');
var jynx = ShopItem(21, "Jynx", 25000, 'money');
var lickitung = ShopItem(22, "Lickitung", 12500, 'money');
var lapras = ShopItem(30, "Lapras", 12500, "money");
var aerodactyl = ShopItem(31, "Aerodactyl", 25000, "money");
var fireEgg = ShopItem(23, "Fire Egg", 50000, 'money');
var waterEgg = ShopItem(24, "Water Egg", 50000, 'money');
var grassEgg = ShopItem(25, "Grass Egg", 50000, 'money');
var fightingEgg = ShopItem(26, "Fighting Egg", 50000, 'money');
var electricEgg = ShopItem(27, "Electric Egg", 50000, 'money');
var dragonEgg = ShopItem(28, "Dragon Egg", 75000, 'money');
var randomEgg = ShopItem(29, "Random Egg", 30000, 'money');

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
        if(enoughResources(item.cost*player.shopPriceDeviation[id], item.costType)){
            payShopItem(item.cost*player.shopPriceDeviation[id], item.costType);
            player.shopPriceDeviation[id] = Math.floor(player.shopPriceDeviation[id] * 1.05 * 100)/100;
            gainItemByName(item.name)
            loadShop(curShop.name);
            updateStats();
        } else {
            var string = "You don't have enough " + item.costType;
            if( item.costType === "quest"){
                string += " points";
            }
            $.notify(string);
        }
    }
}

var enoughResources = function(cost, costType){
    cost = Math.floor(cost);
    if(costType === "money"){
        return player.money >= cost;
    }
    if(costType === "quest"){
        return player.questPoints >= cost;
    }
    return false;
}

var payShopItem = function(cost, costType){
    cost = Math.floor(cost);
    if(costType === "money"){
        player.money -= cost;
    }
    else if(costType === "quest"){
        player.questPoints -= cost;
    }
}

var ViridianCityShop = function(){ return Shop("Viridian City", [xAttack, xClick, randomEgg]); }
var PewterCityShop = function(){ return Shop("Pewter City", [xExp]); }
var CeruleanCityShop = function(){ return Shop("Cerulean City", [waterStone, xAttack, waterEgg]) }
var SaffronCityShop = function(){ return Shop("Saffron City", [moonStone, xClick, leafStone, fightingEgg, lapras]); }
var LavenderTownShop = function(){ return Shop("Lavender Town", [itemMagnet, luckyIncense, grassEgg]) }
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
    if(type === "quest"){
        return "quest points";
    }
    if(type === "mine"){
        return "diamonds";
    }
}
