import React,{ Component } from "react";

class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked :this.props.item.done
        }
        // console.log('new checkbox');
        // console.log(this.props.item.done);
        // console.log(this.state.checked);

    }
    onCheck = ()=>{
        this.setState({
            checked:!this.props.item.done
        })
        this.props.setDone(this.props.item.id);
        // console.log('checkBox')
        // console.log(this.state.checked)
        // 避免在执行完this.setState后马上读取this.state，
        // 此操作并不会获得最新修改的状态。
    }
    render(){
        return(
            <input type='checkbox'  onChange={this.onCheck} checked={this.state.checked}></input>
        )
    }
}
export default CheckBox
