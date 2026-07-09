import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useFormModal } from '../context/FormModalContext';
import './FormModal.css';

const FORM_ID = 'Hhk7mvDSRfg8wkJLUNdC';
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const IFRAME_ID = `inline-${FORM_ID}`;

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

  // The overlay/iframe stay mounted (hidden via CSS) so HighLevel's
  // form_embed.js can measure the iframe and auto-size it to the form's
  // real height, which is what removes the empty white space.
  return (
    <div
      className={`form-modal__overlay ${isOpen ? 'form-modal__overlay--open' : ''}`}
      onClick={closeForm}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      aria-hidden={!isOpen}
    >
      <div className="form-modal__panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="form-modal__close"
          onClick={closeForm}
          aria-label="Close form"
        >
          <X size={20} />
        </button>
        <div className="form-modal__scroll">
          <iframe
            src={FORM_SRC}
            className="form-modal__iframe"
            id={IFRAME_ID}
            title="Contact Us Page"
            scrolling="no"
            data-layout="{'id':'INLINE'}"
            data-layout-iframe-id={IFRAME_ID}
            data-form-id={FORM_ID}
            data-form-name="Contact Us Page"
          />
        </div>
      </div>
    </div>
  );
}
