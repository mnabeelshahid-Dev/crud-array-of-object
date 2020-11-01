import React from 'react'
import 'antd/dist/antd.css'
import DashBoard from './DashBoard'
import CreateUser from './CreateUser'
import { Button } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      id: '',
      name: '',
      age: '',
      task: '',
      error: false,
      edit: true,
      create: true,
      dataSource: [
        {
          key: '1',
          id: 1,
          name: 'Mike',
          age: 32,
          task: 'define',
        },
        {
          key: '2',
          id: 2,
          name: 'john',
          age: 32,
          task: 'define',
        },
        {
          key: '3',
          id: 3,
          name: 'marry',
          age: 32,
          task: 'define',
        },
        {
          key: '4',
          id: 4,
          name: 'joshp',
          age: 32,
          task: 'define',
        },
        {
          key: '5',
          id: 5,
          name: 'Harry',
          age: 32,
          task: 'define',
        },
      ],
    }
  }
  showModal = (create) => {
    this.setState({
      visible: true,
      create,
    })
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    })
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      error: false,
    })
  }
  addDataHandler = () => {
    const { name, age, task, dataSource } = this.state
    if (name === '') {
      this.setState({
        error: true,
      })
    } else if (age === '') {
      this.setState({
        error: true,
      })
    } else if (task === '') {
      this.setState({
        error: true,
      })
    } else {
      const array = [...dataSource]
      const updateName = name
      const updateAge = age
      const updateTask = task
      const length = array.length
      const obj = {
        id: length + 1,
        name: updateName,
        age: updateAge,
        task: updateTask,
      }
      // array.splice(length + 1, 0, obj);
      array.push(obj)
      this.setState({
        dataSource: array,
        name: '',
        age: '',
        task: '',
        visible: false,
      })
    }
  }
  deleteHandler = (id) => {
    const { dataSource } = this.state
    const array = [...dataSource]
    const index = array.findIndex((x) => x.id === id)
    array.splice(index, 1)
    this.setState({
      dataSource: array,
    })
  }
  editDataHandler = (id) => {
    const { dataSource } = this.state
    const array = [...dataSource]
    const index = array.findIndex((x) => x.id === id)
    this.setState({
      id: array[index].id,
      name: array[index].name,
      age: array[index].age,
      task: array[index].task,
      edit: true,
    })
  }
  updateHandler = (id) => {
    const { name, age, task, dataSource } = this.state
    if (name === '') {
      this.setState({
        error: true,
      })
    } else if (age === '') {
      this.setState({
        error: true,
      })
    } else if (task === '') {
      this.setState({
        error: true,
      })
    } else {
      const array = [...dataSource]
      const index = array.findIndex((x) => x.id === id)
      const uodateId = id
      const updateName = name
      const updateAge = age
      const updateTask = task
      const obj = {
        id: uodateId,
        name: updateName,
        age: updateAge,
        task: updateTask,
      }
      array.splice(index, 1, obj)
      this.setState({
        dataSource: array,
        id: '',
        name: '',
        age: '',
        task: '',
        visible: false,
      })
    }
  }
  render() {
    const { dataSource, name, age, task, visible, create } = this.state
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data) => (
              <DashBoard
                deleteData={this.deleteHandler}
                editData={this.editDataHandler}
                key={data.key}
                data={data}
              />
            ))}
          </tbody>
        </table>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <Button type="primary" onClick={() => this.showModal(true)}>
            Create User
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CreateUser
            updateName={name}
            updateAge={age}
            updateTask={task}
            handleEvent={this.handleChange}
            addData={this.addDataHandler}
            updateVisible={visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            updateCreate={create}
            updateData={this.updateHandler}
          />
        </div>
      </div>
    )
  }
}
export default App
