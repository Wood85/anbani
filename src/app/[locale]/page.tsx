import { Banner } from '@/widgets/banner';
import { Stats } from '@/widgets/stats';
import { SliderSection } from '@/widgets/slider-section';
import { Reviews } from '@/widgets/reviews';

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <SliderSection />
      <Reviews />
    </>
  );
}
