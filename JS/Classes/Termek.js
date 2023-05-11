class Termek {
    #adat;
    #divELEM;
    #buttonELEM;

    constructor(adat, szuloELEM){
        this.#adat = adat;
        
        this.#buttonELEM;
        szuloELEM.append(`<div class="divElem">
        <p class="pElem">${this.#adat.cim}</p>
        <img src="stilus/kepek/${this.#adat.kep}" alt="kép">
        <p>${this.#adat.iro}</p>
        <p>${this.#adat.mufaly}</p>
        <p>${this.#adat.kiadasDatuma}</p>
        </div>`);



    }

    getAdat(){
        return this.#adat;
    }

    kattintasTrigger(){

    }

}

export default Termek;