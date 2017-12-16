import React from "react";
import {Link} from "react-router";
import Menu, {SubMenu, MenuItem} from 'rc-menu';

export class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.textarea = null;
       
    }
    componentDidMount() {
          alert(this.textarea.value);
     
    }
    render(){
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React. Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                <textarea ref={(x)=> {this.textarea = x}}>Hello World</textarea>
                <input ref={this.props.reference} type="text"  value="BOOBOO"/>
            </div>
        );
    }
}

export class HomePageUser extends React.Component {
    componentDidMount() {
          //alert(this.textarea.value);
          alert(this.input.value);
    }

    render(){
        return (
            <HomePage reference={(x)=>{this.input = x}} type="text" />
        );
    }
}

export class AgGrid extends React.Component {
        constructor(props){
        super(props);
 
    }
    onMenuClick(data) {
        data.item.props.commandData.execute.apply(this);
    }
    render(){
        let commands = [
            {
                title:"item 1", 
                hasChildren:true,
                subcommands: [{title: "child item 1.1"},{title: "child item 1.2"}]
            },
            {
                title:"item 2",
                hasChildren:false,
                execute: ()=> {alert("dana");}
            }
        ];
        return (
            <div>
                 <input style={{width:this.props.width}} ref={this.props.myRef} onClick={this.props.onInputClick} type="text" value="Some value" />   
                   <Menu onClick={this.onMenuClick} mode="vertical-right">                                        
                    {
                        commands.map((command)=> {
                              if (command.hasChildren == true)
                              {                                                                   
                                 return <SubMenu title={command.title}>
                                         {
                                             command.subcommands.map((subcommand)=>(
                                                  <MenuItem>{subcommand.title}</MenuItem>
                                             ))
                                         }
                                     </SubMenu>;
                              }
                              else
                              {
                                 return <MenuItem commandData={command}>{command.title}</MenuItem>;
                              }
                              
                        })
                    }   
                   </Menu>
    
               
            </div>
            
        );
    }    
}

export class AgGridWithEnhancedClickOutside extends React.Component {
    constructor(props){
        super(props);
      
        this.myFunc = this.myFunc.bind(this);
        this.input1 = null;
    }

    myFunc(ref){
        this.input1 = ref;
    }
    render(){
        return (
            <AgGrid width={this.props.width} myRef={this.props.myRef} onInputClick={this.props.onInputClick}  />  
        );
    }
}

export class DanaComponet extends React.Component {
    constructor(props){
        super(props); 
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        alert(this.underlyingInputElement.value);
    }
    render(){
        return (
        <AgGridWithEnhancedClickOutside width="300" myRef={(x)=> {this.underlyingInputElement = x}} onInputClick={this.onClick} />
        );
    }
}


 
