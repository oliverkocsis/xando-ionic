import './Grid.css';
import Space from './Space';
import {X, O} from './Players';

interface ContainerProps { }

const Grid: React.FC<ContainerProps> = () => {
  return (
    <div className="grid">
        <Space turn={O}></Space>
        <Space turn={X}></Space>
        <Space turn={O}></Space>
        <Space turn={O}></Space>
        <Space turn={X}></Space>
        <Space turn={O}></Space>
        <Space turn={O}></Space>
        <Space turn={X}></Space>
        <Space turn={O}></Space>
    </div>
  );
};

export default Grid;
