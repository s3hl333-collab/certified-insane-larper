import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { CERTIFICATE_HEIGHT, CERTIFICATE_WIDTH } from '../components/CertificateDocument';

/**
 * Sanitizes recipient name into a clean filename slug
 */
export function formatCertificateFilename(recipientName: string, ext: 'png' | 'pdf'): string {
  const clean = recipientName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
  const slug = clean || 'certified-insane-larper';
  return `ILCB-certificate-${slug}.${ext}`;
}

/**
 * Generates a high-resolution (300 DPI equivalent) PNG Data URL from the Certificate DOM element
 */
export async function renderCertificateDataUrl(element: HTMLElement): Promise<string> {
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  // pixelRatio: 3 on 1123x794 gives 3369x2382 px (~300 DPI for A4 Landscape 11.69" x 8.27")
  const dataUrl = await toPng(element, {
    width: CERTIFICATE_WIDTH,
    height: CERTIFICATE_HEIGHT,
    pixelRatio: 3,
    quality: 1.0,
    backgroundColor: '#FAF6EE',
    cacheBust: true,
    style: {
      transform: 'none',
      transformOrigin: 'top left',
    },
  });

  return dataUrl;
}

/**
 * Downloads the Certificate as a 300 DPI A4 Landscape PNG
 */
export async function downloadCertificatePng(
  element: HTMLElement,
  recipientName: string
): Promise<void> {
  const dataUrl = await renderCertificateDataUrl(element);
  const link = document.createElement('a');
  link.download = formatCertificateFilename(recipientName, 'png');
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Downloads the Certificate as a properly formatted A4 Landscape PDF (297mm x 210mm)
 */
export async function downloadCertificatePdf(
  element: HTMLElement,
  recipientName: string,
  certificateId: string
): Promise<void> {
  const dataUrl = await renderCertificateDataUrl(element);

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  pdf.setProperties({
    title: `Certified Insane Larper — ${recipientName.trim()}`,
    subject: 'Official Recognition of Unhinged Behaviour — KEEP SHOOTING, MY GUY.',
    author: 'The International Larping Certification Board™',
    keywords: `Certified Insane Larper, ${certificateId}, Extreme Larper`,
    creator: 'The International Larping Certification Board™',
  });

  // A4 Landscape is exactly 297mm x 210mm
  pdf.addImage(dataUrl, 'PNG', 0, 0, 297, 210, undefined, 'FAST');
  pdf.save(formatCertificateFilename(recipientName, 'pdf'));
}
