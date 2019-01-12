var gymPokemonIndex = 0;
var currentGym;
var counter;

var Gym = function(leaderName,town,pokemons,badgeReward,moneyReward,badgeReq){
    var temp = {
        leaderName: leaderName,
        town: town,
        pokemons: pokemons,
        badgeReward: badgeReward,
        moneyReward: moneyReward,
        badgeReq: badgeReq,
        timeLimit: 30*100,
        timeLeft: 30*100
    }
    return temp;
}

var GymPokemon = function(name, health, level){
    var temp = {
        name: name,
        health: health,
        maxHealth: health,
        level: level
    }
    return temp;
}


var gymNameList = [];
var getGymNames = function(){
    gymNameList = [];
    for( var i = 0; i<11; i++){
        if(townList[i].gym !== null ){
            if(townList[i].gym.town !== undefined){
                gymNameList.push(townList[i].gym.town);
            }
        }
    }
    return gymNameList;
 }


var PewterCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Geodude", 550, 12));
    pokemonList.push(GymPokemon("Onix", 1110, 14));
    return Gym("Brock", "Pewter City Gym", pokemonList, "Boulder", 250, 0);
}

var CeruleanCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Staryu", 4000, 18));
    pokemonList.push(GymPokemon("Starmie", 6000, 21));
    return Gym("Misty", "Cerulean City Gym", pokemonList, "Cascade", 500, 1);
}

var VermillionCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Voltorb", 9780, 21));
    pokemonList.push(GymPokemon("Pikachu", 13040, 18));
    pokemonList.push(GymPokemon("Raichu", 14775, 24));
    return Gym("Lt. Surge", "Vermillion City Gym", pokemonList, "Thunder", 1000, 2);
}

var CeladonCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Victreebel", 17830, 29));
    pokemonList.push(GymPokemon("Tangela", 20210, 24));
    pokemonList.push(GymPokemon("Vileplume", 21400, 29));
    return Gym("Erika", "Celadon City Gym", pokemonList, "Rainbow", 1500 ,3);
}

var SaffronCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Kadabra", 16810, 38));
    pokemonList.push(GymPokemon("Mr. Mime", 18340, 37));
    pokemonList.push(GymPokemon("Venomoth", 19870, 38));
    pokemonList.push(GymPokemon("Alakazam", 21400, 43));
    return Gym("Sabrina", "Saffron City Gym", pokemonList, "Marsh", 2500, 4);
}

var FuchsiaCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Koffing", 23333, 37));
    pokemonList.push(GymPokemon("Muk", 24000, 39));
    pokemonList.push(GymPokemon("Koffing", 26667, 37));
    pokemonList.push(GymPokemon("Weezing", 30000, 43));
    return Gym("Koga", "Fuchsia City Gym", pokemonList, "Soul", 3500, 5);
}

var CinnabarIslandGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Growlithe", 27870, 42));
    pokemonList.push(GymPokemon("Ponyta", 30960, 40));
    pokemonList.push(GymPokemon("Rapidash", 34060, 42));
    pokemonList.push(GymPokemon("Arcanine", 37155, 47));
    return Gym("Blaine", "Cinnabar Island Gym", pokemonList, "Volcano", 5000, 6);
}

var ViridianCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Rhyhorn", 27460, 45));
    pokemonList.push(GymPokemon("Dugtrio", 29960, 42));
    pokemonList.push(GymPokemon("Nidoqueen", 29960, 44));
    pokemonList.push(GymPokemon("Nidoking", 32452, 45));
    pokemonList.push(GymPokemon("Rhydon", 34950, 50));
    return Gym("Giovanni", "Viridian City Gym", pokemonList, "Earth", 6000, 7);
}

var EliteLorelei = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Dewgong", 30810, 52));
    pokemonList.push(GymPokemon("Cloyster", 33380, 51));
    pokemonList.push(GymPokemon("Slowbro", 35950, 52));
    pokemonList.push(GymPokemon("Jynx", 38510, 54));
    pokemonList.push(GymPokemon("Lapras", 44182, 54));
    return Gym("Elite Lorelei", "Indigo Plateau Gym", pokemonList, "E1", 7500, 8);
}

var EliteBruno = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Onix", 32950, 51));
    pokemonList.push(GymPokemon("Hitmonchan", 35300, 53));
    pokemonList.push(GymPokemon("Hitmonlee", 37660, 53));
    pokemonList.push(GymPokemon("Onix", 40010, 54));
    pokemonList.push(GymPokemon("Machamp", 42360, 56));
    return Gym("Elite Bruno", "Indigo Plateau Gym", pokemonList, "E2", 7500, 9);
}

var EliteAgatha = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Gengar", 35045, 54));
    pokemonList.push(GymPokemon("Golbat", 36660, 54));
    pokemonList.push(GymPokemon("Haunter", 48950, 53));
    pokemonList.push(GymPokemon("Arbok", 41241, 56));
    pokemonList.push(GymPokemon("Gengar", 45824, 58));
    return Gym("Elite Agatha", "Indigo Plateau Gym", pokemonList, "E3", 7500, 10);
}

var EliteLance = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Gyarados", 37320, 56));
    pokemonList.push(GymPokemon("Dragonair", 39390, 54));
    pokemonList.push(GymPokemon("Dragonair", 41160, 54));
    pokemonList.push(GymPokemon("Aerodactyl", 43540, 58));
    pokemonList.push(GymPokemon("Dragonite", 45610, 60));
    return Gym("Elite Lance", "Indigo Plateau Gym", pokemonList, "E4", 7500, 11);
}

var Champion = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Pidgeot", 30600, 59));
    pokemonList.push(GymPokemon("Alakazam", 36720, 57));
    pokemonList.push(GymPokemon("Rhydon", 42835, 59));
    if( player.starter === "Charmander"){
        pokemonList.push(GymPokemon("Arcanine", 42835, 59));
        pokemonList.push(GymPokemon("Exeggutor", 45895, 61));
        pokemonList.push(GymPokemon("Blastoise", 61190, 63));
    }

    if( player.starter === "Squirtle"){
        pokemonList.push(GymPokemon("Gyarados", 42835, 59));
        pokemonList.push(GymPokemon("Arcanine", 45895, 61));
        pokemonList.push(GymPokemon("Venusaur", 61190, 63));
    }

    if( player.starter === "Bulbasaur"){
        pokemonList.push(GymPokemon("Exeggutor", 42835, 59));
        pokemonList.push(GymPokemon("Gyarados", 45895, 61));
        pokemonList.push(GymPokemon("Charizard", 61190, 63));
    }
    return Gym("Champion Blue", "Indigo Plateau Gym", pokemonList, "Champion", 10000, 12);
}

var VioletCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Pidgey", 0, 7));
    pokemonList.push(GymPokemon("Pidgetto", 0, 9));
    return Gym("Falkner", "Violet City Gym", pokemonList, "Zephyr", 0, 13);
}

var AzaleaTownGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Metapod", 0, 14));
    pokemonList.push(GymPokemon("Kakuna", 0, 14));
    pokemonList.push(GymPokemon("Scyther", 0, 16));
    return Gym("Bugsy", "Azalea Town Gym", pokemonList, "Insect", 0, 14);
}

var GoldenrodCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Clefairy", 0, 18));
    pokemonList.push(GymPokemon("Miltank", 0, 20));
    return Gym("Whitney", "Goldenrod City Gym", pokemonList, "Plain", 0, 15);
}

var EcruteakCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Gastly", 0, 21));
    pokemonList.push(GymPokemon("Haunter", 0, 21));
    pokemonList.push(GymPokemon("Haunter", 0, 23));
    pokemonList.push(GymPokemon("Gengar", 0, 25));
    return Gym("Morty", "Ecruteak City Gym", pokemonList, "Fog", 0, 16);
}

var CianwoodCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Primeape", 0, 27));
    pokemonList.push(GymPokemon("Poliwrath", 0, 30));
    return Gym("Chuck", "Cianwood City Gym", pokemonList, "Storm", 0, 17);
}

var OlivineCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Magnemite", 0, 30));
    pokemonList.push(GymPokemon("Magnemite", 0, 30));
    pokemonList.push(GymPokemon("Steelix", 0, 35));
    return Gym("Jasmine", "Olivine City Gym", pokemonList, "Mineral", 0, 18);
}

var MahoganyTownGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Seel", 0, 27));
    pokemonList.push(GymPokemon("Dewgong", 0, 29));
    pokemonList.push(GymPokemon("Piloswine", 0, 31));
    return Gym("Pryce", "Mahogany Town Gym", pokemonList, "Glacier", 0, 19);
}

var BlackthornCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Dragonair", 0, 37));
    pokemonList.push(GymPokemon("Dragonair", 0, 37));
    pokemonList.push(GymPokemon("Dragonair", 0, 37));
    pokemonList.push(GymPokemon("Kingdra", 0, 40));
    return Gym("Clair", "Blackthorn City", pokemonList, "Clair", 0, 20);
}

var EliteWill = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Xatu", 0, 40));
    pokemonList.push(GymPokemon("Jynx", 0, 41));
    pokemonList.push(GymPokemon("Exeggutor", 0, 41));
    pokemonList.push(GymPokemon("Slowbro", 0, 41));
    pokemonList.push(GymPokemon("Xatu", 0, 42));
    return Gym("Will", "Johto League", pokemonList, "Johto E1", 0, 21);
}

var EliteKoga = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Ariados", 0, 40));
    pokemonList.push(GymPokemon("Venomoth", 0, 41));
    pokemonList.push(GymPokemon("Forretress", 0, 43));
    pokemonList.push(GymPokemon("Muk", 0, 42));
    pokemonList.push(GymPokemon("Crobat", 0, 44));
    return Gym("Koga", "Johto League", pokemonList, "Johto E2", 0, 22);
}

var JohtoEliteBruno = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Hitmontop", 0, 42));
    pokemonList.push(GymPokemon("Hitmonlee", 0, 42));
    pokemonList.push(GymPokemon("Hitmonchan", 0, 42));
    pokemonList.push(GymPokemon("Onix", 0, 43));
    pokemonList.push(GymPokemon("Machamp", 0, 46));
    return Gym("Bruno", "Johto League", pokemonList, "Johto E3", 0, 23);
}

var Karen = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Umbreon", 0, 42));
    pokemonList.push(GymPokemon("Vileplume", 0, 42));
    pokemonList.push(GymPokemon("Gengar", 0, 45));
    pokemonList.push(GymPokemon("Murkrow", 0, 44));
    pokemonList.push(GymPokemon("Houndoom", 0, 47));
    return Gym("Karen", "Johto League", pokemonList, "Johto E4", 0, 24);
}

var ChampionLance = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Gyarados", 0, 44));
    pokemonList.push(GymPokemon("Dragonite", 0, 47));
    pokemonList.push(GymPokemon("Dragonite", 0, 47));
    pokemonList.push(GymPokemon("Aerodactly", 0, 46));
    pokemonList.push(GymPokemon("Charizard", 0, 46));
    pokemonList.push(GymPokemon("Dragonite",0 , 50));
    return Gym("Champion Lance", "Johto League", pokemonList, "Johto Champion", 0, 25);
}

var RustboroCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Geodude", 0, 14));
    pokemonList.push(GymPokemon("Nosepass", 0, 15));
    return Gym("Roxanne", "Rustboro City Gym", pokemonList, "Stone", 0, 26);
}

var DewfordTownGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Machop", 0, 17));
    pokemonList.push(GymPokemon("Makuhita", 0, 18));
    return Gym("Brawly", "Dewford Gym", pokemonList, "Knuckle", 0, 27);
}

var MauvilleCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Magnemite", 0, 22));
    pokemonList.push(GymPokemon("Voltorb", 0, 20));
    pokemonList.push(GymPokemon("Magneton", 0, 23));
    return Gym("Wattson", "Mauville Gym", pokemonList, "Dynamo", 0, 28);
}

var LavaridgeTownGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Slugma", 0, 26));
    pokemonList.push(GymPokemon("Slugma", 0, 26));
    pokemonList.push(GymPokemon("Torkoal", 0, 28));
    return Gym("Flannery", "Lavaridge Town", pokemonList, "Heat", 0, 29);
}

var PetalburgCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Slaking", 0, 28));
    pokemonList.push(GymPokemon("Vigoroth", 0, 30));
    pokemonList.push(GymPokemon("Slaking", 0, 31));
    return Gym("Norman", "Petalburg City", pokemonList, "Balance", 0, 30);
}

var FortreeCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Swellow", 0, 31));
    pokemonList.push(GymPokemon("Pelipper", 0, 30));
    pokemonList.push(GymPokemon("Skarmory", 0, 32));
    pokemonList.push(GymPokemon("Altaria", 0, 34));
    return Gym("Winona", "Fortree City", pokemonList, "Feather", 0, 31);
}

var MossdeepCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Solrock", 0, 42));
    pokemonList.push(GymPokemon("Lunatone", 0, 42));
    return Gym("Tate & Liza", "Mossdeep City", pokemonList, "Mind", 0, 32);
}

var SootopolisCityGym = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Luvdisc", 0, 40));
    pokemonList.push(GymPokemon("Whiscash", 0, 42));
    pokemonList.push(GymPokemon("Sealeo", 0, 40));
    pokemonList.push(GymPokemon("Seaking", 0, 42));
    pokemonList.push(GymPokemon("Milotic", 0, 43));
    return Gym("Wallace", "Sootopolis City", pokemonList, "Rain", 0, 33);
}

var EliteSidney = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Mightyena", 0, 46));
    pokemonList.push(GymPokemon("Shiftry", 0, 48));
    pokemonList.push(GymPokemon("Cacturne", 0, 46));
    pokemonList.push(GymPokemon("Sharpedo", 0, 48));
    pokemonList.push(GymPokemon("Absol", 0, 49));
    return Gym("Sidney", "Hoenn League", pokemonList, "Hoenn E1", 0, 34);
}

var ElitePhoebe = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Dusclops", 0, 48));
    pokemonList.push(GymPokemon("Banette", 0, 49));
    pokemonList.push(GymPokemon("Sableye", 0, 50));
    pokemonList.push(GymPokemon("Banette", 0, 49));
    pokemonList.push(GymPokemon("Dusclops", 0, 51));
    return Gym("Phoebe", "Hoenn League", pokemonList, "Hoenn E2", 0, 35);
}

var EliteGlacia = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Glacie", 0, 50));
    pokemonList.push(GymPokemon("Sealeo", 0, 50));
    pokemonList.push(GymPokemon("Sealeo", 0, 50));
    pokemonList.push(GymPokemon("Glacie", 0, 52));
    pokemonList.push(GymPokemon("Walrein", 0, 53));
    return Gym("Glacia", "Hoenn League", pokemonList, "Hoenn E3", 0, 36);
}

var EliteDrake = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Shelgon", 0, 52));
    pokemonList.push(GymPokemon("Altaria", 0, 54));
    pokemonList.push(GymPokemon("Flygon", 0, 53));
    pokemonList.push(GymPokemon("Flygon", 0, 53));
    pokemonList.push(GymPokemon("Salamence", 0, 55));
    return Gym("Drake", "Hoenn League", pokemonList, "Hoenn E4", 0, 37);
}

var HoennChampion = function(){
    var pokemonList = [];
    pokemonList.push(GymPokemon("Skarmory", 0, 57));
    pokemonList.push(GymPokemon("Claydol", 0, 55));
    pokemonList.push(GymPokemon("Aggron", 0, 56));
    pokemonList.push(GymPokemon("Cradily", 0, 56));
    pokemonList.push(GymPokemon("Armaldo", 0, 56));
    pokemonList.push(GymPokemon("Metagross", 0, 58));
    return Gym("Champion Steven", "Hoenn League", pokemonList, "Hoenn Champion", 0, 38);
}

var loadGym = function(townId){
    clearInterval(counter);
    gymPokemonIndex = 0;
    currentGym = getTown(townId).gym;
    currentGym.timeLeft = currentGym.timeLimit;
    spawnGymPokemon(gymPokemonIndex);

    counter = setInterval(timer, 100);
}

var timer = function(){
    if (currentGym.timeLeft <= 0){
        clearInterval(counter);

        if (inProgress == 2){
            inProgress = 0;
            moveToTown(currentGym.town.slice(0,-4));
            currentGym.timeLeft = currentGym.timeLimit;
            $.notify("Train harder and try again!", 'error')
            $.notify("You couldn't defeat "+currentGym.leaderName+ " in time.", 'error');
        }
    }
    currentGym.timeLeft-=10;
        $("#timer").html((currentGym.timeLeft/100)+"/"+currentGym.timeLimit/100);
    }

var updateGym = function(){

    hideAllViews();
    $("#gymView").show();

    if (curEnemy.health <0){
        curEnemy.health = 0;
    }
    if(curEnemy.health == 0 ){
        gymEnemyDefeated(currentGym);
    }

    var html = "";
    html += currentGym.leaderName + "<br>";
    html += "<img src='images/gyms/"+currentGym.leaderName+".png'><br><br>";

    for (var i = 0; i<gymPokemonIndex; i++){
        html += "<img class='gymPokeball defeatPokeball' src=images/gyms/pokeball.png>";
    }
    for (var i = 0; i<currentGym.pokemons.length-gymPokemonIndex; i++){
        html += "<img class='gymPokeball' src=images/gyms/pokeball.png>";
    }
    $("#gymTrainer").html(html);

    if (curEnemy.alive){

        if(alreadyCaughtShiny(curEnemy.name)){
             $("#gymEnemyInfo").html("<br>"+curEnemy.name+" <img id=alreadyCaughtImage src=images/shinyPokeball.PNG><br><img id=gymEnemy src=images/pokemon/"+curEnemy.id+".png>");
        } else if(alreadyCaught(curEnemy.name)){
            $("#gymEnemyInfo").html("<br>"+curEnemy.name+" <img id=alreadyCaughtImage src=images/Pokeball.PNG><br><img id=gymEnemy src=images/pokemon/"+curEnemy.id+".png>");
        }
        else{
            $("#gymEnemyInfo").html("<br>"+curEnemy.name+"<br><img id=gymEnemy src=images/pokemon/"+curEnemy.id+".png>");
        }
    }
        $("#gymHealthBar").width(100*curEnemy.health/curEnemy.maxHealth+"%");
        $("#gymHealthDisplay").html(curEnemy.health+"/"+curEnemy.maxHealth);

    if(curEnemy.health != 0){
        inProgress = 2;
    }
}

var gymEnemyDefeated = function(){
    log("You defeated "+currentGym.leaderName+"'s " + curEnemy.name);
    gymPokemonIndex++;

    var id = getPokemonByName(curEnemy.name).id-1;
    player.defeatNumbers[id]++;
    gainExp(curEnemy.exp, curEnemy.level, true);
    progressEgg(Math.floor(Math.sqrt(currentGym.badgeReq*3 + 1)));
    if(currentGym.pokemons[gymPokemonIndex] != null){
        spawnGymPokemon(gymPokemonIndex);
    }
    else {
        gymDefeated();
    }
}

var gymDefeated = function(){
    clearInterval(counter);
    log("Congratulations, you have defeated "+ currentGym.leaderName+"!");
    player.gymsDefeated[currentGym.badgeReq]++;
    inProgress = 0;
    currentGym.timeLeft = currentGym.timeLimit;
    var first = !alreadyGotBadge(currentGym.badgeReward);
    if(first){
        player.gymBadges.push(currentGym.badgeReward);
        player.money += currentGym.moneyReward;
    } else {
        player.money += currentGym.moneyReward/10;
    }

    var town = currentGym.town.slice(0,-4);

    moveToTown(town);
    showGymDefeated(first, town);

    updateAll();
}

var showGymDefeated = function(first, town){
    var e4 = 0;
    if( town === "Indigo Plateau"){
        e4 = 1;
    }

    html = "";

    if(first){
        html += "You have defeated " + currentGym.leaderName+"!<br>" ;
        if( e4){
            html += "Prize money: $" + currentGym.moneyReward;
            html += "<br><br>Defeat this elite four member again for 10% of its original money reward!"
        }
        else {
            html += "<img id='badgeReward' src=images/gyms/badges/"+currentGym.badgeReward+"Badge.png><br>";
            html += "You have earned the "+currentGym.badgeReward+ " Badge!<br>";
            html += "You can now train your pokemon to level " + (1+player.gymBadges.length)*10 + "<br>";
            html += "Prize money: $" + currentGym.moneyReward;
            html += "<br><br>Defeat this gym again to earn 10% of its original money reward!"
        }

    } else {
        html += "You have defeated " + currentGym.leaderName+" again!<br>" ;
        html += "Prize money: " + currentGym.moneyReward+ " x 10% = $"+ currentGym.moneyReward/10;
    }

    if(!e4){
        html += "<div class='row'><button class='gym leftTownButton btn btn-primary col-sm-2' id='"+town+" Gym'>Retry!</button></div>";
    } else {
        html += "<div class='row'><button class='gym leftTownButton btn btn-primary col-sm-2' id='"+currentGym.leaderName+" Gym'>Retry!</button></div>";
    }



    $("#gymDefeatedBody").html(html);
    safelyOpen(function(){$("#gymModal").modal('show')});
}

var alreadyGotBadge = function(badgeName){
    for( var i = 0; i<player.gymBadges.length; i++){
        if (player.gymBadges[i] == badgeName){
            return true;
        }
    }
    return false;
}

var spawnGymPokemon = function(pokemonIndex){
    curEnemy.name = currentGym.pokemons[pokemonIndex].name;
    curEnemy.id = getPokemonByName(curEnemy.name).id;
    curEnemy.health = currentGym.pokemons[pokemonIndex].health;
    curEnemy.maxHealth = currentGym.pokemons[pokemonIndex].maxHealth;
    curEnemy.level = currentGym.pokemons[pokemonIndex].level;
    curEnemy.exp = getPokemonByName(curEnemy.name).baseXpGain;
    curEnemy.reward = 0;
    curEnemy.alive = true;
    curEnemy.route = 0;
    curEnemy.catchRate = 0;
    var possibleType = getPokemonByName(curEnemy.name).type;
    if(possibleType != undefined){
        curEnemy.type = possibleType;
    } else {
        curEnemy.type = ['normal'];        
    }
    updateGym();
}

var showGymBadges = function() {
    for (var i = 0; i<player.gymBadges.length; i++){
        $("#"+player.gymBadges[i]+"Badge").fadeTo("slow",1);
    }
}
