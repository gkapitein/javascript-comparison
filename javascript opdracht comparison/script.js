const age = 18;
const name = "Sarah";
const totalAmount = 27;


if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting op je biertje");
}

if (name === "Sarah" || name === "Bram") {
    console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
    console.log("Je doet niet mee aan onze ludieke Sarah Abraham actie");
}

if (totalAmount >= 100) {
    console.log("gratis flesje champagne.");
} else if (totalAmount > 50) {
    console.log("gratis portie nachos");
} else if (totalAmount > 25) {
    console.log("gratis (vega)bitterballen");
} else {
    console.log("Helaas geen korting, maar leuk dat je er bent");
}