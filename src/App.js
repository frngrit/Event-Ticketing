import Banner from './components/Banner'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <div
        className="
        bg-stone-900		
              "
        style={{ height: "100vh" }}
      >
        <NavBar />
        <Banner />
      </div>

    </>
  )
}