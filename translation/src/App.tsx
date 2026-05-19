
import Home from "./components/Home";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css"

function App() {
  

  return (
    <LanguageProvider>
      <Home/>
    </LanguageProvider>
  )
}

export default App
