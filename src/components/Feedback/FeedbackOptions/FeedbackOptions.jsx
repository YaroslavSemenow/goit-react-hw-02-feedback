import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={style.list}>
      {options.map(option => {
        return (
          <li className={style.item} key={option}>
            <button
              className={style.btn}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
