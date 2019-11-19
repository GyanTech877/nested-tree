import React, { Component } from 'react'
import '../style/App.css'


export class TreeList extends Component{

    constructor(props){
        super(props);
        this.state = {nodes: this.props.nodeData}
        this.handleClickOnIcon= this.handleClickOnIcon.bind(this);
        this.handleSelectClick = this.handleSelectClick.bind(this);
        this.toggleExpandedState = this.toggleExpandedState.bind(this);
        this.toggleCheckState = this.toggleCheckState.bind(this);
    }

    toggleExpandedState(newState,key){
        debugger;
        newState[key].children.forEach((item) => {
            newState[item.source].expanded = !newState[item.source].expanded;
            this.toggleExpandedState(newState, item.source)
        })
    }

    toggleCheckState(newState, key) {
        newState[key].children.forEach((item) => {
            newState[item.source].checked = !newState[item.source].checked;
            this.toggleCheckState(newState, item.source)
        })
    }

    handleClickOnIcon(e){
        e.preventDefault();
        const key = e.currentTarget.nextElementSibling.getAttribute("value");
        let {nodes}= this.state;
        let newState={};
        Object.assign(newState,nodes);
        newState[key].collapseIcon = !newState[key].collapseIcon;
        this.toggleExpandedState(newState,key);
        this.setState({ ...newState});
       
    }

    handleSelectClick(e){
        const key = e.target.defaultValue;
        let { nodes } = this.state;
        let newState = {};
        Object.assign(newState, nodes);
        newState[key].checked = !newState[key].checked;
        this.toggleCheckState(newState,key);
        this.setState({ ...newState });
    }
    

    render(){
        const { nodes} = this.state;
        console.log("nodes" + nodes);
        return(
        <ul>
            {this.props.data && this.props.data.children.map((option) => (
                <div key={option.source}>
                    {
                        <Node nodeData={nodes[option.source]} handleSelectClick={this.handleSelectClick} handleClickOnIcon={this.handleClickOnIcon} /> 
                    }
                    {(option.children.length > 0) && <TreeList data={option} nodeData={nodes} />}
                </div>
            ))}

        </ul>);
    }
}

export function Node({ nodeData, handleClickOnIcon, handleSelectClick }) {
    const val = nodeData.collapseIcon ? '-':'+';
    return (
        <div className="node-container">
            {nodeData.expanded &&
                <label>
                {
                    nodeData.isParent && nodeData.expanded && <span onClick={handleClickOnIcon}>[{val}]</span>
                }
                <input onChange={handleSelectClick} checked={nodeData.checked} type="checkbox" value={nodeData.value}/> 
                {
                    nodeData.value+nodeData.checked
                }
                </label>
             }
        </div>);
}
