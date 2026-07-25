// App.jsx — one clean split, not four
import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

const BelowFold = lazy(() => import('./components/BelowFold'))

function App() {
  return (
    <main>
      <Hero />
      <Suspense fallback={null}>
        <BelowFold />
      </Suspense>
    </main>
  )
}