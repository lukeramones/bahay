import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class YourAppName extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      age: '',
      people: [
        {
          name: 'Moses',
          age: 22
        }
      ]
    }
  }

  handleChange (event) {
    const value = event.target.value
    const inputName = event.target.name

    if (inputName === 'name'){
      this.setState({
        name: value
      })
    } else if(inputName === 'age') {
      this.setState({
        age: value
      })
    }
  }

  add () {
    const name = this.state.name
    const age = this.state.age
    const newPeople = this.state.people

    newPeople.push({name: name, age: age})

    this.setState({
      people: newPeople
    })
  }

  renderTable () { return <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.people.map( (person, index) => {
              return <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  }

  renderForm () {
    return <div className='form-group'>
      <label>Name</label>
      <input 
        onChange={(event)=>{this.handleChange(event)}}
        className='form-control'
        name='name'/>
      <label>Age</label>
      <input 
        onChange={(event)=>{this.handleChange(event)}}
        className='form-control'
        name='age'/>
      <button onClick={()=>{this.add()}}>
        Add
      </button>
    </div>
  }

  render () {
    return <div className='container'>
      <div className='jumbotron'>
        {this.renderForm()}
        {this.renderTable()}
      </div>
    </div>
  }
}

export default YourAppName
