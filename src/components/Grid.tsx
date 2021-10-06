import './Grid.css';
import Space from './Space';

interface ContainerProps {
  spaces: string[];
  mark: (index: number) => void
}

const Grid: React.FC<ContainerProps> = (props) => {
  const spaces = props.spaces.map((space, index) => <Space key={index} index={index} value={space} mark={props.mark}></Space>);

  return (
    <div className="grid">
      {spaces}
    </div>
  );
};

export default Grid;
