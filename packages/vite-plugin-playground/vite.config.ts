import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdoc from '@rcdoc/vitejs-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdoc({
      replaceHtml: (htmlString) => {
        const group = htmlString
          .replace(/(<h3\s+id=)/g, ':::$1')
          .replace(/<h2/g, ':::<h2')
          .split(':::');
        const replaceHtml = group
          .map((fragment) => {
            if (fragment.indexOf('<h3') !== -1) {
              return `<div className="van-doc-card">${fragment}</div>`;
            }
            return fragment;
          })
          .join('');
        return replaceHtml;
      },
    }) as any,
  ],
});
