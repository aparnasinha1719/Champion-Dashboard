import React from 'react'; 
import classes from '.././Dashboard.module.css';
import starImg from '../../../assets/imgs/star.png';
export const data = [{ 
    new:true,
    product:'Upland',
    brewery:'blah blah',
    style:'blah blah',
    abv:'yes',
    availability:'Blur',
    completion:75
  } ,
  { 
    new:true,
    product:'Upland2',
    brewery:'blah blah',
    style:'blah blah',
    abv:'yes',
    availability:'Blur',
    completion:75
  },
  { 
    new:true,  
    product:'Upland',
    brewery:'blah blah',
    style:'blah blah',
    abv:'yes',
    availability:'Blur',
    completion:75
  } ,
  { 
    new:false,  
    product:'Upland2',
    brewery:'blah blah',
    style:'blah blah',
    abv:'yes',
    availability:'Blur',
    completion:75
  },
  { 
    new:false,  
    product:'Upland2',
    brewery:'blah blah',
    style:'blah blah',
    abv:'yes',
    availability:'Blur',
    completion:75
  }  ];

const columnName={
    new:'New',
    product:'Product',
    brewery:'Brewery',
    style:'Style',
    abv:'ABV%',
    availability:'Availability',
    completion:'Completion'};
export const columns=[];
  
   Object.keys(columnName).map((key,i) => {
   columns.push({
    name: columnName[key],
    selector:key,
    sortable: !(key==='new'),
    center:true,
    width:key==='new'?'50px':key==='completion'?'200px':'auto',
    cell:row =>(key === 'completion' && row.completion<100)?(<span>{row.completion}% <button className={classes.tableButtons}>Continue where you left off</button></span>):
    (key==='new' && row.new)?<img src={starImg} alt="starImg" className={classes.starImage}/>:row[key]
    })
    return columns;
   })