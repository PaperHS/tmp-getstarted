import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Answer from './answer';

function Question({ index, question, answers, correctPos, toast }) {
  const [selectedPos, setSelectedPos] = useState(-1);
  const onSelect = (pos) => {
    setSelectedPos(pos);
    toast(pos === correctPos);
  };

  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="center" alignItems="flex-start" height="100vh" spacing={3}>
        <Grid item>
          <div
            style={{
              color: '#4B5563',
              fontSize: 14,
              fontFamily: 'Inter',
              fontWeight: '500',
              wordWrap: 'break-word',
            }}>
            {index}
          </div>
        </Grid>
        <Grid item>
          <div
            style={{
              color: '#3B82F6',
              fontSize: 32,
              fontFamily: 'Inter',
              fontWeight: '700',
              wordWrap: 'break-word',
            }}>
            ‌‌‌{question}
          </div>
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
            <Grid item>
              <Answer
                content={answers[0]}
                pos={0}
                selected={selectedPos === 0}
                correct={correctPos === 0}
                onSelect={onSelect}
              />
            </Grid>
            <Grid item>
              <Answer
                content={answers[1]}
                pos={1}
                onSelect={onSelect}
                selected={selectedPos === 1}
                correct={correctPos === 1}
              />
            </Grid>
            <Grid item>
              <Answer
                content={answers[2]}
                pos={2}
                onSelect={onSelect}
                selected={selectedPos === 2}
                correct={correctPos === 2}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
Question.propTypes = {
  index: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.string.isRequired,
  correctPos: PropTypes.number.isRequired,
  toast: PropTypes.func.isRequired,
};

export default Question;
