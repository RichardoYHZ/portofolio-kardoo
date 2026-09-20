const paths = {
  arrow: <path d="M4 12h16m-7-7 7 7-7 7" />, 'arrow-up': <path d="M12 20V4m-6 6 6-6 6 6" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.1-7.1-1.4 1.4M6.3 17.7l-1.4 1.4m14.2 0-1.4-1.4M6.3 6.3 4.9 4.9" /></>,
  moon: <path d="M20.6 15.4A8.5 8.5 0 0 1 8.6 3.4 8.5 8.5 0 1 0 20.6 15.4Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />, close: <path d="m6 6 12 12M18 6 6 18" />,
  github: <path d="M15 22v-3.9c0-1 .3-1.7.8-2.1 2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 20 6.7c.1-.3.6-1.5-.1-3.1 0 0-1.1-.4-3.5 1.3a12.2 12.2 0 0 0-6.4 0C7.6 3.2 6.5 3.6 6.5 3.6c-.7 1.6-.2 2.8-.1 3.1A4.7 4.7 0 0 0 5.1 10c0 4.7 2.8 5.7 5.5 6 .5.4.8 1.2.8 2.1V22" />,
  linkedin: <><path d="M7 9v11M7 5v.01M11 20v-6a5 5 0 0 1 10 0v6M11 14v-5" /></>, mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.8-4 3-6 7-6s6.2 2 7 6" /></>, code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12" />, layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>, server: <><rect x="4" y="4" width="16" height="6" rx="1" /><rect x="4" y="14" width="16" height="6" rx="1" /><path d="M8 7h.01M8 17h.01" /></>, tool: <path d="M14 6a5 5 0 0 0-6.7 6.7L3 17l4 4 4.3-4.3A5 5 0 0 0 18 10l-3 3-3-3 2-4Z" />, spark: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 14 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />, folder: <path d="M3 6h7l2 2h9v11H3V6Z" />,
}
export function Icon({ name }) { return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.spark}</svg> }
