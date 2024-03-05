import flat from 'flat';

export default flat({
  correct: '🎉 答案正确！',
  wrong: '⛔️ 请你重新选择一个答案.',
  title_1: '问题 1/4',
  title_2: '问题 2/4',
  title_3: '问题 3/4',
  title_4: '问题 4/4',
  question: {
    q1: {
      question: '关于DID的描述下面的哪一个是正确的？',
      answers: [
        'A: DID是一种数字货币，用于在线交易和支付。',
        'B: DID是一种数字音频格式，用于存储音乐和声音文件。',
        'C: 去中心化标识符（DID）允许可验证、去中心化的数字身份，脱离中心化机构，无需第三方许可即可实现控制和可信交互。',
      ],
    },

    q2: {
      question: '关于Passport的描述下面的哪一个是正确的？',
      answers: [
        'A: Passport是一种护照类型，用于国际旅行时验证身份。',
        'B: Passport是一种密码管理软件，用于存储和管理用户的登录凭证。',
        'C: Passport 是为用户颁发的,存储在用户钱包里,用于登录应用的可信任的凭证,具有不同的认证身份,它通常包含Owner, Admin, Member和Guest.',
      ],
    },

    q3: {
      question: '关于DID Spaces的描述下面的哪一个是正确的？',
      answers: [
        'A: DID Spaces 是一个社交平台，让用户可以分享他们的个人生活和经历。',
        'B: DID Spaces 为你提供了去中心化的个人空间， 你可以自由创建和管理数字资产， 获得更多的自由和控制权， 让你的数字空间更加安全、私密、可靠！',
        'C: DID Spaces 是一个虚拟现实游戏，让玩家可以探索和建立自己的数字世界。',
      ],
    },

    q4: {
      question: '关于DID Spaces Passport的描述下面的哪一个是正确的？',
      answers: [
        'A: 领取DID Spaces Passport之后可以进行社交媒体分享和互动',
        'B: 领取DID Spaces Passport之后可以支付购物款项。',
        'C: 领取DID Spaces Passport之后你可以做以下事情: \n1:备份钱包 \n2:备份 Blocklet(包含数据,整个应用的状态) \n3:还原 Blocklet(这使得应用可以很轻松地完成迁移) \n4:存储 NFT(持久化存储用户的 NFT) 5:可编程的接入 DID Spaces(以可编程的方式读写 DID Space)',
      ],
    },
  },
});
