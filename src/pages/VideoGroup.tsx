import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {videoGroups} from '../data';

interface VideoGroup
  extends RouteComponentProps<{
    tid: string;
  }> {}

const VideoGroup: React.FC<VideoGroup> = ({
  match: {
    params: {tid},
  },
}) => {
  useEffect(() => {}, []);

  let j = 0;

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <div
                id="videos_header"
                style={{
                  backgroundImage: `url('/assets/img/bg_home_${Number(tid) + 1}.jpg')`,
                }}>
                {['ทักษะฟุตบอลขั้นพื้นฐาน', 'ทักษะเลี้ยงบอลขั้นเทพ'][Number(tid) - 1]}
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div id="videos" className="container">
            {videoGroups.map((g, i) =>
              g.tid == Number(tid) ? (
                <Link key={i} className="box" to={`/VideoList/${g.tid}/${g.gid}`}>
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url('${g.image}')`,
                    }}></div>
                  <div className="content">
                    <div className="name">
                      {++j}. {g.name}
                    </div>
                  </div>
                </Link>
              ) : (
                ''
              )
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default VideoGroup;
