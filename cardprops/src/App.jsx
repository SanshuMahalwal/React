
import Card from './Card'

function App() {
  return (
    <>
      <h1 className='bg-black p-3 mb-2 text-light text-center'>Cards using Props</h1>
      <Card company="Truminds" role="SDE1" />
      <Card company="Amazon" role="Backend engineer"/>
    </>
  )
}

export default App
