import React from 'react'
import 'antd/dist/antd.css'
import { Modal, Button, Form, Icon, Input } from 'antd'

class CreateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {})
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
    this.props.handleEvent(event)
  }

  render() {
    const {
      updateName,
      updateTask,
      updateAge,
      updateCreate,
      updateVisible,
      handleOk,
      handleCancel,
      handleEvent,
      updateData,
      addData,
    } = this.props
    return (
      <div>
        <Modal
          title={updateCreate ? 'Create New User' : 'Update User'}
          visible={updateVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                id="name"
                placeholder="Username"
                name="name"
                value={updateName}
                defaultValue={updateName}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon
                    type="usergroup-add"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
                id="age"
                placeholder="Age"
                name="age"
                value={updateAge}
                onChange={handleEvent}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                id="task"
                type="text"
                placeholder="Task"
                name="task"
                value={updateTask}
                onChange={handleEvent}
              />
            </Form.Item>
            <Form.Item>
              {updateCreate ? (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    addData()
                  }}
                >
                  Add User
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={updateData}
                >
                  Update Data
                </Button>
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(CreateUser)
export default WrappedNormalLoginForm;
