import React,{ Component } from "react";
import ListItem from "./ListItem"
import NewItem from "./NewItem";
import CheckBox from "./CheckBox";
class ToDoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoList : [
        {id:1,content:'React practice',done:true},
        {id:2,content:'game time',done:false}
      ],
      number:3
    }
  }
  addNewItem = (newItem)=>{
    const num = this.state.number;
    const newList = [...this.state.todoList,{id:num,content:newItem,done:false}];
    this.setState({
      todoList:newList,
      number:num+1
    })
  }
  setItemDone = (id)=>{
    // const newList = []
    this.state.todoList.map((item,index) =>{
      if(item.id==id){
        item.done=!item.done;
        this.setState({

        })
        // console.log('item');
        // console.log(item.done);
      }
    })
  }
  render(){

        return (
          <div>
            {/* <checkBox setDone={this.setItemDone}/> */}
            {
              this.state.todoList.map(item=><div key={item.id}><CheckBox setDone={this.setItemDone} item={item}/> <ListItem item={item}/></div>)
            }
            <NewItem addItem={this.addNewItem}/>
          </div>
        );
  }
}
export default ToDoList