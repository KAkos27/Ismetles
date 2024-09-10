import Kartya from "./Kartya.js";

class Kartyak {
  #lista = [];
  #tarolo;

  constructor(lista, tarolo) {
    this.#lista = lista;
    this.#tarolo = tarolo;
    this.kutyaKiir();
  }

  kutyaKiir = () => {
    this.#lista.forEach((kutya) => {
      new Kartya(kutya, this.#tarolo);
    });
  };
}

export default Kartyak;
