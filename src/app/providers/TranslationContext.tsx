import { createContext, useContext } from 'react';
import { TFunction } from 'i18next';

interface TranslationContextType {
  t: TFunction;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslationContext = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};

export default TranslationContext;
