import Age from "./Age"
function Welcome(props) {
  return (
    <div>
      <p>Welcome {props.name}</p>
      {props.age ? <Age age2 = {props.age}/> : "non c'è la props!"}
    </div>
  )
}

export default Welcome