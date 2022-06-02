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

              {/* 클릭했을 때 홈으로 이동 */}
              <li><a class="mainLogo">로고</a></li>
          
               {/* 팝업 */}
              <li>마이페이지</li>
          </ul>
        </nav>
      </header>
      <body>
        <MyReview>카테고리배너확인</MyReview>
        
       


      <footer>푸터</footer>
      </body>
      



    </div>
  );
}

export default App;
