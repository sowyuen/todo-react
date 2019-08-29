class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
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
      let list = this.state.list;
      let itemElements = list.map((task) => {
        return <li>{`${task}`}</li>
      });

      console.log("rendering");
      return (
        <div className="list">
        <p> Typed: {this.state.word} </p>
          {this.state.word.length <1 ? <input className= "warning" onChange={(event)=>{this.changeHandler(event)}}/> :<input onChange={(event)=>{this.changeHandler(event)}}/> }
          <button onClick={()=>{this.addItem()}}>add item</button>
          <ul>
            {itemElements}
          </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);