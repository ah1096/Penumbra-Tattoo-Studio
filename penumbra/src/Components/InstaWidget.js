import React, { useEffect } from 'react';

const InstaWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <figure data-behold-id="FRb9K7j6mhJwGDVPJ6zS"></figure>
  );
};

export default InstaWidget;