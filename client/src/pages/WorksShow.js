import React from 'react'

class Works extends React.Component {

  componentDidMount() {
    const { id } = this.props.location.state
    this.setState({id: id})
    this.findId()
  }
  // Find work ID and route to the work url 
  findId = () => {
    const { id } = this.props.location.state
    if (id === 1) {
      return(
        <div>Oh geez man I mean I'm really schwifty</div>
      )
    } else if (id === 2) {
      return(
        <div>I'm pickle Rick!</div>
        ) 
        } else if (id === 3) {
          return(
            <div>Ahhh shucks we did it</div>
          )
      } else if (id === 4 ) {
        return(
          <div>Luna Tattoos</div>
        )
      }
}
  

  render() {
    return (
      <div>{this.findId()}</div>
    )
  }
  
}

export default Works