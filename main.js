import Kartyak from "./view/Kartyak.js";
import { KUTYAK } from "./adatok.js";

const generaltHtml = () => {
  const tarolo = $(".tartalom");
  new Kartyak(KUTYAK, tarolo);
};

generaltHtml();
