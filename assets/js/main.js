// ======================= lev1_1: JavaScript this =========

// Teste den Code aus dem Kommentar.
// Ergänze das fehlende this, damit der Code funktioniert.
// Verwende dann console.log(person.fullName());

let person1 = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};

console.log(person1.fullName());

// ======================= lev1_2: JavaScript this [object Object] =========

// Verwende den Code aus dem Kommentarbereich.
// Baue in der Funktion profil deines Objektes ein hübsch formatiertes Profil der Person aus:

let person2 = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `Name: ${this.vorname} <br> Nachname: ${this.nachname} <br> Alter: ${this.alter} <br> Familienstand: ${this.familienstand} <br> Größe: ${this.groesse} <br>`;
  },
};

//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person2").innerHTML = person2.profil();

// ======================= lev1_3: JavaScript this =========
// Verwende den Code aus dem Kommentarbereich.
// Ergänze an den korrekten Stellen this, damit der Code funktioniert.
// Lies über JavaScript call() nach, falls du nicht weiterkommst.

let personFunction = {
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};

let personObjekt = {
  vorname: "Anton",
  nachname: "Nüssler",
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(
  personObjekt
)}</p>`;

document.getElementById("person3").innerHTML = anzeigeImHTMLDokument;

// ======================= lev1_4: JavaScript this =========

// Verwende den Code aus dem Kommentarbereich.
// Was sehen wir, wenn wir fahrrad(), obj1.fahrrad(), obj2.fahrrad() aufrufen?

function fahrrad() {
  console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad();
obj1.fahrrad();
obj2.fahrrad();
