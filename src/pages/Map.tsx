import React, {useEffect, useState} from 'react';
import {IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {RouteComponentProps, Link} from 'react-router-dom';
import * as icons from 'ionicons/icons';

import {fields} from '../data';

const Map: React.FC = () => {
  const [location, setlocation] = useState({lat: 0, lon: 0});

  useEffect(() => {
    getLocation();
  }, []);

  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setlocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  };

  let measure = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    // generally used geo measurement function
    let R = 6378.137; // Radius of earth in KM
    let dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    let dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    // return (d * 1000) + " km."; // meters
    return Math.floor(d * 100) / 100; // km
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <div id="map_header" className="container">
                ค้นหาสนามฟุตบอล<IonIcon icon={icons.refreshSharp} onClick={getLocation} />
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div id="map" className="container">
            {fields
              .map(f =>
                Object({
                  ...f,
                  measure: measure(location.lat, location.lon, f.lat, f.lon),
                })
              )
              .sort((a, b) => (a.measure > b.measure ? 1 : a.measure < b.measure ? -1 : 0))
              .map((f, i) => (
                <a key={i} className="field" href={`https://www.google.com/maps/dir/?api=1&destination=${f.name}`} target="_blank">
                  <IonIcon icon={icons.navigateCircleOutline} />
                  <div>
                    <div className="measure">{f.measure} กม.</div>
                    <div className="name">{f.name}</div>
                  </div>
                </a>
              ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Map;
