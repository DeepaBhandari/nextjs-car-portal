import Hero from '@/components/Hero'
import { SearchBar,CustomFilter, CarCard, ShowMore } from '@/components'

export default async function Home() {
  const allCars = await fetchCars({
    manufacturer: SearchParamsContext.manufacturer || "",
  })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
       {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
    </div>
    </main>
  )
}
