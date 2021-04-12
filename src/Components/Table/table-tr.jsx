import React from "react";
import {VscFiles} from 'react-icons/vsc'
import {BsLink} from 'react-icons/bs'

const Tr = () => {
  const data = [{
    PollName: 'Poll Template Name',
    version: 'v2.04a',
    created: '15.03.2021 18:32',
    update: '18.03.2021 15:16',
    id: '.../ID0001',
    status: 'In Progress'
  },
    {
      PollName: 'Poll Template',
      version: 'v2.05a',
      created: '16.03.2021 18:32',
      update: '22.03.2021 15:16',
      id: '.../ID0002',
      status: 'In Progress'
    },
    {
      PollName: 'Poll Template2',
      version: 'v2.06a',
      created: '16.03.2021 18:32',
      update: '22.03.2021 15:16',
      id: '.../ID0003',
      status: 'In Progress'
    },
    {
      PollName: 'Poll Template3',
      version: 'v2.07a',
      created: '16.03.2021 18:32',
      update: '25.03.2021 15:16',
      id: '.../ID0004',
      status: 'In Progress'
    },
    {
      PollName: 'Poll Template3',
      version: 'v2.07a',
      created: '16.03.2021 18:32',
      update: '25.03.2021 15:16',
      id: '.../ID0004',
      status: 'In Progress'
    },
    {
      PollName: 'Poll Template3',
      version: 'v2.07a',
      created: '16.03.2021 18:32',
      update: '25.03.2021 15:16',
      id: '.../ID0004',
      status: 'In Progress'
    },
  ]

  return(
    data.map((item) => {
      const {PollName, version, created, update, id, status} = item
      return(
        <tr>
          <td>1</td>
          <td>{PollName} <a href="#">{version}</a></td>
          <td>{created}</td>
          <td>{update}</td>
          <td><button className="btn-link"><BsLink/></button> {id}<button className="btn-file"><VscFiles/></button></td>
          <td> <button className="status-btn">{status}</button></td>
        </tr>
      )
    })
  )
}

export default Tr