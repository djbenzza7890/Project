import React, {useEffect, useState} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage} from '@ionic/react';
import Iframe from 'react-iframe';
import {RouteComponentProps} from 'react-router-dom';

import {videos} from '../data';

interface Video
  extends RouteComponentProps<{
    vid: string;
  }> {}

const Video: React.FC<Video> = ({
  match: {
    params: {vid},
  },
}) => {
  const [video, set_video] = useState([]);
  const [show, set_show] = useState(false);

  useEffect(() => {
    set_show(window.location.href.split('/')[3] == 'Video');
  }, [window.location.href]);

  return (
    <>
      <IonPage>
        <IonContent>
          <div id="video" className="container">
            {show ? (
              <Iframe
                id="video_header"
                className="x"
                allowFullScreen={true}
                url={`https://www.youtube.com/embed/${videos[Number(vid)].key}?controls=1`}
              />
            ) : (
              ''
            )}


            <IonCard>
            <IonCardContent>
            <div id="video_body">
            <h1>{videos[Number(vid)].name}</h1>
            <p>{videos[Number(vid)].text}</p>
            </div> 
            </IonCardContent>
            </IonCard>


            {/* <div id="video_body">
              <h1>{videos[Number(vid)].name}</h1>
              <p>
              {videos[Number(vid)].text}
              </p>
            </div> */}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Video;
