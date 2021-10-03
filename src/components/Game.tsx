import './Game.css';
import Grid from './Grid';

interface ContainerProps { }

const Game: React.FC<ContainerProps> = () => {
  return (
    <div className="game">
        <Grid></Grid>
    </div>
  );
};

export default Game;
