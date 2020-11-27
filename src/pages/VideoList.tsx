import React, {useEffect, useState} from 'react';
import {IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';
import * as icons from 'ionicons/icons';

import {videos, videoGroups} from '../data';

interface VideoList
  extends RouteComponentProps<{
    tid: string;
    gid: string;
  }> {}

const VideoList: React.FC<VideoList> = ({
  match: {
    params: {tid, gid},
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
                  backgroundImage: `url('${
                    videoGroups.find(g => g.tid == Number(tid) && g.gid == Number(gid))?.image
                  }')`,
                }}>
                {videoGroups.find(g => g.tid == Number(tid) && g.gid == Number(gid))?.name}
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div id="videos" className="container">
            {videos.map((v, i) =>
              v.tid == Number(tid) && v.gid == Number(gid) ? (
                <Link key={i} className="box" to={`/Video/${i}`}>
                  <div
                    className="img v"
                    style={{
                      backgroundImage: `url('https://i3.ytimg.com/vi/${v.key}/maxresdefault.jpg')`,
                    }}>
                    <IonIcon icon={icons.caretForwardCircleOutline} />
                  </div>
                  <div className="content">
                    <div className="name">
                      {++j}. {v.name}
                    </div>
                    <div className="detel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et a.</div>
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

export default VideoList;
