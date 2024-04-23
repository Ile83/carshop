import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Addcar from "./addcar";
import Editcar from "./editcar";


export default function Carlist() {

    const [cars, setCars] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {

        fetch('https://carrestservice-carshop.rahtiapp.fi/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(error => console.error(error))
    }
    


    const deleteCar = href => {
        if (window.confirm('Are you sure?')) {
    const options = {
        method: 'DELETE'

    }
        fetch(href, options)
        .then(() => fetchData())
        .catch(error => console.error(error))
        

      }
    }

    const saveCar = (car) => {
        fetch('https://carrestservice-carshop.rahtiapp.fi/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(() => fetchData())
        .catch(error => console.error(error))
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(() => fetchData())
        .catch(error => console.error(error))
    }

    const [columnDefs, setColumnDefs] = useState([
        {field: 'brand', filter: true},
        {field: 'model', filter: true},
        {field: 'color', filter: true},
        {field: 'fuel', filter: true},
        {field: 'modelYear', filter: true},
        {field: 'price', filter: true},
        {field: 'edit', sortable: false, filter: false,
    cellRenderer: ({ data }) => <Editcar car={data} updateCar={updateCar} />
    },
        {field: '_links.self.href', sortable: false, filter: false, 
        headerName: '', 
        cellRenderer: ({ value }) => <Button color="secondary" size="small" onClick={() => deleteCar(value)}>Delete</Button>}
      ]);

     


    return (

    <div className="ag-theme-material" style={{width: 1800, height: 1800}}>
    <Addcar saveCar={saveCar} />
      <AgGridReact 
        rowData={cars}
        columnDefs={columnDefs}
      />
    </div> 
       
    );
    }