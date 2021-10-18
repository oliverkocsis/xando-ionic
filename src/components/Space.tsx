import { NONAME } from 'dns';
import './Space.css';
import { _, X, O } from './Players';

interface ContainerProps {
  index: number;
  value: string;

  mark: (index: number) => void
}

const Space: React.FC<ContainerProps> = (props) => {
  function blockOrMark() {
    if (props.value == _) {
      props.mark(props.index);
    }

  }

  return (
    <div className="space" onClick={blockOrMark} aria-label={props.value} data-testid={'space-' + props.index}>
      {props.value}
    </div>
  );
};

export default Space;
