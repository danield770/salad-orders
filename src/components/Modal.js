import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
  const el = document.createElement('div');
  el.classList.add('modal');

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(el);

    return () => {
      // Remove the element from the DOM when we unmount
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    props.children,
    // A DOM element
    el
  );
}

export default Modal;
