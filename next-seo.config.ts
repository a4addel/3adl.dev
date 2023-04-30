const title = 'Ahmad Addel - Fullstack Developer';
const description =
  'I am a developer and translator. I love to build stuff.';

const SEO = {
  title,
  description,
  canonical: 'https://3adl.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://3adl.dev',
    title,
    description,
    images: [
      {
        url: 'https://3adl.dev/images/me.png',
        alt: title,
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    handle: '@3adl_for_real',
    site: '@3adl_for_real',
    cardType: 'summary_large_image',
  },
};

export default SEO;
