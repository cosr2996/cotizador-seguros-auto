import { useContext } from "react";
import CotizadorContext from "../contex/CotizdorProvider";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;
