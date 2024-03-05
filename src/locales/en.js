import flat from 'flat';

export default flat({
  correct: '🎉 The answer is correct!',
  wrong: '⛔️ Opps, You can make a new selection.',
  title_1: 'Question 1/4',
  title_2: 'Question 2/4',
  title_3: 'Question 3/4',
  title_4: 'Question 4/4',
  question: {
    q1: {
      question: 'Which of the following descriptions about DID is correct?',
      answers: [
        'A: DID is a digital currency used for online transactions and payments.',
        'B: DID is a digital audio format used for storing music and sound files.',
        'C: Decentralized Identifiers (DIDs) enable verifiable, decentralized digital identities that are self-sovereign and independent of centralized authorities or third-party permission for establishing control and trustworthy interactions.',
      ],
    },
    q2: {
      question: 'Which of the following descriptions of Passport is correct?',
      answers: [
        'A: Passport is a type of passport used for identity verification when traveling internationally.',
        'B: Passport is a password management software used for storing and managing user login credentials.',
        'C: Passport is a trusted credential issued to users and stored in their wallet, used for logging into applications with different authentication identities. It typically includes Owner, Admin, Member, and Guest.',
      ],
    },
    q3: {
      question: 'Which of the following descriptions about DID Spaces is correct?',
      answers: [
        'A: DID Spaces is a social platform where users can share their personal lives and experiences.',
        'B: DID Spaces provides you with a decentralized personal space where you can freely create and manage digital assets, giving you more freedom and control, making your digital space more secure, private, and reliable!',
        'C: DID Spaces is a virtual reality game where players can explore and build their own digital worlds.',
      ],
    },
    q4: {
      question: 'Which of the following descriptions about DID Spaces Passport is correct?',
      answers: [
        'A: After receiving the DID Spaces Passport, you can share and interact on social media.',
        'B: After receiving the DID Spaces Passport, you can pay for shopping.',
        "C: After receiving the DID Spaces Passport, you can do the following:\n1: Backup wallet\n2: Backup Blocklet (including data, the entire application state)\n3: Restore Blocklet (making it easy for the application to migrate)\n4: Store NFTs (persistent storage of user's NFTs)\n5: Programmable access to DID Spaces (read and write to DID Spaces in a programmable way)",
      ],
    },
  },
});
