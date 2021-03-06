import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {infos} from '../data';

import {playone} from '../data';
interface InfoList
  extends RouteComponentProps<{
    id: string;
  }> {}

const InfoList: React.FC<InfoList> = ({
  match: {
    params: {id: vid},
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
              <div id="infolist_header" className="container">
                ความรู้เกี่ยวกับฟุตบอล
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div id="infolist" className="container">
            {infos.map((n, i) => (
              <Link to={`/Info/${i}`} key={i}>
                {i + 1}. {n.title}
              </Link>
            ))}
            {playone.map((n, i) => (
              <Link to={`/Infolistcopy/`} key={i}>
                {i = 2}. {n.titles}
              </Link>
            ))}
          </div>
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default InfoList;
