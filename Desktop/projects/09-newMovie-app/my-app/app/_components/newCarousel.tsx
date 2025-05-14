// "use client";

// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export const NewCarousel = () => {
//   return (
//     <div className="w-full justify-center flex ">
//       <Carousel
//         plugins={[
//           Autoplay({
//             delay: 2000,
//           }),
//         ]}
//       >
//         <CarouselContent className=" relative flex justify-center items-center h-[600px] w-screen ">
//           <CarouselItem>
//             <div className="relative h-full bg-red-500">
//               <Image
//                 src={"/Feature (1).png"}
//                 fill
//                 alt="image"
//                 objectFit="cover"
//                 className="absolute"
//               />
//             </div>
//           </CarouselItem>
//           <CarouselItem>
//             <div className="relative w-full h-[600px] bg-blue-500">
//               <Image
//                 src={"/Feature (4).png"}
//                 fill
//                 alt="image"
//                 objectFit="cover"
//                 className="absolute"
//               />
//             </div>
//           </CarouselItem>
//           <CarouselItem>
//             <div className="relative h-[600px] bg-red-500">
//               <Image
//                 src={"/Feature (5).png"}
//                 fill
//                 alt="image"
//                 objectFit="cover"
//               />
//             </div>
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious className="absolute top-1/2 left-4 transform" />
//         <CarouselNext className="absolute top-1/2 right-4 transform" />
//       </Carousel>
//     </div>
//   );
// };
