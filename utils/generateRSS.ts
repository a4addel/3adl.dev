import { Feed } from 'feed';
import fs from 'fs';

// @ts-ignore
export const generateRSSFeed = (articles) => {
  const baseUrl = 'https://mahmoudabdelwahab.com';
  const author = {
    name: 'Mahmoud Abdelwahab',
    email: 'hey@mahmoud.codes',
    link: 'https://twitter.com/thisismahmoud_',
  };

  // Construct a new Feed object
  const feed = new Feed({
    title: 'Articles by Mahmoud Abdelwahab',
    description:
      'Thinking out loud and sharing the things I learn about Software Engineering, Developer Relations, Design and more',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    copyright: 'Mahmoud Abdelwahab',
    author,
  });

  // Add each article to the feed
  // @ts-ignore
  articles.forEach((article) => {
    const {
      content,
      filePath,
      data: { date, description, title },
    } = article;
    const url = `${baseUrl}/${filePath}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content,
      author: [author],
      date: new Date(date),
    });
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
};
