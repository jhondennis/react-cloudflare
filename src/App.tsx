import "./App.css";
import { ReactRouterProvider } from "./router/ReactRouterProvider";
import { MUIProvider } from "./theme";

function App() {
  return (
    <MUIProvider>
      <ReactRouterProvider />
    </MUIProvider>
  );
}

export default App;
