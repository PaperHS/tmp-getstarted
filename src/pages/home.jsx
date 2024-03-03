import { useEffect, useRef, useState } from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPage from './success-page';
import Question from './question';

function Home() {
  const [index, setIndex] = useState(0);
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
      toast.info(toastContent('🎉 答对了！'), { icon: false });
      containerRef.current.style.transform = 'translateY(-100%)';
      containerRef.current.style.opacity = 0;

      setTimeout(() => {
        // containerRef.current.style.transform = 'translateY(100%)';
        // containerRef.current.style.opacity = 1;
        setIndex(index + 1);
      }, 1000);
    } else {
      toast.error(toastContent('⛔️ Opps, You can make a new selection.'), { icon: false });
    }
  };

  const Outer = styled.div`
    .slide-container {
      transition:
        transform 0.5s ease,
        opacity 0.5s ease;
      transform: translateY(100%);
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
              index="问题 1/4"
              question="关于DID的描述下面的哪一个是正确的？"
              answers={[
                'A: DID是一种数字货币，用于在线交易和支付。',
                'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
                'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
              ]}
              correctPos={2}
              toast={onPostToast}
            />
          )}
          {index === 1 && (
            <Question
              index="问题 2/4"
              question="什么是Passport?"
              answers={[
                'A: Passport是一种护照类型，用于国际旅行时验证身份。',
                'B: Passport是一种密码管理软件，用于存储和管理用户的登录凭证。',
                'C: Passport 是为用户颁发的,存储在用户钱包里,用于登录应用的可信任的凭证,具有不同的认证身份,它通常包含Owner, Admin, Member和Guest.',
              ]}
              correctPos={2}
              toast={onPostToast}
            />
          )}
          {index === 2 && (
            <Question
              className="slide-container"
              index="问题 3/4"
              question="关于DID Spaces的描述下面的哪一个是正确的？"
              answers={[
                'A: DID Spaces 是一个社交平台，让用户可以分享他们的个人生活和经历。',
                'B: DID Spaces 为你提供了去中心化的个人空间， 你可以自由创建和管理数字资产， 获得更多的自由和控制权， 让你的数字空间更加安全、私密、可靠！',
                'C: DID Spaces 是一个虚拟现实游戏，让玩家可以探索和建立自己的数字世界。',
              ]}
              correctPos={1}
              toast={onPostToast}
            />
          )}
          {index === 3 && (
            <Question
              className="slide-container"
              index="问题 4/4"
              question="关于DID Spaces Passport的描述下面的哪一个是正确的？"
              answers={[
                'A: 领取DID Spaces Passport之后可以进行社交媒体分享和互动',
                'B: 领取DID Spaces Passport之后可以支付购物款项。',
                'C: 领取DID Spaces Passport之后你可以做以下事情: \n1:备份钱包 \n2:备份 Blocklet(包含数据,整个应用的状态) \n3:还原 Blocklet(这使得应用可以很轻松地完成迁移) \n4:存储 NFT(持久化存储用户的 NFT) 5:可编程的接入 DID Spaces(以可编程的方式读写 DID Space)',
              ]}
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
