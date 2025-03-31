import AnimatedTestimonials from '../../ui/organisms/testimonial/AnimatedTestimonials'
import testimonials from '../../datas/testimonials';

export default function Testimonial() {
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
