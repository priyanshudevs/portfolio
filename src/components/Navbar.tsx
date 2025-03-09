import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 mx-auto max-w-7xl px-4">
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-full border border-gray-200 dark:border-gray-700">
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-8">
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            >
              Priyanshu Dev
            </a>
            <div className="hidden lg:flex lg:gap-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="lg:hidden rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden',
          mobileMenuOpen
            ? 'fixed inset-x-0 top-20 z-50 origin-top rounded-b-2xl bg-white px-6 py-6 ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-gray-800'
            : 'hidden'
        )}
      >
        <div className="space-y-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-base font-semibold leading-7 text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}