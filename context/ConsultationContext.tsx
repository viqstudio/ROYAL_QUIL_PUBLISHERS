'use client';

import React, { createContext, useContext, useState } from 'react';

interface ConsultationContextType {
  isModalOpen: boolean;
  prefilledGenre?: string;
  prefilledService?: string;
  openConsultation: (options?: { genre?: string; service?: string }) => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledGenre, setPrefilledGenre] = useState<string | undefined>(undefined);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const openConsultation = (options?: { genre?: string; service?: string }) => {
    setPrefilledGenre(options?.genre);
    setPrefilledService(options?.service);
    setIsModalOpen(true);
  };

  const closeConsultation = () => {
    setIsModalOpen(false);
    setPrefilledGenre(undefined);
    setPrefilledService(undefined);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isModalOpen,
        prefilledGenre,
        prefilledService,
        openConsultation,
        closeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export const useConsultation = (): ConsultationContextType => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};
