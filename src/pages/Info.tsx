import React, {useEffect, useState} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {infos} from '../data';

interface Info
  extends RouteComponentProps<{
    nid: string;
  }> {}

const Info: React.FC<Info> = ({
  match: {
    params: {nid},
  },
}) => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <div id="info_header" className="container">
                {infos[Number(nid)]?.title}
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonCard>
          <IonCardHeader>
            <img src={infos[Number(nid)]?.img} />
            <IonCardTitle>{infos[Number(nid)]?.title}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: infos[Number(nid)]?.discription,
            }}>
          </div>
          </IonCardContent>
        </IonCard>
          {/* <div
            id="info"
            className="container"
            dangerouslySetInnerHTML={{
              __html: infos[Number(nid)]?.discription,
            }}></div> */}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Info;
