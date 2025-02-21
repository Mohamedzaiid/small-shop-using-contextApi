import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CardContextProvider from "./contextStore/shopping-card-context.jsx";

function App() {
  return (
    <CardContextProvider>
      <Header />
      <Shop />
    </CardContextProvider>
  );
}

export default App;
