import './Space.css';

interface ContainerProps {
  index: number;
  value: string;

  mark: (index: number) => void
}

const Space: React.FC<ContainerProps> = (props) => {
  return (
    <div className="space" onClick={() => props.mark(props.index)}>
      {props.value}
    </div>
  );
};

export default Space;
