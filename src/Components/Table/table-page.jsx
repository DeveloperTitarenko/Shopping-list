import Table from "./table";
import React from "react";
import './table-page.css'
import {BsFilter} from 'react-icons/bs'
import Header from "../Header/header";


const TablePage = () => {
  return(
    <>
      <div className="table-page">
        <Header/>
        <div className="wrapper">
          <div className="table">
            <div className="table-header">
              <h1>All Templates</h1>
              <button className="table-filter"><BsFilter/>Filter</button>
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TablePage