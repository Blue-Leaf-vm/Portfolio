import './App.css'
import profilePic from './assets/profile.png'

function App() {
  return (
    <>
      <div className='box'>
        <div className='left'>
          <div className='left-content'>
            <img src={profilePic} alt='Profile' className='profile-img' />
            <p className='article'><strong>효율성</strong>과 <strong>혁신</strong>을 바탕으로<br/>새로운 길을 만들어 가는 개발자</p>
            <p className='contact'>🧑‍🎓 강태은 (Kang Tae Eun)<br/>📨 yellowaholotle@gmail.com<br/>💻 Blue-Leaf-vm</p>
          </div>
        </div>
        <div className='right'>
          <h1 className='title'>Portfolio</h1>
          <div className='grid'>
            <div className='card'>
              <p className='card-title'>경력</p>
              <p className='card-description'>교내 음악 추천 서비스 운영｜2024.04. ~ 2025.02.</p>
              <p className='card-description'>교내 웹 클론 대회 출품｜2025.07.</p>
              <p className='card-description'>전공동아리 “아라” 활동｜2025.09. ~</p>
            </div>
            <div className='card'>
              <p className='card-title'>수상 내역</p>
              <p className='card-description'>한국 정보올림피아드 고등부 장려상｜2025</p>
              <p className='card-description'>ICT어워드코리아 창의와 코딩 장려상｜2025</p>
              <p className='card-description'>전국 ICT 창의성대회 은상, 대상｜2025</p>
              <p className='card-description'>교내 웹 클론 대회 최우수상｜2025</p>
            </div>
          </div>
          <h2 className='title'>Project</h2>
          <div className='grid vertical'>
            <div className='card'>
              <p className='card-title'>노래방 웹 클론</p>
              <p className='card-description'>평소 관심있던 노래방을 웹으로 구현해보고 싶은 마음에 시작하게 된 프로젝트입니다.<br/>
HTML, CSS, JS만으로 구현하였으며, TJ 2시리즈 반주기에서 UI를 클론해 제작하였습니다.<br/>
제작 과정 중 마디 점프 기능과 딜레이 기능이 가장 문제였으나 각각 계산식 수정,  보정 시간 계산 등을 통하여 해결하였습니다.</p>
            </div>
            <div className='card'>
              <p className='card-title'>디스코드 미니게임 봇</p>
              <p className='card-description'>디스코드에서 간단하게 즐길 수 있는 미니게임 봇을 만들어보자는 목표로 시작하게 된 프로젝트입니다.<br/>
Node.js로 개발하였으며, 초반엔 봇과 즐길 수 있는 콘셉트로 제작되어, 가위바위보 게임을 제작했습니다.<br/>
하지만 사람들끼리 즐길 수 있는 미니게임이 중요하다고 생각하여, 현재의 프로젝트가 되었습니다.<br/>
가장 먼저 만든 게임은 “러시안 룰렛”으로, 사람들이 순서대로 돌아가며 총을 쏘는 게임입니다.<br/>
본인의 차례에서 총이 발사되면 탈락하는 방식의 게임이고, 이 게임을 기반으로 다른 게임들도 제작되었습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
