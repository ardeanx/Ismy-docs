import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AlbumIcon, Pencil, Coins } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/ardeanxx/ismybio-docs',
  nav: {
    title: (
      <div>
        <img src="/logo.png" alt="Logo" style={{ height: '24px'}} />
      </div>
    ),
    transparentMode: 'top',
  },
  links: [
    {
      type: 'menu',
      text: 'Menu',
      items: [
        {
          text: 'Introduction',
          description: 'Learn to use IsmyBio',
          url: '/docs',
          icon: <AlbumIcon />,
        },
        {
          text: 'About the Author',
          description: 'Get to know who behind IsmyBio',
          url: 'https://ardean.me',
          icon: <Pencil />,
        },
        {
          text: 'Donation',
          description: 'Donation is mean everything to us',
          url: 'https://app.midtrans.com/payment-links/ardeanbimasaputra',
          icon: <Coins />,
        },
      ],
    },
  ],
}