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
    width: `${props.size}px`,
    height: `${props.size}px`,
    padding: `${props.size * 0.1}px`,
    borderTop: 'hidden',
    borderRight: 'hidden',
    borderLeft: 'solid',
    borderBottom: 'solid',
  }

  if (props.index > 5) styles.borderBottom = 'hidden';
  if (props.index % 3 == 0) styles.borderLeft = 'hidden';

  let svgMark;
  switch (props.value) {
    case X:
      svgMark = <svg className="mark" width="100%" height="100%" viewBox="0 0 329.26933 329" xmlns="http://www.w3.org/2000/svg" ><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>;
      break;
    case O:
      svgMark = <svg className="mark" width="100%" height="100%" viewBox="0 0 341.333 341.333" xmlns="http://www.w3.org/2000/svg" ><path d="M170.667,0C76.41,0,0,76.41,0,170.667s76.41,170.667,170.667,170.667s170.667-76.41,170.667-170.667S264.923,0,170.667,0z M170.667,298.667c-70.692,0-128-57.308-128-128s57.308-128,128-128s128,57.308,128,128S241.359,298.667,170.667,298.667z" /></svg>;
      break;
    default:
      svgMark = <span>&nbsp;</span>;
      break;
  }

  return (
    <div className="space" style={styles} onClick={blockOrMark} aria-label={props.value} data-testid={'space-' + props.index}>
      {svgMark}
    </div>
  );
};

export default Space;
