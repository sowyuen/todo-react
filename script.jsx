class Task extends React.Component {
    render(){
        return (
            <li>{this.props.item}</li>
            )
    }
}

class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : [],
      keyCount: 0
    }
  }

  addItem(){
    this.state.list.push(this.state.word);
    this.setState(this.state.list);
    console.log("this.state.list",this.state.list);
  }

  changeHandler(){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }


  render() {
      // render the list with a map() here
      const list = this.state.list.map((task, taskIndex) => {
        return(
            <Task key={taskIndex} item={task}/>
        );
      })

      console.log("rendering");
      return (
        <div className="justify-content-center text-center">
        <h1> To-do List </h1>
        <p> Typed: {this.state.word} </p>
          {this.state.word.length <2 ? <input className= "warning" onChange={(event)=>{this.changeHandler(event)}}/> :<input onChange={(event)=>{this.changeHandler(event)}}/> }
          <button onClick={()=>{this.addItem()}}>add item</button>
          <ul>
            {list}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);