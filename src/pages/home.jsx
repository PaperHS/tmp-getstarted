import { useEffect, useRef, useState, useContext } from 'react';
import { Container } from '@mui/material';
import { LocaleContext } from '@arcblock/ux/lib/Locale/context';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPage from './success-page';
import Question from './question';

function Home() {
  const [index, setIndex] = useState(0);
  const { t } = useContext(LocaleContext);
  const toastContent = (msg) => {
    return (
      <div
        style={{
          width: '200px',
          height: '20px',
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 8,
          paddingBottom: 8,
          background: 'white',
          boxShadow: '0px 4px 8px rgba(3, 7, 18, 0.08)',
          borderRadius: 8,
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          display: 'inline-flex',
        }}>
        <div
          style={{
            textAlign: 'center',
            color: '#4B5563',
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: '500',
            wordWrap: 'break-word',
          }}>
          {msg}
        </div>
      </div>
    );
  };
  const onPostToast = (success) => {
    toast.dismiss();
    if (success) {
      toast.info(toastContent(t('correct')), { icon: false });
      setTimeout(() => {
        containerRef.current.style.transform = 'translateY(-100%)';
        containerRef.current.style.opacity = 0;
      }, 900);
      setTimeout(() => {
        setIndex(index + 1);
      }, 1000);
    } else {
      toast.error(toastContent(t('wrong')), { icon: false });
    }
  };

  const Outer = styled.div`
    .slide-container {
      transition:
        transform 0.2s ease,
        opacity 0.1s ease;
      transform: translateY(50%);
      opacity: 0;
    }
    .toast-container {
      z-index: 0;
      box-shadow: none;
      .Toastify__toast {
        box-shadow: none;
      }
    }
  `;

  const containerRef = useRef(null);
  useEffect(() => {
    // 过渡结束后回调
    const onTransitionEnd = () => {
      containerRef.current.style.transform = 'none';
    };
    const currentRef = containerRef.current;
    containerRef.current.addEventListener('transitionend', onTransitionEnd);
    setTimeout(() => {
      containerRef.current.style.transform = 'translateY(0%)';
      containerRef.current.style.opacity = 1;
    }, 300);
    return () => {
      currentRef.removeEventListener('transitionend', onTransitionEnd);
    };
  });

  return (
    <Outer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop
        hideProgressBar
        theme="transparent"
        className="toast-container"
        style={{
          background: 'transparent',
          fontSize: '12sp',
          boxShadow: 'none',
        }}
      />
      <Container maxWidth="sm">
        <div ref={containerRef} className="slide-container">
          {index === 0 && (
            <Question
              index={t('title_1')}
              question={t('question.q1.question')}
              answers={[t('question.q1.answers.0'), t('question.q1.answers.1'), t('question.q1.answers.2')]}
              correctPos={2}
              toast={onPostToast}
            />
          )}
          {index === 1 && (
            <Question
              index={t('title_2')}
              question={t('question.q2.question')}
              answers={[t('question.q2.answers.0'), t('question.q2.answers.1'), t('question.q2.answers.2')]}
              correctPos={2}
              toast={onPostToast}
            />
          )}
          {index === 2 && (
            <Question
              className="slide-container"
              index={t('title_3')}
              question={t('question.q3.question')}
              answers={[t('question.q3.answers.0'), t('question.q3.answers.1'), t('question.q3.answers.2')]}
              correctPos={1}
              toast={onPostToast}
            />
          )}
          {index === 3 && (
            <Question
              className="slide-container"
              index={t('title_4')}
              question={t('question.q4.question')}
              answers={[t('question.q4.answers.0'), t('question.q4.answers.1'), t('question.q4.answers.2')]}
              correctPos={2}
              toast={onPostToast}
            />
          )}
          {index === 4 && <SuccessPage />}
        </div>
      </Container>
    </Outer>
  );
}

export default Home;
