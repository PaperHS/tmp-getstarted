import PropTypes from 'prop-types';

function Answer({ pos, content, selected, correct, onSelect }) {
  const selectColor = correct ? '#3B82F6' : '#F9FAFB';
  const selectTxtColor = correct ? '#FFFFFF' : '#E11D48';
  return (
    <div
      style={{
        width: 300,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        background: selected ? selectColor : '#F9FAFB',
        borderRadius: 8,

        justifyContent: 'start',
        alignItems: 'start',
        gap: 10,
        display: 'inline-flex',
      }}
      onClick={() => {
        onSelect(pos);
      }}>
      <div
        style={{
          width: 300,
          color: selected ? selectTxtColor : '#030712',
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '500',
          textAlign: 'left',
          alignContent: 'start',
          wordWrap: 'break-word',
          whiteSpace: 'pre-line',
        }}>
        {content}
      </div>
    </div>
  );
}
Answer.propTypes = {
  pos: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  correct: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
export default Answer;
