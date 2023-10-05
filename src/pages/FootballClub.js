import React from "react";

import '../css/footbalclub.css'
import Clubs from "./Clubs";


const clubsData = [
    {
      name: 'BARCELONA',
      city: 'Barcelona',
      foundationDate: '	29 November 1899; 123 years agoas Foot-Ball Club Barcelona',
      logo: 'Barcelona.png',
    },
    {
      name: 'MANCHESTER UNITED',
      city: 'Manchester',
      foundationDate: '	1878; 145 years ago, as Newton Heath LYR F.C.24 April 1902; 121 years ago, as Manchester United F.C.',
      logo: 'MU.jpg',
    },
];

const FootballClub = () => {
    return(
        <div>
      <div className="RealMadrid-container">
        <h1>REAL MADRID</h1>
        <p>City: Madrid</p>
        <p>Founded: 6 March 1902; 121 years ago (as Madrid Football Club)</p>
        <img src="Real_Madrid_CF.png" alt="Madrid" />
      </div>
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Laliga titles: 35 titles</li>
          <li>Champions League titles: 14</li>
          <li>Spanish cup titles: 20</li>
          <li>UEFA Super Cup titles: 5</li>
          <li>FIFA club world cup titles: 5</li>
          <li>Spanish Super cup titles: 12</li>
          <li>All titles: 97</li>
        </ul>
      </div>
      <div className="squad">
        <h2>Current squad</h2>
        <ul className="player-list">
          <li className="player-item">
            <img src="ANCELOTTI.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Ancelotti</span><br/>
              <span className="player-position">Coach</span>
            </div>
          </li>
          <li className="player-item">
            <img src="Courtois.jpg" alt="gk" />
            <div className="player-info">
              <span className="player-name">Courtois</span><br/>
              <span className="player-position">Goalkeeper</span>
            </div>
          </li>
          <li className="player-item">
            <img src="LUNIN.jpg" alt="lun" />
            <div className="player-info">
              <span className="player-name">Lunin</span> <br/>
              <span className="player-position">Goalkeeper</span>
            </div>
          </li>
          <li className="player-item">
            <img src="MILITAO.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Militao</span> <br/>
              <span className="player-position">Defender</span>
            </div>
          </li>
          <li className="player-item">
            <img src="RUDIGER.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Rudiger</span><br/> 
              <span className="player-position">Defender</span>
            </div>
          </li>
          <li className="player-item">
            <img src="ALABA.jpg" alt="gf" />
            <div className="player-info">
              <span className="player-name">Alaba</span><br/>
              <span className="player-position">Defender</span>
            </div>
          </li>
          <li className="player-item">
            <img src="MENDY.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Mendy</span><br/>
              <span className="player-position">Defender</span>
            </div>
          </li>
          <li className="player-item">
            <img src="CARVAJAL.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Carvajal</span><br/>
              <span className="player-position">Defender</span>
            </div>
          </li>
          <li className="player-item">
            <img src="KROOS.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Kroos</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="MODRIC.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Modric</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="VALVERDE.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Valverde</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="TCHOUAMENI.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Tchouameni</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="BRAHIM.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Brahim</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="BELLINGHAM.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Bellingham</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="CAMAVINGA.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Camavinga</span><br/>
              <span className="player-position">Midfielder</span>
            </div>
          </li>
          <li className="player-item">
            <img src="VINICIUS.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Vinicius JR</span><br/>
              <span className="player-position">Forward</span>
            </div>
          </li>
          <li className="player-item">
            <img src="JOSELU.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Joselu</span><br/>
              <span className="player-position">Forward</span>
            </div>
          </li>
          <li className="player-item">
            <img src="RODRYGO.jpg" alt="Игрок 3" />
            <div className="player-info">
              <span className="player-name">Rodrygo</span><br/>
              <span className="player-position">Forward</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    )
}
export default FootballClub;