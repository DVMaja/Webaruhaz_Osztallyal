class Termek {
    #adat;
    #divELEM;
    #buttonELEM;

    constructor(adat, szuloELEM){
        this.#adat = adat;
        
        this.#buttonELEM;
        szuloELEM.append(`<div class="divElem">
        <p class="pElem">${this.#adat.cim}</p>
        <img src="${this.#adat.kep}" alt="kép">
        <p></p>
        </div>`);



    }

    getAdat(){
        return this.#adat;
    }

    kattintasTrigger(){

    }

}

export default Termek;