const minikit = {
  name: '0o0r7 Social',
  url: process.env.NEXT_PUBLIC_URL || 'https://0o0r7-social.vercel.app',
  icon: 'https://via.placeholder.com/256x256?text=0o0r7',
};

const minikitConfig = {
  appName: '0o0r7',
  appDescription: 'Share content, get followers, likes, comments and engage with community',
  appIcon: minikit.icon,
  appUrl: minikit.url,
  tags: ['social', 'community', 'content', 'engagement'],
  accountAssociation: {
    domain: minikit.url,
    siweUri: `${minikit.url}/api/siwe`,
    signInMessage: 'Sign in to 0o0r7 Social',
  },
};

export default minikitConfig;
