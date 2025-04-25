import { intents } from '@/data/intents'
import type { Message } from '@/types/message'
import { PaperPlaneRight } from '@phosphor-icons/react'
// import OpenAI from 'openai'
import { useEffect, useRef, useState } from 'react'

const initialMessage: Message[] = [
  {
    id: '1',
    isUser: false,
    text: 'E aí fã da FURIA! Eu sou o novo BOT daqui da casa. Podemos conversar sobre horários de partidas, stats dos jogadores, ou história do time! Manda aí ;)',
    timestamp: new Date(),
  },
]

const suggestedQuestions = [
  'Qual é o próximo jogo?',
  'Quem é o capitão?',
  'Últimos resultados?',
  'E o KSCERATO?',
  'Melhor mapa?',
]

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessage)
  const [isTyping, setIsTyping] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Exemplo de integração com OpenAI
  //
  // const openAi = new OpenAI({
  //   apiKey: 'EXAMPLE_KEY',
  //   dangerouslyAllowBrowser: true,
  // })

  // async function sendMessage(message: string) {
  //   const completion = await openAi.chat.completions.create({
  //     model: 'gpt-3.5-turbo',
  //     messages: [
  //       {
  //         role: 'user',
  //         content: message,
  //       },
  //     ],
  //   })

  //   return completion.choices[0].message.content?.toString() || 'Desculpe, não consegui entender sua pergunta.'
  // }

  function handleSendMessage(text: string = input) {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      isUser: true,
      text: text.trim(),
      timestamp: new Date(),
    }

    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(async () => {
      const botResponse = generateResponse(text)
      const botMessage: Message = {
        id: Date.now().toString(),
        isUser: false,
        text: botResponse,
        timestamp: new Date(),
      }

      setMessages(prevMessages => [...prevMessages, botMessage])
      setIsTyping(false)
    }, 3000)
  }

  function generateResponse(question: string) {
    const normalized = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    for (const intent of intents) {
      if (intent.keywords.some(keyword => normalized.includes(keyword))) {
        return intent.response
      }
    }

    return 'Boa pergunta! Ainda tô aprendendo, mas posso te contar sobre os jogos, jogadores, mapas ou torneios da FURIA. Bora perguntar!'
  }

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <section id="chatbot" className="py-8 md:py-12 bg-gradient-to-br from-zinc-950 to-zinc-700 relative overflow-hidden">
      <div className="absolute -top-10 right-0 w-56 h-56 bg-yellow-500 rounded-full blur-3xl" />

      <div className="container mx-auto relative px-2 max-w-3xl">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
            <span className="text-yellow-500 mr-1">#</span>
            BATA UM PAPO COM O BOT
          </h2>
        </div>

        <div className="mx-auto bg-gradient-to-br from-zinc-950/20 to-zinc-700/20 border border-zinc-400 rounded-lg shadow-xl backdrop-blur-xs overflow-hidden">
          <div className="bg-zinc-800/50 p-3 border-b border-zinc-300/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(254,215,102,0.4)] flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-xs">
                  <img src="/furia-logo.png" alt="Furia" className="w-6 h-6" />
                </span>
              </div>
              <span className="text-zinc-100 font-medium text-sm tracking-widest">FURIA BOT</span>
            </div>
          </div>
        </div>

        <div className="h-80 p-4 overflow-y-auto scrollbar">
          {messages.map(message => (
            <div key={message.id} className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg px-4 py-2 ${message.isUser ? 'bg-yellow-500/90 text-zinc-900' : 'bg-zinc-900 text-zinc-100'}`}>
                <div className="text-sm">{message.text}</div>
                <div className={`text-[10px] mt-1 justify-self-end ${
                  message.isUser ? 'text-zinc-900/70' : 'text-zinc-500'
                }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1 text-zinc-500 text-sm mt-1.5 ml-1.5">
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-[bounce_1s_infinite]"></div>
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>

        <div className="p-4 border-t border-zinc-400/20">
          <p className="font-medium text-xs tracking-widest text-zinc-400 mb-2">
            EXPERIMENTE ALGUMA DESSAS:
          </p>
          <div className="flex flex-wrap gap-2 mb-3 gap-y-1">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="text-xs bg-zinc-950/50 hover:bg-zinc-950 text-zinc-50 py-1 px-3 rounded-full transition-colors duration-200 cursor-pointer"
                onClick={() => handleSendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Pergunte sobre partidas, jogadores, stats..."
              onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
              className="flex-grow bg-zinc-800/50 border border-zinc-100/50 rounded-md text-zinc-100 px-3 py-2 text-furia-white placeholder:text-zinc-300/40 focus:outline-none transition-colors backdrop-blur-sm shadow-sm focus:shadow-[0_0_0_1px_rgba(254,215,102,0.4)] text-sm"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!input.trim()}
              className={`bg-yellow-500 text-zinc-900 px-4 py-2 rounded-md font-medium ${
                !input.trim()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-opacity-90 transition-colors duration-200 cursor-pointer'
              }`}
            >
              <PaperPlaneRight weight="bold" size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-zinc-500/70 text-xs">
        <p>Isso é uma demo de um chatbot com respostas pré-programadas sobre a FURIA.</p>
      </div>
    </section>
  )
}
