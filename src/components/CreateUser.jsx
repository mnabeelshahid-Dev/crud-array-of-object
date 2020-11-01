import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Form, Icon, Input } from "antd";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.props.handleEvent(event);
  };

  render() {
    // const { getFieldDecorator } = this.props.form;
    const { name, task, age } = this.props;
    return (
      <div>
        <Modal
          title={this.props.create ? "Create New User" : "Update User"}
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          {/* <i>{name}</i> */}
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item >
              {/* {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })( */}
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  id="name"
                  placeholder="Username"
                  name="name"
                  value={this.props.name}
                  defaultValue={name}
                  onChange={this.handleChange}
                />
                
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator("age", {
                rules: [{ required: true, message: "Please input your age!" }]
              })( */}
                <Input
                  prefix={
                    <Icon
                      type="usergroup-add"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  id="age"
                  placeholder="Age"
                  name="age"
                  value={age}
                  onChange={this.props.handleEvent}
                />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator("task", {
                rules: [{ required: true, message: "Please input your Task!" }]
              })( */}
                <Input
                  prefix={
                    <Icon type="form" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  id="task"
                  type="text"
                  placeholder="Task"
                  name="task"
                  value={task}
                  onChange={this.props.handleEvent}
                />
              {/* )} */}
            </Form.Item>
            <Form.Item>
              {this.props.create ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    this.props.addData();
                  }}
                >
                  Add User
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={this.props.updateData}
                >
                  Update Data
                </Button>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  CreateUser
);
export default WrappedNormalLoginForm;
