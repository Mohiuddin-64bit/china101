import Banner from "@/components/Others/Banner";
import FoodCategory from "@/components/Others/FoodCategory";
import GalleryComponent from "@/components/Others/GalleryComponent";
import OurMenu from "@/components/Others/OurMenu";
import OurStory from "@/components/Others/OurStory";
import Reservation from "@/components/Others/Reservation";
import Testimonial from "@/components/Others/Testimonial";


export default function Home() {
  return (
    <main>
      <div className="">
        <Banner />
      </div>
      <OurStory />
      <OurMenu />
      <Testimonial />
      <FoodCategory />
      <GalleryComponent />
      <Reservation />
    </main>
  );
}
