import './App.css';
import CategoryBanner from './components/banner/CategoryBanner'
import MyReview from './components/MyPage/MyReview';

function App() {
  return (
    <div className="App">
      <header>
         {/* 네비게이션바 */}
        <nav>
          <ul>
              <li><a>index</a></li>
              <li><a>event</a></li>
              <li><a>리뷰</a></li>
              <li><a>거래</a></li>
              
            <li><a class="mainLogo">로고</a></li>
          
          {/* 팝업 */}
          <li>마이페이지</li>
          </ul>
        </nav>
      </header>
      <body>
        <MyReview>나중에 지우기</MyReview>
        
        {/*메인 배너(슬라이드 유무 2개)*/}
      <div>
        <img />
      </div>

      


      {/*지금 인기 게시글*/}
      <div>

      </div>

      {/*내가 좋아요 누른 글*/}
      <div>
        
      </div>

      {/*신규 판매글*/}
      <div>
        
      </div>
      


      </body>
      <footer>아악</footer>



    </div>
  );
}

export default App;
