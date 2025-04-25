import { Chatbot } from './components/Chatbot'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Matches } from './components/Matches'

function App() {
  return (
    <div className="relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Matches />
        <Chatbot />
      </main>
    </div>
  )
}

export default App
