import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'angular123', text: 'Angular', value: 'angular567' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

var mapByKey = {}
const onChange = (selected, props) => {
    var {data = options} = props;
    var selectedObjs = []
    if(typeof selected === 'object'){ // For multiple
        for (var i in selected){
            var o = mapByKey[selected[i]]
            if(o !== undefined) selectedObjs.push(mapByKey[selected[i]])
        }
    }
    else selectedObjs = mapByKey[selected]
    if(props.onChange) props.onChange(selectedObjs)
}

const DropdownExampleMultipleSelection = (props) => {
    var {placeholder, 
        multiple = true, 
        data = options, 
        displayKey = 'text', 
        dataKey = "key", 
        selected = options
    } = props;
    
    var dataForDD = data.map((o, i) => { return {text: o[displayKey], value: o[dataKey] }})
    for(var i in data) mapByKey[data[i][dataKey]] = data[i]
    var selectedForDD = typeof selected === 'object' ? selected.map((o, i) => o[dataKey]) : selected[dataKey]

    return <Dropdown 
        placeholder={placeholder} 
        fluid
        multiple={multiple} 
        search 
        selection
        options={dataForDD} 
        value={selectedForDD}
        onChange={(s,o) => onChange(o.value, props)}
    />
}

export default DropdownExampleMultipleSelection