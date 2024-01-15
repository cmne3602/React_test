import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState(['React Blog', 'Hamberger Blog', 'Shoes Blog']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);

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
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{ 
                setModal(!modal)
                setIndex(i)
                }}> { content }
              </h4>
              <h4 style={{display : 'inline'}}>
                <span onClick={ ()=>{
                  let temp = [...like]
                  temp[i]++
                  setLike(temp)
                }}>👍</span>{ like[i] }
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

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
