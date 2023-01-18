export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  instagram = 'instagram',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: 'https://twitter.com/SRInsaurralde',
  site: 'sergioinsaurralde.com',
  calendly: 'https://calendly.com/sergioinsaurralde',
  links: {
    github: 'https://github.com/sergioinsaurralde',
    linkedin: 'https://www.linkedin.com/in/sergioinsaurralde/',
    twitter: 'https://twitter.com/SRInsaurralde',
    youtube: 'https://www.youtube.com/@SergioInsaurralde',
    instagram: 'https://www.instagram.com/srinsaurralde',
    email: 'mailto:srinsaurralde@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/serinsaurralde',
  },
};
