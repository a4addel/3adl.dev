import * as React from 'react';
import { useRouter } from 'next/router';
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  useKBar,
  VisualState,
} from 'kbar';
import {
  CircleIcon,
  CopyIcon,
  MagnifyingGlassIcon,
  QuestionMarkIcon,
  SpeakerLoudIcon,
  MixIcon,
  Pencil1Icon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

// TODO: add types
// @ts-ignore
export const CommandPalette = (props) => {
  const router = useRouter();

  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <CopyIcon className="w-4 h-4" />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open('mailto:hey@mahmoud.codes', '_blank'),
      icon: <EnvelopeClosedIcon className="w-4 h-4" />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <CircleIcon className="w-4 h-4" />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <QuestionMarkIcon className="w-4 h-4" />,
    },
    {
      id: 'writing',
      name: 'Writing',
      shortcut: ['g', 'b'],
      keywords: 'go-writing',
      section: 'Go To',
      perform: () => router.push('/writing'),
      icon: <Pencil1Icon className="w-4 h-4" />,
    },
    {
      id: 'speaking',
      name: 'Speaking',
      shortcut: ['g', 's'],
      keywords: 'go-speaking',
      section: 'Go To',
      perform: () => router.push('/speaking'),
      icon: <SpeakerLoudIcon className="w-4 h-4" />,
    },
    {
      id: 'uses',
      name: 'Uses',
      shortcut: ['g', 'u'],
      keywords: 'go-uses',
      section: 'Go To',
      perform: () => router.push('/uses'),
      icon: <MixIcon className="w-4 h-4" />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 'g'],
      keywords: 'go-twitter',
      section: 'Social',
      perform: () =>
        window.open('https://twitter.com/3adl_for_real', '_blank'),
    },
  ];

  return (
    <KBarProvider
      actions={actions}
      options={{ disableScrollbarManagement: true }}
    >
      <KBarPortal>
        <KBarPositioner className="z-10 bg-gray-1000/80">
          <KBarAnimator className="max-w-lg w-full overflow-y-auto rounded-lg shadow-lg">
            <div className="rounded-t-lg flex items-center relative text-gray-600 focus-within:text-gray-400">
              <span className="">
                <button
                  type="submit"
                  className="py-3 px-2 bg-white dark:bg-gray-800 focus:outline-none focus:shadow-outline"
                >
                  <MagnifyingGlassIcon className="w-6 h-6 bg-white dark:bg-gray-800 focus:outline-none focus:shadow-outline" />
                </button>
              </span>
              <KBarSearch
                className="py-3 px-3 bg-white dark:bg-gray-800 text-white text-base w-full  outline-none"
                placeholder="Type a command or search…"
              />
            </div>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
};

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => (
        <div
          className={`
          flex items-center justify-between cursor-pointer px-3 py-1 w-full text-gray-900 dark:text-gray-100 text-sm bg-white dark:bg-gray-800`}
        >
          {typeof item === 'string' ? (
            <div className="text-gray-200 text-xs">{item}</div>
          ) : (
            <div
              className={`${
                active ? 'bg-gray-500 text-gray-100 rounded-md' : 'transparent'
              } 
            w-full text-base flex items-center space-x-2 p-2`}
            >
              {item.icon}
              <p className="text-sm">{item.name}</p>
            </div>
          )}
        </div>
      )}
    />
  );
}
