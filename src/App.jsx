import './App.css'
import Component from "./components/other/Component";
import { GlobalStateContextProvider } from "./store/GlobalStateContext";

function App() {
  return (
    <>
    <p>This part is being displayed</p>
    <GlobalStateContextProvider>
      <h1>React-JS-Demo</h1>
      <Component title="Component-1"/>
      <Component title="Component-2"/>
      <Component title="Component-3"/>
      <Component title="Component-4"/>
      <Component title="Component-5"/>
    </GlobalStateContextProvider>
    </>
  )
}

export default App
