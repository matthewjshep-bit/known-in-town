import { useEffect } from 'react';

const DEFAULT_TITLE = 'Known In Town: Local Marketing for Home Service Pros';
const DEFAULT_DESCRIPTION =
  'Known In Town is the local marketing platform for home service pros. We help plumbers, roofers, HVAC, and electricians become the business everyone calls first with automatic 5-star reviews, 24/7 lead capture, and win-back campaigns.';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Known In Town` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute('content', DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
}
