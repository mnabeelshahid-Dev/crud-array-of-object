import React from 'react'
import 'antd/dist/antd.css'
import { Divider } from 'antd'
class DashBoard extends React.Component {
  render() {
    const { data, showModal, editData, deleteData } = this.props
    return (
      <>
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.task}</td>
          <td>
            <span>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  showModal(false)
                  editData(data.id)
                }}
              >
                Edit
              </span>
              <Divider type="vertical" />
              <span
                onClick={() => deleteData(data.id)}
                style={{ cursor: 'pointer' }}
              >
                Delete
              </span>
            </span>
          </td>
        </tr>
      </>
    )
  }
}
export default DashBoard
