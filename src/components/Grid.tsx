import './Grid.css';
import Space from './Space';

interface ContainerProps {
  spaces: string[];
  size: number;
  mark: (index: number) => void
}

const Grid: React.FC<ContainerProps> = (props) => {
  const spaceSize = Math.floor(props.size / 3);
  const gridSize = spaceSize * 3;
  const spaces = props.spaces.map((space, index) => <Space key={index} index={index} value={space} size={spaceSize} mark={props.mark}></Space>);

  const styles = {
    width: `${gridSize}px`,
    height: `${gridSize}px`,
  }

  return (
    <div className="grid" style={styles} >
      {spaces}
    </div>
  );
};

export default Grid;
