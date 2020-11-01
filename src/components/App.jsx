import React from "react";
import "antd/dist/antd.css";
import DashBoard from "./DashBoard";
import CreateUser from "./CreateUser";
import { Button } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: "",
      name: "",
      age: "",
      task: "",
      error: false,
      edit: true,
      create: true,
      dataSource: [
        {
          key: "1",
          id: 1,
          name: "Mike",
          age: 32,
          task: "define"
        },
        {
          key: "2",
          id: 2,
          name: "john",
          age: 32,
          task: "define"
        },
        {
          key: "3",
          id: 3,
          name: "marry",
          age: 32,
          task: "define"
        }
      ]
    };
  }
  showModal = create => {
    this.setState({
      visible: true,
      create
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: false
    });
  };
  addDataHandler = () => {
    if (this.state.name === "") {
      this.setState({
        error: true
      });
    } else if (this.state.age === "") {
      this.setState({
        error: true
      });
    } else if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      let array = [...this.state.dataSource];
      let name = this.state.name;
      let age = this.state.age;
      let task = this.state.task;
      let length = array.length;
      let obj = { id: length + 1, name, age, task };
      // array.splice(length + 1, 0, obj);
      array.push(obj);
      this.setState({
        dataSource: array,
        name: "",
        age: "",
        task: "",
        visible: false
      });
    }
  };
  deleteHandler = id => {
    let array = [...this.state.dataSource];
    let index = array.findIndex(x => x.id === id);
    array.splice(index, 1);
    this.setState({
      dataSource: array
    });
  };
  editDataHandler = id => {
    let array = [...this.state.dataSource];
    let index = array.findIndex(x => x.id === id);
    this.setState({
      id: array[index].id,
      name: array[index].name,
      age: array[index].age,
      task: array[index].task,
      edit: true
    });
  };
   updateHandler= id => {
    if (this.state.id === "") {
      this.setState({
        error: true
      });
    }
   else if (this.state.name === "") {
      this.setState({
        error: true
      });
    } else if (this.state.age === "") {
      this.setState({
        error: true
      });
    } else if (this.state.task === "") {
      this.setState({
        error: true
      });
    } else {
      let array = [...this.state.dataSource];
      let index = array.findIndex( x => x.id === id);
      let id = this.state.id;
      let name = this.state.name;
      let age = this.state.age;
      let task = this.state.task;
      let obj = {id,name,age,task};
      array.splice(index, 1, obj)
      this.setState({
        dataSource:array,
        id:'',
        name:'',
        age:'',
        task:'',
        visible: false
      })
    }
  };
  render() {
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
            {this.state.dataSource.map(data => (
              <DashBoard
                deleteData={this.deleteHandler}
                editData={this.editDataHandler}
                key={data.id}
                data={data}
                showModal={this.showModal}
              />
            ))}
          </tbody>
        </table>
        <div style={{ flex: 1, textAlign: "center" }}>
          <Button type="primary" onClick={() => this.showModal(true)}>
            Create User
          </Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <CreateUser
            name={this.state.name}
            age={this.state.age}
            task={this.state.task}
            handleEvent={this.handleChange}
            addData={this.addDataHandler}
            visible={this.state.visible}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            create={this.state.create}
            updateData={this.updateHandler}
          />
        </div>
      </div>
    );
  }
}
export default App;
