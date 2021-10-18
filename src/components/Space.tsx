import { NONAME } from 'dns';
import './Space.css';
import { _, X, O } from './Players';
import { sanitizeDOMString } from '@ionic/core/dist/types/utils/sanitization';

interface ContainerProps {
  index: number;
  value: string;
  size: number;
  mark: (index: number) => void
}

const Space: React.FC<ContainerProps> = (props) => {
  function blockOrMark() {
    if (props.value == _) {
      props.mark(props.index);
    }

  }

  const styles = {
    width: `${props.size - 2}px`,
    height: `${props.size - 2}px`,
    fontSize: `${props.size - 4}px`,
    lineHeight: `${props.size}px`
  }

  return (
    <div className="space" style={styles} onClick={blockOrMark} aria-label={props.value} data-testid={'space-' + props.index}>
      {props.value}
    </div>
  );
};

export default Space;
