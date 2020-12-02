import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';


import {theplayers} from '../data';
interface InfoList
  extends RouteComponentProps<{
    id: string;
  }> {}

const InfoList: React.FC<InfoList> = ({
  match: {
    params: {id: vid},
  },
}) => {
  useEffect(() => {
    
  }, []);

  let j = 0;

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <div id="infolist_header" className="container">
              กฎกติกาของกีฬาฟุตบอล
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div id="infolist" className="container">
            {theplayers.map((n, i) => (
              <Link to={`/ListFootball/${i}`} key={i}>
                {i + 1}. {n.titles}
              </Link>
            ))}
          </div>
          
        </IonContent>
      </IonPage>
    </>
  );
};

export default InfoList;
