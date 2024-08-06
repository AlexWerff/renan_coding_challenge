import ImageCarousel from "@/components/ImagesCarousel/ImagesCarousel";
import { images } from "@/utils/imagesData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImageCarousel images={images} autoSlide />
    </main>
  );
}
