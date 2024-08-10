import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ActionMenu = () => {
  const handleAction = (url, isWhatsApp = false) => {
    if (isWhatsApp) {
      window.open(`https://wa.me/919008156702?text=${encodeURIComponent("Hi, I'm interested in discussing a potential opportunity with you.")}`, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Fab
      mainButtonStyles={{ backgroundColor: '#25D366' }}
      position={{ bottom: 20, right: 20 }}
      icon={<FaCommentDots style={{ color: 'white' }} />}
    >
      <Action
        style={{ backgroundColor: '#25D366' }}
        text="WhatsApp"
        onClick={() => handleAction('YourWhatsAppLinkHere', true)}
      >
        <FaWhatsapp style={{ color: 'white' }} />
      </Action>
      <Action
        style={{ backgroundColor: '#0e76a8' }}
        text="LinkedIn"
        onClick={() => handleAction('https://in.linkedin.com/in/hrshrayank')}
      >
        <FaLinkedin style={{ color: 'white' }} />
      </Action>
      <Action
        style={{ backgroundColor: '#c71610' }}
        text="Email"
        onClick={() => handleAction('mailto:hrshrayank77@gmail.com')}
      >
        <FaEnvelope style={{ color: 'white' }} />
      </Action>
    </Fab>
  );
};

export default ActionMenu;
