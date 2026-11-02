import { useState, useCallback } from 'react';

/**
 * Hook to manage accordion expand/collapse state.
 * @param allowMultiple Whether multiple items can be opened simultaneously
 */
export function useAccordion(allowMultiple = false) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  }, [allowMultiple]);

  const isOpen = useCallback((id: string) => openIds.includes(id), [openIds]);

  return { openIds, toggle, isOpen };
}
