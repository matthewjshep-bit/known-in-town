import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useFormModal } from '../context/FormModalContext';
import './FormModal.css';

const FORM_ID = 'Hhk7mvDSRfg8wkJLUNdC';
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

export default function FormModal() {
  const { isOpen, closeForm } = useFormModal();

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeForm();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeForm]);

  if (!isOpen) return null;

  return (
    <div
      className="form-modal__overlay"
      onClick={closeForm}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div className="form-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="form-modal__close"
          onClick={closeForm}
          aria-label="Close form"
        >
          <X size={22} />
        </button>
        <iframe
          src={FORM_SRC}
          className="form-modal__iframe"
          id={`inline-${FORM_ID}`}
          title="Contact Us Page"
          data-layout="{'id':'INLINE'}"
          data-form-id={FORM_ID}
          data-form-name="Contact Us Page"
        />
      </div>
    </div>
  );
}
