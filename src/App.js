import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState(['React Blog', 'Hamberger Blog', 'Shoes Blog']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [input, setInput] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>

      <button onClick={()=>{
        let temp = [...logo];
        temp.sort();
        setLogo(temp);
      }}>가나다순 정렬</button>

      {
        logo.map((content, i)=>{
          let onClick = function(){
            if(!modal || index === i) setModal(!modal);
            setIndex(i);
          }
          return(
            <div className='list' key={i}>
              <h4 onClick={onClick}> { content }
                <span onClick={(e)=>{
                    e.stopPropagation();
                    let temp = [...like];
                    temp[i]++;
                    setLike(temp);
                  }}>👍</span>{ like[i] }
                <button onClick={(e)=>{
                  e.stopPropagation();
                  let temp = [...logo];
                  temp.splice(i, 1);
                  setLogo(temp);
                  let tempLike = [...like];
                  tempLike.splice(i, 1);
                  setLike(tempLike);
                }}>삭제</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      <input onChange={(e)=>{ setInput(e.target.value) }}></input>
      <button onClick={()=>{
        let temp = [...logo];
        temp.push(input);
        setLogo(temp);
        let tempLike = [...like];
        tempLike.push(0);
        setLike(tempLike);
      }}>글 등록</button>
      {
        modal ? <Modal logo={logo} index={index} setLogo={setLogo}></Modal> : null
      }
    </div>
  );
}

function Modal(props) {
  return(
    <div className='modal'>
      <h4>{ props.logo[props.index] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let temp = [...props.logo]
        temp[props.index] = "hi"
        props.setLogo(temp)
      }}>글 수정</button>
    </div>
  );
}

export default App;
