import React, {useEffect, useState} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {theplayers} from '../data';

interface ListFootball
  extends RouteComponentProps<{
    nid: string;
  }> {}

const ListFootball: React.FC<ListFootball> = ({
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
                {theplayers[Number(nid)]?.titles}
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        
        <IonCard>
          <IonCardHeader>
            <img src={theplayers[Number(nid)]?.img} />
            <IonCardTitle>{theplayers[Number(nid)]?.titles}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: theplayers[Number(nid)]?.texts,
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

export default ListFootball;
