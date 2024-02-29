import { Container } from '@mui/material';
import { FullPage, Slide } from 'react-full-page';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPage from './success-page';
import Question from './question';

function Home() {
  const onPostToast = (success) => {
    if (success) {
      toast.success('🎉 答对了！');
    } else {
      toast.error('⛔️ Opps, You can make a new selection.');
    }
  };
  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} newestOnTop closeOnClick hideProgressBar />
      <Container maxWidth="sm">
        <FullPage>
          <Slide>
            <Question
              index="问题 1/4"
              question="什么是DID?"
              answers={[
                'A: DID是一种数字货币，用于在线交易和支付。',
                'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
                'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
              ]}
              correctPos={2}
              toast={onPostToast}
            />
          </Slide>
          <Slide>
            <Question
              index="问题 2/4"
              question="什么是DID?"
              answers={[
                'A: DID是一种数字货币，用于在线交易和支付。',
                'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
                'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
              ]}
              correctPos={2}
              toast={onPostToast}
            />
          </Slide>
          <Slide>
            <Question
              index="问题 3/4"
              question="什么是DID?"
              answers={[
                'A: DID是一种数字货币，用于在线交易和支付。',
                'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
                'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
              ]}
              correctPos={2}
            />
          </Slide>
          <Slide>
            <Question
              index="问题 4/4"
              question="什么是DID?"
              answers={[
                'A: DID是一种数字货币，用于在线交易和支付。',
                'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
                'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
              ]}
              correctPos={2}
              toast={onPostToast}
            />
          </Slide>
          <Slide>
            <SuccessPage />
          </Slide>
        </FullPage>
      </Container>
    </>
  );
}

export default Home;
