function Bear(props) {
  console.log('props.name is:', props.name)

  // `I am a bear named ${props.name}.`

  // The curly braces inside JSX-land are a way to
  // have a JS expression be evaluated.
  return (
    <p>
      I am a bear named {props.name}. I am {props.color}
    </p>
  )
}


export default Bear
