import { toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';

export const useToastOnError = ({
  error,
  description,
  title,
}: {
  error?: any;
  description: string;
  title: string;
}) => {
  useEffect(() => {
    if (error) {
      if (import.meta.env.DEV) {
        console.error(error);
      }
      toaster.create({
        title: title,
        description: description,
        type: 'error',
      });
    }
  }, [error]);
};
