// // components/Testimonial.tsx
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Star, StarHalf, StarOff } from 'lucide-react'; // Icons for star ratings

// export default function Testimonial() {
//   const testimonials = [
//     {
//       name: 'John Doe',
//       date: 'July 20, 2023',
//       img: '/john.jpg' ,
//       rating: 4.5,
//       review: 'Amazing service! I absolutely love the product.',
//     },
//     {
//       name: 'Jane Smith',
//       date: 'August 5, 2023',
//       img: '/jane.jpg',
//       rating: 5,
//       review: 'Best experience ever! Highly recommended.',
//     },
//     {
//       name: 'Michael Brown',
//       date: 'June 12, 2023',
//       img: '/michael.jpg',
//       rating: 4,
//       review: 'Great quality, but shipping was a bit slow.',
//     },
//     {
//         name: 'John Doe',
//         date: 'July 20, 2023',
//         img: '/john.jpg' ,
//         rating: 4.5,
//         review: 'Amazing service! I absolutely love the product.',
//       },
//       {
//         name: 'Jane Smith',
//         date: 'August 5, 2023',
//         img: '/jane.jpg',
//         rating: 5,
//         review: 'Best experience ever! Highly recommended.',
//       },
//       {
//         name: 'Michael Brown',
//         date: 'June 12, 2023',
//         img: '/michael.jpg',
//         rating: 4,
//         review: 'Great quality, but shipping was a bit slow.',
//       },
//   ];

//   // Helper function to display star rating
//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center space-x-1">
//         {[...Array(fullStars)].map((_, index) => (
//           <Star key={index} className="text-yellow-500" />
//         ))}
//         {halfStar && <StarHalf className="text-yellow-500" />}
//         {[...Array(emptyStars)].map((_, index) => (
//           <StarOff key={index} className="text-yellow-500" />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
//         <Swiper
//           modules={[Pagination, Navigation]}
//           pagination={{ clickable: true }}
//           navigation
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="mySwiper"
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-6 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-4 mb-4">
//                   {/* Customer Image */}
//                   <img
//                     src={testimonial.img}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-lg font-semibold">{testimonial.name}</p>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <img src="/google-icon.png" alt="Google" className="w-4 h-4 mr-1" />
//                       <span>{testimonial.date}</span>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Star Rating */}
//                 <div className="mb-4">{renderStars(testimonial.rating)}</div>
//                 {/* Testimonial Review */}
//                 <p className="text-gray-700">{testimonial.review}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
