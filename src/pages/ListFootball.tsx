import React, {useEffect, useState} from 'react';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';

import {theplayers} from '../data';

interface ListFootball
  extends RouteComponentProps<{
    id: string;
  }> {}

const ListFootball: React.FC<ListFootball> = ({
  match: {
    params: {id},
  },
}) => {
  useEffect(() => {
    console.log(id);
    
  }, [id])
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <div id="info_header" className="container">
                {theplayers[Number(id)]?.titles}
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        
        <IonCard className="c">
          <IonCardHeader>
            <img src={theplayers[Number(id)]?.img} style={{width:"100%"}}/>
            <IonCardTitle style={{color:"#848482"}}>{theplayers[Number(id)]?.titles}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <div
            dangerouslySetInnerHTML={{
              __html: theplayers[Number(id)]?.texts,
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
