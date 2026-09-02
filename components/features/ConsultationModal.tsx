'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { useConsultation } from '@/context/ConsultationContext';
import { ContactForm } from './ContactForm';

export const ConsultationModal: React.FC = () => {
  const { isModalOpen, closeConsultation, prefilledGenre, prefilledService } = useConsultation();

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeConsultation}
      maxWidth="md"
      title="Discuss Your Book"
      subtitle="Tell us about your manuscript and we'll arrange a free consultation."
    >
      <ContactForm
        theme="light"
        sourceContext={prefilledService}
        prefilledGenre={prefilledGenre}
      />
    </Modal>
  );
};
