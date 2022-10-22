import Banner from './components/Banner'
import NavBar from './components/NavBar'
import SearchEvent from './components/SearchEvent'
import UpcomingEvents from './components/UpcomingEvents'

export default function App() {
  return (
    <>
      <div
        className="
        bg-stone-900		
              "
        style={{ height: "100%" }}
      >
        <div className='
                lg:mx-15
                md:mx-8
                sm:mx-2
                '
            >
        <NavBar />
        <Banner />
        <SearchEvent />
        <UpcomingEvents />
        </div>
      </div>

    </>
  )
}