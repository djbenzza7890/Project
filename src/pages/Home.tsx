import React from 'react';
import {Link} from 'react-router-dom';
import {IonContent, IonIcon, IonPage} from '@ionic/react';
import * as icons from 'ionicons/icons';
import { GiFootTrip } from "react-icons/gi";

const Home: React.FC = () => {
  // const myIcon ="/public/assets/img/image2vector.svg";
  return (
    <>
      <IonPage>
        <IonContent>
          <div id="home" className="container">
            <h1>BasicFootBall</h1>
            <div className="menus">
              <Link className="menu" to="/InfoList">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('/assets/img/bg_home_1.jpg')`,
                  }}></div>
                <IonIcon icon={icons.football} />
                <div className="title">
                  ความรู้เกี่ยว
                  <br />
                  กับฟุตบอล
                </div>
              </Link>
              <Link className="menu" to="/VideoGroup/1">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('/assets/img/bg_home_2.jpg')`,
                  }}></div>
                <IonIcon icon={icons.body} />
                <div className="title">
                  ทักษะฟุตบอล
                  <br />
                  ขั้นพื้นฐาน
                </div>
              </Link>
            </div>
            <div className="menus" style={{flex: 4}}>
              <Link className="menu long" to="/VideoGroup/2">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('/assets/img/bg_home_3.jpg')`,
                  }}></div>
                <IonIcon icon={icons.accessibility} />
                <div className="title">
                  ทักษะเลี้ยงบอล
                  <br />
                  ขั้นเทพ
                </div>
              </Link>
            </div>
            <div className="menus" style={{flex: 3, marginTop: '4vh'}}>
              <Link className="menu long" to="/Map">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url('/assets/img/bg_home_4.jpg')`,
                  }}></div>
                <IonIcon icon={icons.search} />
                <div className="title">
                  ค้นหาสนาม
                  <br />
                  ฟุตบอล
                </div>
              </Link>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
