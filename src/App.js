import './App.css';
import Article from './component/Article';
import Create from './component/Create';
import Header from './component/Header';
import Nav from './component/Nav';
import { useState } from 'react';
import Update from './component/Update';

function App() {
  // let _mode = useState('WELCOME')
  // let mode = _mode[0]
  // let setMode = _mode[1]
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(4)
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ])
  let content=null
  let contextCotrol=null
  if(mode==='WELCOME'){
    content=<Article title='Welcome' body='React is ...'/>
  }else if(mode==='READ'){
    let title, body=null
    for(let i=0;i<topics.length;i++){
      if(topics[i].id===Number(id)){
        title=topics[i].title      
        body=topics[i].body
      }
    }
    content=<Article title={title} body={body}/>
    contextCotrol=
    <>
    <li><a href={'/update/'+id} onClick={e=>{
      e.preventDefault()
      setMode('UPDATE')
    }}>UPDATE</a></li>
    <li><input type='button' value='DELETE' onClick={()=>{
      const newTopics = []
      for(let i=0;i<topics.length;i++){
        console.log(topics[i].id, Number(id))
        if(topics[i].id!==Number(id)){
          newTopics.push(topics[i])
        }
      }
      setTopics(newTopics)
      setMode('WELCOME')
    }}/></li>
    </>
  }else if(mode==='CREATE'){
    content=<Create onCreate={(_title, _body)=>{
      const newTopic = {id: nextId, title: _title, body: _body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      setMode('READ')
      setId(nextId)
      setNextId(nextId+1)
    }}/>
  }else if(mode==='UPDATE'){
    let title, body=null
    for(let i=0;i<topics.length;i++){
      if(topics[i].id===Number(id)){
        title=topics[i].title      
        body=topics[i].body
      }
    }
    content=<Update onUpdate={(_title, _body)=>{
      const updatedTopic = {id: Number(id), title: _title, body: _body}
      const newTopics = [...topics]
      for(let i=0;i<newTopics.length;i++){
        console.log(newTopics[i].id, Number(id))
        if(newTopics[i].id===Number(id)){
          newTopics[i]=updatedTopic
          break
        }
      }
      console.log(newTopics)
      setTopics(newTopics)
      setMode('READ')
    }} id='' name='' title={title} body={body}/>
  }
  return (
    <div>
      <Header title='React'onChangeMode={()=>{
      }} />
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ')
        setId(_id)
      }}/>
      <ul>
        <li><a href='/create' onClick={e=>{
          e.preventDefault()
          setMode('CREATE')
        }}>CREATE</a></li>
        {contextCotrol}
      </ul>
      {content}
    </div>
  );
}

export default App;
