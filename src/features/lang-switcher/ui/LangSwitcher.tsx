'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';
import styles from './LangSwitcher.module.scss';

type Lang = 'ru' | 'en';

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const locale = useLocale() as Lang;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  function handleSelect(nextLang: Lang) {
    if (nextLang !== locale) {
      router.replace(
        {
          pathname,
          query: Object.fromEntries(searchParams.entries()),
        },
        { locale: nextLang },
      );
    }
    setIsOpen(false);
  }

  return (
    <div ref={ref} className={styles.langSwitcher} data-open={isOpen}>
      <button type="button" className={styles.button} onClick={() => setIsOpen((prev) => !prev)}>
        <Image src={`/${locale}.svg`} width={20} height={14} alt={locale} className={styles.flag} />
        <span className={styles.label}>{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          {(['ru', 'en'] as Lang[]).map((lang) => (
            <li key={lang} className={styles.option} onClick={() => handleSelect(lang)}>
              <Image
                src={`/${lang}.svg`}
                width={20}
                height={14}
                alt={locale}
                className={styles.flag}
              />
              {lang.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
