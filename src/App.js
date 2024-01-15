import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState(['React Blog', 'Hamberger Blog', 'Shoes Blog']);
  let [like, setLike] = useState(0);
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

      <div className='list'>
        <h4>{ logo[0] }<span onClick={ ()=>{
          setLike(like + 1);
          let temp = [...logo];
          temp[0] = 'React Hi';
          setLogo(temp);
        } }>👍</span>{ like }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ logo[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ logo[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  );
}

export default App;
