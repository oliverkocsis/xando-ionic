import './Space.css';

interface ContainerProps {
  turn: string;
}

const Space: React.FC<ContainerProps> = (props) => {
  return (
    <div className="space">
      {props.turn}
    </div>
  );
};

export default Space;
