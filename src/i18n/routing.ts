import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hi'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Never show the locale prefix in the URL
  localePrefix: 'never',

  // Disable automatic browser language detection to enforce English as default
  localeDetection: false
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
