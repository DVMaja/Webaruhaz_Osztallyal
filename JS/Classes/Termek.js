class Termek {
    #adat;
    #divELEM;
    #buttonELEM;

    constructor(adat, szuloELEM) {
        this.#adat = adat;

        this.#buttonELEM;
        szuloELEM.append(`<div class="divElem">
        <p class="pElem">${this.#adat.cim}</p>
        <img src="stilus/kepek/${this.#adat.kep}" alt="kép">
        <p>${this.#adat.iro}</p>
        <p>${this.#adat.mufaly}</p>
        <p>${this.#adat.kiadasDatuma}</p>
        <button class="kedvenc">Kedvenc</button>
        </div>`);

        this.#divELEM = $(".termek:last-child");
        this.#buttonELEM = $(".termek:last-child button");
        this.#buttonELEM.on("click", () => {
            this.kattintasTrigger();
        })
    }

    getAdat() {
        return this.#adat;
    }

    kattintasTrigger() {
        const esemeny = new CustomEvent("kedvenc", { detail: this });
        window.dispatchEvent(esemeny)

    }

}

export default Termek;