import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Matches } from './components/Matches'

function App() {
  return (
    <div>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Matches />
        hello furia
      </main>
    </div>
  )
}

export default App
