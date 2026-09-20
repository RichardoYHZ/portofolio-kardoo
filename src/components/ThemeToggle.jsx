import { useEffect, useState } from 'react'
import { Icon } from './Icon'
const key = 'portfolio-theme'
export function ThemeToggle() { const [theme, setTheme] = useState(() => localStorage.getItem(key) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')); useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem(key, theme) }, [theme]); const next = theme === 'dark' ? 'light' : 'dark'; return <button className="theme-toggle" type="button" onClick={() => setTheme(next)} aria-label={`Switch to ${next} mode`} title={`Switch to ${next} mode`}><span className="theme-thumb"><Icon name={theme === 'dark' ? 'moon' : 'sun'} /></span><span className="theme-label">{theme === 'dark' ? 'Dark' : 'Light'}</span></button> }
