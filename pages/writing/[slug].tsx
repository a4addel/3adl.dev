// @ts-nocheck
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import path from 'path';
import { Callout, CodeBlock } from 'components/mdx';
import { useRouter } from 'next/router';
import readingTime from 'reading-time';
import { NextSeo } from 'next-seo';
import { Newsletter } from 'components/Newsletter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { InferGetStaticPropsType } from 'next';
import RemarkSlug from 'remark-slug';
import RemarkExternalLinks from 'remark-external-links';
import RemarkAutoLinkHeadings from 'rehype-autolink-headings';
// @ts-ignore
import RemarkCapitalize from 'remark-capitalize';
import { TableOfContents } from 'components/mdx/TableOfContents';
import { format, parseISO } from 'date-fns';

const components = {
  Image,
  Callout,
  code: CodeBlock,
};

export default function PostPage({
  source,
  frontMatter,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { slug } = router.query;
  const url = router.pathname.replace('[slug]', slug);

  return (
    <>
      <NextSeo
        twitter={{
          handle: '@thisismahmoud_',
          site: '@thisismahmoud_',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          type: 'website',
          url: `https://mahmoudabdelwahab.com/${slug}`,
          title: `${frontMatter.title}`,
          description: `${frontMatter.description}`,
          images: [
            {
              url: `https://mahmoudabdelwahab.com/images/writing/${slug}/cover.png`,
              width: 800,
              height: 600,
              alt: `${frontMatter.cover.alt}`,
            },
          ],
        }}
      />
      <div
        className={`pt-6 md:pt-20  mx-auto mb-16 px-2 ${
          frontMatter.showTOC ? '' : 'max-w-2xl'
        }`}
      >
        <div className="lg:grid grid-cols-12 gap-24 ">
          <div className="lg:col-span-8 prose md:prose-lg prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-lg dark:prose-invert mb-16 prose-p:text-gray-900 dark:prose-p:text-gray-100 prose-ul:text-gray-900 dark:prose-ul:text-gray-100">
            <h1>{frontMatter.title}</h1>
            <div className="flex space-x-5">
              <p>{readingTime}</p>
              <p>-</p>
              <p>{format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</p>
            </div>
            <MDXRemote {...source} components={components} />
            <div className="py-10">
              <Newsletter />
            </div>
          </div>
          <div className="lg:col-span-4">
            {frontMatter.showTOC ? <TableOfContents /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        RemarkSlug,
        RemarkExternalLinks,
        RemarkAutoLinkHeadings,
        RemarkCapitalize,
      ],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime: readingTime(content).text,
      nextPost: {},
      previousPost: {},
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
