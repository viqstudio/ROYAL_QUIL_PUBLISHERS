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
      title="Start Your Publishing Journey"
      subtitle="Complimentary manuscript evaluation and publishing consultation with a senior Royal Quill editor."
    >
      <ContactForm
        theme="light"
        sourceContext={prefilledService}
        prefilledGenre={prefilledGenre}
      />
    </Modal>
  );
};
