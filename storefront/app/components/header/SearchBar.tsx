import { Form } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export function SearchBar() {
  const { t } = useTranslation();

  let initialQuery = '';
  if (typeof window === 'undefined') {
    // running in a server environment
  } else {
    // running in a browser environment
    initialQuery = new URL(window.location.href).searchParams.get('q') ?? '';
  }

  return (
    <Form method="get" action="/search" key={initialQuery}>
      <input
        type="search"
        name="q"
        defaultValue={initialQuery}
        placeholder={t('common.search')}
        className="block w-full rounded-md border border-secondary-400/50 bg-white/10 text-secondary-50 placeholder:text-secondary-200/80 shadow-sm sm:text-sm focus:border-secondary-300 focus:ring-secondary-300"
      />
    </Form>
  );
}
