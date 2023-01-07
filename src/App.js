import { createElement,Fragment, useEffect, useState } from 'react';
import Tailwind from "./Tailwind";
import './tailwind.css'
import Button from './Components/Button.js'
import Tab from './Components/Tab.js'

function Profile(){
  return(
    <div>
      Burası profile tabı
    </div>
  )
}

function App() {

  const name = "nursah"
  const todos=['todo1','tofo2','todo3']

  const [activeTab,setActiveTab] = useState(1)

  // function Button(props){
  //   return <button>{props.text}</button>
  // }

  // const h1=createElement('h1',null,'nursah.com')
  // const ul=createElement('ul',null,todos.map(todo => createElement('li',null,todo)))
  // const button=createElement(Button,{
  //   text:'button texti'
  // },null)

  // return createElement('main',{
  //   className:'test',
  //   id:'main',
  // },h1,ul,button)



  return (
   <>

  <div style={{padding:20}}>
    <button onClick={() => setActiveTab(2)}>
      Aktif tabı değiştir
    </button>
    <Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)}>
      <Tab.Panel title="Profil"><Profile/></Tab.Panel>
      <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
      <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
    </Tab>
    {activeTab === 2 && (
        <div>
          Burası ekstra bi alan
        </div>
    )}
  </div>

   <div style={{padding:20}}>
    <Button>
      Buton Örneği
    </Button>
    <Button variant="success">
      Buton Örneği
    </Button>
      <Button text="Buton Örneği" variant="danger"/>
      <Button text="Buton Örneği" variant="warning"/>
   </div>
    <h1 tabIndex="3" style={{color:'blue', backgroundColor:'yellow'}}>nursah.com</h1>
    <label htmlFor="search" tabIndex="2" onClick={() => alert('merhaba')} >Arama</label>
    <input type="text" id="search" tabIndex="1"/>
    <ul>
      {name + " gunes"}
      {todos.map((todo,index)=> (
        <li key={index}>
          {todo}
        </li>
      ))}
    </ul>
   </>
  );
}

export default App;
