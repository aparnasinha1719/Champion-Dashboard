import React from 'react'; 
import classes from '.././Dashboard.module.css';
export const data = [{ 
    locationName:'Upland',
    facilityType:'blah blah',
    operationStatus:'blah blah',
    address:'yes',
    city:'Blur',
    state:'Karnataka',
    completion:75
  } ,
  { 
    locationName:'Upland2',
    facilityType:'blah blah',
    operationStatus:'blah blah',
    address:'yes',
    city:'Blur',
    state:'Karnataka',
    completion:75
  },
  { 
    locationName:'Upland',
    facilityType:'blah blah',
    operationStatus:'blah blah',
    address:'yes',
    city:'Blur',
    state:'Karnataka',
    completion:75
  } ,
  { 
    locationName:'Upland2',
    facilityType:'blah blah',
    operationStatus:'blah blah',
    address:'yes',
    city:'Blur',
    state:'Karnataka',
    completion:75
  },
  { 
    locationName:'Upland2',
    facilityType:'blah blah',
    operationStatus:'blah blah',
    address:'yes',
    city:'Blur',
    state:'Karnataka',
    completion:75
  }  ];

const columnName={
    locationName:'Location Name',
    facilityType:'Facility Type',
    operationStatus:'Operation Status',
    address:'Address',
    city:'City',
    state:'State',
    completion:'Completion'};
export const columns=[];
  
   Object.keys(columnName).map((key,i) => {
   columns.push({
    name: columnName[key],
    selector:key,
    sortable: true,
    center:true,
    width:key==='completion'?'200px':'auto',
    cell:row =>(key === 'completion' && row.completion<100)?(<span>{row.completion}% <button className={classes.tableButtons}>Continue where you left off</button></span>):row[key]
    })
    return columns;
   })