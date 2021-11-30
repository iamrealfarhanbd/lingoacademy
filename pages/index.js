import HomeAbout from '../Components/Homepage/About'
import HomeBanner from '../Components/Homepage/Banner'
import HomeBlog from '../Components/Homepage/Blog'
import HomeCategories from '../Components/Homepage/Categories'
import Ctasection from '../Components/Homepage/cta'
import Features from '../Components/Homepage/Features'
import Testimonial from '../Components/Homepage/Testimonial'
import HomeVideo from '../Components/Homepage/Video'
export default function Home() {
  return (
    <>
      <HomeBanner />
      <Features />
      <HomeAbout />
      <HomeCategories />
      <HomeVideo />
      <Ctasection />
      <Testimonial />
      <HomeBlog />
    </>
  )
}
