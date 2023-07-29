import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./contex/CotizdorProvider";

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  );
}

export default App;
