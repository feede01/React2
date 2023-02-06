import React from 'react'

export default function InputForm(props){
    return (
        <div style={{ flexDirection: 'column', padding: 10, alignItems: 'center'}}>
            <label style={{width: 120, marginRight: 6}}>{props.title}</label>
            <input style={{margin: 8, padding: 8, alignItems: 'center'}} required value={props.value} name = {props.name} type="text" onChange={props.onChange}/>
        </div>
    )
}