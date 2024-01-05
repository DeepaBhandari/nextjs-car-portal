import Hero from '@/components/Hero'
import { SearchBar,CustomFilter } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero/>
    <div className="mt-12 padding-x padding-y max-width" id="discover">
       <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
       </div>
       <div className ="more__filters">
          <SearchBar/>
          <div className="more__filer container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
       </div>
    </div>
    </main>
  )
}
