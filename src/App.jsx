import Bear from './Bear.jsx'
import Header from './Header.jsx'

// A React component is literally JUST A FUNCTION.
// A React component returns something called JSX.

function App() {
  return (
    <div id="appComponent">
      <Header />
      <p>This is nice!</p>
      <p>👋</p>
      <Bear name="Wish Bear" color="Blue" />
      <Bear name="Cheer Bear" color="Pink" />
      <Bear name="Good Luck Bear" color="Green" />
    </div>
  )
}

export default App
