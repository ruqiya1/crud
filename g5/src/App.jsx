import React from 'react';
import { data } from './mock.jsx'

class App extends React.Component {
  state = {
    list: data
  }
  render() {
    // FILTER 
    const onNameFil = ({ target: { value } }) => {
      let res = data.filter((vl) => vl.name.toLowerCase().includes(value.toLowerCase()))
      this.setState({ list: res })
    }

    const onStatusFil = ({ target: { value } }) => {
      let res = data.filter((vl) => vl.status === value)
      this.setState({ list: res })
    }

    const onIdFil = ({ target: { value } }) => {
      let res = data.filter((vl) => `${vl.id}`.includes(+value))
      this.setState({ list: res })
    }

    const onDel = (id) => {
      let res = this.state.list.filter((value) => value.id !== id)
      this.setState({ list: res })

      // CREATE 
    }
    const onCreate1 = () => {
      this.setState((state) => {
        return {
          list: [...state.list,
          {
            id: state.list.length + 1,
            name: state.name,
            status: state.status,
          }]
        }
      })
    }
    return (
      <div>
        {/* FILTER  */}
        <h1>Filter</h1>
        <input onChange={onIdFil} type="number" placeholder='ID' />
        <input onChange={onNameFil} type="text" placeholder='Name' />
        <select onChange={onStatusFil}>
          <option value="st">St</option>
          <option value="unm">Unm</option>
          <option value="em">Em</option>
          <option value="bs">Bs</option>
        </select>

        {/* CREATE  */}
        <h1>Create</h1>
        <input
          onChange={({ target: { value } }) => {
            this.setState({ name: value });
          }}
          type="text"
          placeholder='Name' />

        <select
          onChange={({ target: { value } }) => {
            this.setState({ status: value })
          }}>
          <option value="st">St</option>
          <option value="unm">Unm</option>
          <option value="em">Em</option>
          <option value="bs">Bs</option>
        </select>
        <button onClick={onCreate1} >Add</button>
        {
          this.state.list.map((v, i) => {
            return <h1>
              {v.id} - {v.name} - {v.status} - {' '}
              <button onClick={() => onDel(v.id)} >Delet</button>
            </h1>
          })
        }
      </div >
    )
  }
}

export default App;
