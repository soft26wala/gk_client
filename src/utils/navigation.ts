// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'About us', url: '/aboutus' },
  // { name: 'Blog', url: '/blog' },
  { name: 'Contact Us', url: '/contact' },
  { name: ' FAQ', url: '#' },
  // { name: ' Careers', url: '#' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Ecosystem',
    links: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/aboutus' },
      { name: 'Contact', url: '/contact' },
      { name: 'Download Brochure', url: '#' },
      // { name: 'Careers', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/mearashadowfax/ScrewFast',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
