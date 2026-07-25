import './App.css'
import BookingContact from './components/BookingContact'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Results from './components/Results'
import Services from './components/Services'

function App() {

  return (
     <>
      <main>
        <Hero/>
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
      </main>
    </>
  )
}

export default App