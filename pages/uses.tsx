import React from 'react';

const Uses = () => {
  return (
    <div className="pt-6 md:pt-20 max-w-2xl mx-auto mb-16 px-2">
      <h1 className="mb-6 text-4xl md:text-6xl font-semibold tracking-wide">
        Gear. Software. Tools
      </h1>
      <div className="prose md:prose-lg dark:prose-invert prose-gray pb-16">
        <p>Stuff I use frequently during my day for work and personal use</p>
        <h2>Hardware</h2>
        <ul>
          <li>MacBook Pro 16-inch 2021</li>
          <li>
            <a href="https://amzn.to/3AaLrQP">Sony A7C</a>
          </li>
          <li>
            <a href="https://amzn.to/3fy10bU">Sony 24mm f/1.4</a>
          </li>
          <li>
            <a href="https://amzn.to/3Id0BId">Shure SM7B</a>
          </li>
          <li>
            <a href="https://amzn.to/34OIEkI">Samsung M7 smart 4k Monitor</a>
          </li>
          <li>
            <a href="https://amzn.to/3qyqCvB">Sony WH-1000XM4</a>
          </li>
          <li>
            <a href="https://amzn.to/33jTzmk">Logitech MX Keys</a>
          </li>
          <li>
            <a href="https://amzn.to/3KgVW9X">Logitech MX Master 3</a>
          </li>
          <li>
            <a href="https://amzn.to/33NPnes">Godox SL-60w LED light</a>
          </li>
          <li>
            <a href="https://amzn.to/3fEbUN7">Kindle Oasis</a>
          </li>
        </ul>
        <hr />
        <h2>Software</h2>
        <ul>
          <li>
            <a href="https://cleanshot.com/">CleanshotX</a> Screenshot tool
          </li>
          <li>
            <a href="https://1password.com">1Password</a> password manager
          </li>
          <li>
            <a href="https://plausible.io/">Plausible Analytics</a> Simple and
            privacy-friendly Google Analytics alternative
          </li>
          <li>
            <a href="https://cron.app">Cron</a> Calendar app
          </li>
          <li>
            <a href="https://raycast.com">Raycast</a> MacOS launcher
          </li>
          <li>
            <a href="https://figma.com">Figma</a> for UI design and prototyping
          </li>
          <li>
            <a href="https://www.adobe.com/products/premiere.html">
              Adobe Premiere Pro + After Effects
            </a>{' '}
            video editing
          </li>
          <li>
            <a href="https://notion.so">Notion</a> for knowledge management and
            note-taking
          </li>
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> as
            my text editor
            <ul>
              <li>
                Theme:{' '}
                <a href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">
                  GitHub Dark
                </a>
              </li>
              <li>
                Font:{' '}
                <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a>
              </li>
              <li>
                Terminal: <a href="https://iterm2.com/">iTerm2</a>+{' '}
                <a href="https://github.com/denysdovhan/spaceship-prompt">
                  {' '}
                  spaceship prompt
                </a>{' '}
                + zsh
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h2>Tech Stack</h2>
        <p>Stack I use when building applications</p>
        <ul>
          <li>
            <a href="https://nextjs.org">Next.js</a> - fullstack React framework
          </li>
          <li>
            <a href="https://tailwindcss.com">TailwindCSS</a> - utility-first
            CSS framework
          </li>
          <li>
            <a href="https://prisma.io">Prisma</a> - type-safe ORM
          </li>
          <li>
            <a href="https://vercel.com">Vercel</a> - deployment platform
          </li>
          <li>
            <a href="https://fraamer.com/motion">framer-motion</a> - animation
            library
          </li>
          <li>
            <a href="https://react-hook-form.com/">react-hook-form</a> -
            form-validation
          </li>
          <li>
            <a href="https://react-hot-toast.com/">react-hot-toast</a> - toasts
          </li>
          <li>
            <a href="https://www.radix-ui.com/">Radix UI</a> - unstyled,
            accessible components
          </li>
          <li>
            <a href="https://typescriptlang.org">TypeScript</a> - programming
            language
          </li>
          <li>
            <a href="https://react-query.tanstack.com/">react-query</a> - data
            fetching library
          </li>
          <li>
            <a href="https://postmark.app">Postmark</a> - transactional emails
          </li>
          <li>
            <a href="https://planetscale.com">PlanetScale</a> - serverless MySQL
            Database
          </li>
          <li>
            <a href="https://stripe.com">Stripe</a> - payment processor
          </li>
          <li>
            <a href="https://graphql.org">GraphQL</a> - for building the API
            <ul>
              <li>
                <a href="https://www.graphql-code-generator.com/">
                  graphql-code-generator
                </a>
              </li>
              <li>
                <a href="https://nexusjs.org">Nexus</a>
              </li>
              <li>
                <a href="https://www.apollographql.com/docs/apollo-server/">
                  Apollo-server-micro
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Uses;
