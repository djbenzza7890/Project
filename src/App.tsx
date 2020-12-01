import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import * as icons from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './components/ExploreContainer.css';
import './theme/variables.css';
import './main.css';
import './pages/page.css';

/* Import Component */
import Home from './pages/Home';
import Video from './pages/Video';
import VideoList from './pages/VideoList';
import VideoGroup from './pages/VideoGroup';
import Info from './pages/Info';
import InfoList from './pages/InfoList';
import ListFootball from './pages/ListFootball';
import InfoListcopy from './pages/InfoListcopy';
import Map from './pages/Map';

var google_api = 'AIzaSyDs2Ko7K_0wOeY9qBZN4SPJ6i2wOwliokw';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/InfoListcopy" component={InfoListcopy}/>
          <Route path="/ListFootball" component={ListFootball}/>
          <Route path="/Home" component={Home} />
          <Route path="/Video/:vid" component={Video} />
          <Route path="/VideoList/:tid/:gid" component={VideoList} />
          <Route path="/VideoGroup/:tid" component={VideoGroup} />
          <Route path="/Info/:nid" component={Info} />
          <Route path="/InfoList" component={InfoList} />
          <Route path="/Map" component={Map} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={icons.home} />
            <IonLabel>หน้าแรก</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Map" href="/Map">
            <IonIcon icon={icons.search} />
            <IonLabel>ค้นหาสนาม</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="Video" href="/Video">
            <IonIcon icon={icons.search} />
            <IonLabel>ค้นหาสนาม</IonLabel>
          </IonTabButton>
          <IonTabButton tab="VideoList" href="/VideoList">
            <IonIcon icon={icons.search} />
            <IonLabel>ค้นหาสนาม</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
