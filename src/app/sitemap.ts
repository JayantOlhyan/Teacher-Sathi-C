import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://teachersathi.in'; // Replace with actual production URL
  const locales = ['en', 'hi'];
  const paths = ['', '/pricing', '/login', '/signup'];
 
  const sitemapEntries: MetadataRoute.Sitemap = [];
 
  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
  });
 
  return sitemapEntries;
}
