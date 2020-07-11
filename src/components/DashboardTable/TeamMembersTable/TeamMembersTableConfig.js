import React from 'react';
import classes from '.././Dashboard.module.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export const data = [{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Admin Champion',
    locations: 'Upland fountain square',
    access: '',
    verified: true
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Brand Champion',
    locations: 'Navada',
    access: '',
    verified: false
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Location Champion',
    locations: '111 Beer St.',
    access: 'Location Access',
    verified: true
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Brew Champion',
    locations: '222 Beer St.',
    access: ' ',
    verified: false
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Admin Champion',
    locations: 'Upland fountain square',
    access: '',
    verified: true
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Brand Champion',
    locations: 'Navada',
    access: '',
    verified: false
},
{
    name: 'Lastname, Firstname',
    email: 'firstname.lastname@gmail.com',
    champion: 'Location Champion',
    locations: '111 Beer St.',
    access: 'Location Access',
    verified: true
}];

const columnName = {
    name: 'Name',
    email: 'Email Address',
    champion: 'Champion',
    locations: 'Location',
    access: 'Access',
    verified: 'Actions'
};
export const columns = [];
let showActionBtn = true;
let content;
let data2 = '';
const actionHandler = (row) => {
    console.log("I am called ", row);

    showActionBtn = !showActionBtn;
    return content = row.verified ? (<div>Remove User</div>) : (<div><div>Resent Invite</div><div>Delete Invite</div></div>);
}
content = (<div onClick={actionHandler}>Actions</div>)
Object.keys(columnName).map((key, i) => {
    columns.push({
        name: columnName[key],
        selector: key,
        sortable: !(key === 'verified'),
        center: true,
        width: key === 'verified' ? '200px' : 'auto',
        cell: row => {
            let demo;
            if (key === 'verified') {
                if (showActionBtn) {
                    demo = <div onClick={() => actionHandler(row)} className={classes.actionBtn}>View Actions <MoreVertIcon className={classes.moreIcon} /> </div>
                }
            } else {
                demo = row[key]
                //  {row[key]==='Location Access'?<MoreVertIcon className={classes.moreIcon}/>:''}
            }
            return demo
        }
        // (key==='verified' ?
        // <div>{{showActionBtn}?<button onClick={actionHandler(row)}>View Actions</button>:{content}}</div>:row[key])
    });
    return columns;
})