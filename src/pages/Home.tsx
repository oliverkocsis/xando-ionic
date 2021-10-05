import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Game from '../components/Game';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <Game></Game>
      </IonContent>
    </IonPage>
  );
};

export default Home;
