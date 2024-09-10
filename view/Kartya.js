class Kartya {
  #obj = {};
  #szuloElem;

  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.gombElem = $(".kivalaszt:last");
    this.generaltHtml();
    this.esemeneyKezelo();
  }

  generaltHtml = () => {
    this.#szuloElem.append(
      ` <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h5 class="card-title">${this.#obj.nev}</h5>
                <p class="card-text">${this.#obj.fajta}</p>
                <p class="card-text">${this.#obj.kor} éves</p>
                <button class="btn btn-success kivalaszt">Kiválaszt</button>
            </div>
        </div>`
    );
  };

  esemeneyKezelo = () => {
    this.gombElem.on("click", () => {
      const e = new CustomEvent("kiválaszt", { detail: this.#obj });
    });
  };
}

export default Kartya;
