import react from 'react'
import main001 from '../images/main001.jpg';

const MainBanner = () => {

    return (
    <div className="mainBanner">
        {/* 메인배너(슬라이드 O) 
        화살표 추가*/}
        
          <ul>
            <li>
                <img src={main001}/>
            </li>

          </ul>
          </div>
    )
};

export default MainBanner;