import { lazy, Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'

const Services = lazy(() => import('./components/Services'))
const Results = lazy(() => import('./components/Results'))
const Pricing = lazy(() => import('./components/Pricing'))
const BookingContact = lazy(() => import('./components/BookingContact'))

function App() {

  return (
     <>
      <main>
        <Hero/>

        <Suspense fallback={null}>
          <section id="services">
            <Services/>
          </section>

          <section id="results">
            <Results/>
          </section>

          <section id="pricing">
            <Pricing/>
          </section>

          <section id="contact">
            <BookingContact/>
          </section>
        </Suspense>
      </main>
    </>
  )
}

export default App