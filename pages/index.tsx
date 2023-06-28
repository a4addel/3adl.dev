import { Newsletter } from 'components/Newsletter';
import { Writing } from 'components/Writing';
import type { NextPage } from 'next';
import Head from 'next/head';
import {   AiOutlineGithub } from "react-icons/ai";
 
 import Image from "next/image";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ahmad Addel</title>
      </Head>

       <div className="flex w-full flex-1 flex-col items-center justify-center p-3">
        <Image
          src="/aadel.jpg"
          className="p- flex-0 mx-8 rounded-full"
          width={150}
          height={150}
          alt="Ahmad Adel"
        />
        <div className="mx-5 flex flex-col">
          <h1 className="text-center text-5xl  font-bold">Ahmad Addel</h1>
          <p className="mx-6 whitespace-pre-wrap from-neutral-900 text-2xl font-light">
            I am{" "}
            <strong>
              <i>a developer</i>
            </strong>{" "}
            and translator. I love to build stuff.
            <br />
            {/* @ts-ignore */}
            <Link href="mailto:a4addel@gmail.com" className="text-blue-700">
              a4addel@gmail.com
            </Link>
          </p>
        </div>
      </div>
      <Writing />

      <div className="m-10 mx-auto flex w-full max-w-4xl flex-col">
        <h1 className="m-3 text-5xl font-bold">
          <a href="#projects" id="projects">
            <i>Projects: </i>
          </a>
        </h1>

        <div className="felx w-full flex-col">
          <h2 className="m-3 text-3xl font-bold">
            <a href="#angry-text" id="angry-text">
              <i> 1. Youtube Downloader Telegram Bot: </i>
            </a>
          </h2>

          <p>
            <a
              href="https://github.com/a4addel/Youtube-Downloader-Telegram-Bot"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sky-600"
            >
              View on{" "}
              <span className="flex items-center">
                <AiOutlineGithub className="text-5xl" />{" "}
                <AiOutlineGithub className="text-2xl" />
              </span>
            </a>
            This bot allows users to download YouTube videos directly from the
            chat. Just send it a video link and it will generate an audio or
            video file and them merges them using ffmpeg.
            <br />
            This is a great way to quickly save music, podcasts, lectures and
            more without any extra steps.
            <br />
            <h3 className="my-3 text-2xl">
              <b>How to use: </b>
            </h3>
            <ul className="list-inside list-decimal ">
              <li>
                To use this bot on Telegram, just type <strong>/start</strong> .
              </li>
              <li>
                Then paste any YouTube link into the chat box and click{" "}
                <strong>Go!</strong>
              </li>
              <li>
                {" "}
                The telegram bot will automatically start generating an audio or
                video version and merges them using ffmpeg.
              </li>
            </ul>
            <br />
          </p>
        </div>

        <div className="felx w-full flex-col">
          <h2 className="m-3 text-3xl font-bold">
            <a href="#angry-text" id="angry-text">
              <i> 2. Drive Manager : </i>
            </a>
          </h2>
          <a
              href="https://github.com/a4addel/drive-manager"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sky-600"
            >
              View on{" "}
              <span className="flex items-center">
                <AiOutlineGithub className="text-5xl" />{" "}
                <AiOutlineGithub className="text-2xl" />
              </span>
            </a>

          <p>
            <p>
              Drive Manager is an under development web application that allows
              users to manage and control access permissions for files and
              folders stored on their Google Drive.
            </p>
            <p> It offers a user-friendly
              interface to easily manage access and detailed views of current
              permissions.</p>

            <p>
              The application uses the Google Drive API to securely connect to
              users Google Drive accounts and manage permissions accordingly.
            </p>

            <p>It is built using the following technologies:</p>

<br />
<br />
            <ul>
              <li>
                1. Next.js for server-side rendering for better performance and to
                build fast and scalable React applications
              </li>
              <li> 2. Ant Design for a sleek and modern design</li>
              <li> 3. TypeScript for a type-safe and maintainable codebase</li>
              <li>
                4. Google Drive API for securely connecting to users Google Drive
                accounts and managing permissions
              </li>
              <li>
                5. The application is still under development but it will be a
                powerful tool to manage users files and folders on Google
                Drive.
              </li>
            </ul>
          </p>
        </div>

        <div className="felx w-full flex-col">
          <h2 className="m-3 text-3xl font-bold">
            <a href="#angry-text" id="angry-text">
              <i> 3. Angry Text : </i>🤬
            </a>
          </h2>

          <p>
            A simple SPA that makes your elegant, eloquent professional email
            looks like very very angry , by changing the case of the letters.{" "}
            <i>
              visit{" "}
              <a
                className="text-blue-700"
                rel="noreferrer"
                target="_blank"
                href="http://angry-text.3adl.dev"
              >
                <strong>Angry Text</strong>
              </a>
            </i>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
