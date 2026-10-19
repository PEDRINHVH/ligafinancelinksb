const fades = {
  'black-white': 'fade-black-white',
  'white-black': 'fade-white-black',
  'gold-white': 'fade-gold-white',
};

export default function SectionFade({ from = 'black-white' }) {
  return <div aria-hidden="true" className={`section-fade -my-px ${fades[from]}`} />;
}
