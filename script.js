var mdp;

/*var mdp = prompt("Quel est le mot de passe ?");

mdp == "0000" ? alert("Bienvenue") : location.href = ("non.html");*/

while (true) {
    var mdp = prompt("Quel est le mot de passe ?");

    if (mdp == "0000") {
        break;
    }
        alert("réessayez...");
}

alert("Bienvenue")
