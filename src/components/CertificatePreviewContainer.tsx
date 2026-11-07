import React, { useEffect, useRef, useState } from 'react';
import {
  CERTIFICATE_HEIGHT,
  CERTIFICATE_WIDTH,
  CertificateData,
  CertificateDocument,
} from './CertificateDocument';

interface CertificatePreviewContainerProps {
  data: CertificateData;
  stampKey: number;
  certificateRef: React.RefObject<HTMLDivElement>;
}

export const CertificatePreviewContainer: React.FC<CertificatePreviewContainerProps> = ({
  data,
  stampKey,
  certificateRef,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.75);

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current) return;
      const availableWidth = wrapperRef.current.clientWidth;
      if (availableWidth > 0) {
        const nextScale = Math.min(1, availableWidth / CERTIFICATE_WIDTH);
        setScale(nextScale);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    window.addEventListener('resize', updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const scaledHeight = Math.round(CERTIFICATE_HEIGHT * scale);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${scaledHeight}px` }}
      className="relative w-full overflow-hidden rounded-sm shadow-[0_28px_80px_-15px_rgba(0,0,0,0.85)] ring-1 ring-[#C8A962]/25 transition-[height] duration-150"
    >
      <div
        style={{
          width: `${CERTIFICATE_WIDTH}px`,
          height: `${CERTIFICATE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <CertificateDocument ref={certificateRef} data={data} stampKey={stampKey} />
      </div>
    </div>
  );
};
