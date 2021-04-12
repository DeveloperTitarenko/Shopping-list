import React from "react"
import {Table} from "react-bootstrap"
import Tr from "./table-tr"


const Tables = () => {
  return (
    <Table   hover className="table">
      <thead>
      <tr>
        <th></th>
        <th>Poll</th>
        <th>Created</th>
        <th>Updated</th>
        <th>Shared Link</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <Tr/>
      </tbody>
    </Table>
  )
}
export default Tables