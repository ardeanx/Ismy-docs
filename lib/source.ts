import { docs } from '@/.source';
import { icons } from 'lucide-react';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';

export const source = loader({
  configPath: './source.config.ts',
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  
  source: docs.toFumadocsSource(),
});
