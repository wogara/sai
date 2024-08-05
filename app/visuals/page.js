import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import fs from 'fs';
import path from 'path';

const OPTIONS = { loop: true };

export default function VisualsPage() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const slides = fs
    .readdirSync(imagesDirectory)
    .filter(
      (file) =>
        file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    )
    .map((file) => `/images/${file}`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-0">
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </main>
  );
}
