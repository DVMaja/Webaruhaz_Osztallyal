import Termekek from "./Classes/Termekek.js";
import { adatLISTA } from "./Adatok/adat.js";
import Aszinkron from "./Classes/Aszinkron.js";

$(function () {
  //new Termekek(adatLISTA);
  const aszinkron = new Aszinkron();
  aszinkron.adatbe("http://localhost:3000/adatLISTA", beolvas);
});

function beolvas(adat) {
  console.log(adat);
  console.log(adat);
  new Termekek(adat);
}
