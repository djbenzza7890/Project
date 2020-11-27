import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {infos} from '../data';

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
                ความรู้เกี่ยว กับฟุตบอล
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
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default InfoList;
