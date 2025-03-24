
function App() {
  return (
    <Todo title={"hello"} description={"hello doston kya haal chal? mai hunn doraemon"} done={false} />
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todo({ title, description, done }: TodoProp) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <p>{done ? "done" : "incomplete"}</p>
    </div>
  )
}


export default App;