import React,{Component} from 'react';
import './App.css';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(){
    super();
    this.lists = [
      {
        company:'vinmast',
        contact:'ha noi',
        country:'vietnam',
      },
      {
        company:'hoang ha',
        contact:'tphcm',
        country:'vietnam',
      },
      {
        company:'microsoft',
        contact:'califolia',
        country:'USA',
      },
    ]
  }
  render(){
    var list = this.lists.map((item,index)=>{
      return <ListItem 
      key={index} 
      company={item.company}
      contact={item.contact}
      country={item.country} 
      />
    });

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
