"use client";
import React, { useState } from "react";
import Image from "next/image";

import Banner from "@/component/banner/Banner";
import GalleryCard from "@/main/GalleryCard";
import Left from "../../../assest/Image/back.png";
import Right from "../../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";

const Page = () => {
  const [open, setOpen] = useState(0);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 450, itemsToShow: 3 },
    { width: 640, itemsToShow: 4 },
    { width: 768, itemsToShow: 5 },
    { width: 900, itemsToShow: 6 },
    { width: 1200, itemsToShow: 7 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Image src={Left} alt="/" className="w-[22px] h-[22px] " />
      ) : (
        <Image src={Right} alt="/" className="w-[22px] h-[22px] ml-1 " />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        <div className="bg-[#fdbf1e] w-[40px] h-[40px] rounded-full pt-2 pl-[7px] hidden lg:block  ">
          {pointer}
        </div>
      </button>
    );
  };
  return (
    <>
      <Banner
        imageUrl={
          "https://www.temasekclub.org.sg/wp-content/uploads/slider/cache/46fdd7ad36408fd6969f2f10a7b7026e/Gym_Image-Gallery_4.jpg"
        }
      />
      <div className="pt-20">
        <div className="max-w-[1300px] mx-auto cursor-pointer ">
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            pagination={false}
          >
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(0)}
                className={` text-center py-4 text-[20px] font-semibold  text-white  border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 0 ? "bg-[#ffae12]" : ""
                } `}
              >
                All
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(1)}
                className={` text-center py-4 text-[20px] font-semibold text-white border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 1 ? "bg-[#ffae12]" : ""
                } `}
              >
                Fitness
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(2)}
                className={`text-center py-4 text-[20px]  text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 2 ? "bg-[#ffae12]" : ""
                } `}
              >
                Excercise
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(3)}
                className={` text-center py-4 text-[20px] text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 3 ? "bg-[#ffae12]" : ""
                } `}
              >
                Gym
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(4)}
                className={`text-center py-4 text-[20px] text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 4 ? "bg-[#ffae12]" : ""
                } `}
              >
                Workout
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(5)}
                className={`text-center py-4 text-[20px] text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 5 ? "bg-[#ffae12]" : ""
                } `}
              >
                Group
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(6)}
                className={`text-center py-4 text-[20px]  text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 6 ? "bg-[#ffae12]" : ""
                } `}
              >
                Trainers{" "}
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(4)}
                className={`text-center py-4 text-[20px] text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 4 ? "bg-[#ffae12]" : ""
                } `}
              >
                Workout
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(5)}
                className={`text-center py-4 text-[20px] text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 5 ? "bg-[#ffae12]" : ""
                } `}
              >
                Group
              </p>
            </div>
            <div
              className="bg-no-repeat bg-cover bg-center bg-[#322b21] w-[160px] opacity-[0.9]"
              style={{
                backgroundImage: `url(${"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"})`,
              }}
            >
              <p
                onClick={() => setOpen(6)}
                className={`text-center py-4 text-[20px]  text-white font-semibold border hover:bg-[#ffae12] scale-100 ease-in duration-300 ${
                  open == 6 ? "bg-[#ffae12]" : ""
                } `}
              >
                Trainers{" "}
              </p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="">
        {open == 0 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Beatsfitness Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
              <GalleryCard
                imageUrl={
                  "https://glogym.co.uk/wp-content/uploads/2016/04/IMG_6651-2.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://goldsgym.in/uploads/gallery/compress-photo-1561214078-f3247647fc5e.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipPGrGUtt5b1CcOpSfL7hPX4en6D5C1EeOZugEW0=w408-h306-k-no"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2fzF0sHSWU_dmbLhKsR4PjrAO56EghALRQ&usqp=CAU"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hagerstownsportsclubfitness.com/wp-content/uploads/2015/10/IMG_2034.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/push-up-class-senior-people-fitness-group-circle-workout-training-community-support-exercise-club-gym-lose-weight-elderly-friends-with-teamwork-sports-goals-health_590464-148422.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://onlookersmedia.in/wp-content/uploads/2020/08/bharaths-new-gym-pics-1.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://ultimategymsolutions.com/wp-content/uploads/2023/05/PUG-TDI-Interior-Pics-01.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipNqgYy-7TIMk18uR_SvvS0eT6d0NQylIZ2rd80p=w480-h300-k-n"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://themarsfitnessarena.com/images/gym-gallery/pics-13.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://glogym.co.uk/wp-content/uploads/2016/04/IMG_6651-2.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://goldsgym.in/uploads/gallery/compress-photo-1561214078-f3247647fc5e.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipPGrGUtt5b1CcOpSfL7hPX4en6D5C1EeOZugEW0=w408-h306-k-no"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2fzF0sHSWU_dmbLhKsR4PjrAO56EghALRQ&usqp=CAU"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hagerstownsportsclubfitness.com/wp-content/uploads/2015/10/IMG_2034.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/push-up-class-senior-people-fitness-group-circle-workout-training-community-support-exercise-club-gym-lose-weight-elderly-friends-with-teamwork-sports-goals-health_590464-148422.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://onlookersmedia.in/wp-content/uploads/2020/08/bharaths-new-gym-pics-1.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://ultimategymsolutions.com/wp-content/uploads/2023/05/PUG-TDI-Interior-Pics-01.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipNqgYy-7TIMk18uR_SvvS0eT6d0NQylIZ2rd80p=w480-h300-k-n"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://themarsfitnessarena.com/images/gym-gallery/pics-13.jpg"
                }
              />
            </div>
          </>
        )}
        {open == 1 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Fitness Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=sph"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://gymbody.pro/wp-content/uploads/2023/08/fitness.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://manofmany.com/wp-content/uploads/2021/01/Fitness-Trends-2021-c.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.istockphoto.com/id/1438034462/photo/latino-and-african-sport-woman-exercising-and-build-muscle-in-stadium-active-strong-beautiful.jpg?s=612x612&w=0&k=20&c=kFwCRkh8Q1v6uCoSTL7sQcsbk02zgSZJ1kDgnJ3DAZc="
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.muscleandfitness.com/wp-content/uploads/2018/04/woman-abs-workout-dumbbell-1109.jpg?w=1300&h=731&crop=1&quality=86&strip=all"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://i.pinimg.com/736x/61/31/3e/61313eaeef663d3491a7c1bfbd4ea61a.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/02/fitness-tips-1645774618.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://upload.wikimedia.org/wikipedia/commons/1/1f/USMC-Rich_Froning_Jr.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.theonlinerocket.com/wp-content/uploads/2021/05/AmericanHomeFitness-69144-working-out0-friends-image1.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/free-photo/young-happy-sportswoman-getting-ready-workout-tying-shoelace-fitness-center_637285-470.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://cdn.pixabay.com/photo/2023/06/01/07/57/fitness-8033046_960_720.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.inshapeme.com/wp-content/uploads/2023/07/women-personal-training-gym-6.jpg"
                }
              />
            </div>
          </>
        )}
        {open == 2 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Excercise Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
              <GalleryCard
                imageUrl={
                  "https://www.trainingspaces.ca/wp-content/uploads/2019/08/Fitness_7MinuteWorkout_FeatureImage_compressed.gif"
                }
              />
              <GalleryCard imageUrl={"https://images.wsj.net/im-335891"} />
              <GalleryCard
                imageUrl={
                  "https://images.wsj.net/im-440733/?width=700&height=466"
                }
              />
              <GalleryCard
                imageUrl={"https://seven.app/media/images/Crunches.gif"}
              />
              <GalleryCard
                imageUrl={
                  "https://64.media.tumblr.com/5fb0aedfcfb151ecd43de20472358a9f/tumblr_nifpcukNQS1rtehooo1_1280.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.self.com/photos/582222ed6c9fd742583db4a7/master/w_1600%2Cc_limit/single-leg-dumbbell-row.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://mymodernmet.com/wp/wp-content/uploads/archive/a3gYZvwrs8ZWB8M9DX6B_dailymoves1.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.tenor.com/qYZpeGs_ackAAAAC/bodyweight-workout.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.healthier.qld.gov.au/wp-content/uploads/2015/07/29_M_WIP02.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://bobbyberk.com/wp-content/uploads/2020/04/Burpees-Cropped1.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://webappstatic.buzzfeed.com/static/2014-12/30/10/enhanced/webdr10/anigif_enhanced-buzz-14460-1419954142-21.gif"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media4.giphy.com/media/1FOXWVmxLI2yqm716t/giphy.gif"
                }
              />
            </div>
          </>
        )}
        {open == 3 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Gym Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <GalleryCard
                imageUrl={
                  "https://cdn.abcotvs.com/dip/images/6346240_092519-kfsn-6p-gym-issues-vid.jpg?w=1600"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://premiumsignsolutions.com/wp-content/uploads/2019/01/CrunchNorthridge3.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.fitonefour.com/wp-content/uploads/2017/10/gym-outside-left-e1508708065414.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://qtxasset.com/quartz/qcloud2/media/image/clubindustry/1588536823/Gold%27s%20Simi%20Valley%20OutsideCrop-800.jpg?VersionId=5x.FsV39vPPc7toUR9av.DYqfuc2nX0M"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.bizj.us/view/img/12173445/purefitness398*1200xx2133-1600-134-0.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://blog.o2fitnessclubs.com/hs-fs/hubfs/Club%20Specific/Moncks%20Corner/O2-Fitness-Moncks-Corner-Header.jpg?width=667&name=O2-Fitness-Moncks-Corner-Header.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://wordpress.wbur.org/wp-content/uploads/2020/11/0706_healthworks-02-e1605816171743.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://onlookersmedia.in/wp-content/uploads/2020/08/bharaths-new-gym-pics-1.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://ultimategymsolutions.com/wp-content/uploads/2023/05/PUG-TDI-Interior-Pics-01.jpg"
                }
              />
            </div>
          </>
        )}
        {open == 4 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Workout Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10 ">
              <GalleryCard
                imageUrl={
                  "https://www.hawaiipacifichealth.org/media/8553/5-ways-group-workouts-can-help-you-reach-your-fitness-goals-web.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://www.spookynooksports.com/hs-fs/hubfs/group-exercise.jpg?width=750&name=group-exercise.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "data:image/jpeg;base64,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"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://i0.wp.com/lanecoveaquatic.com.au/wp-content/uploads/2020/06/June-Newsletter-Headers-17.jpg?fit=1082%2C476&ssl=1"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cross-training-royalty-free-image-1589836587.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://olympiafitnessri.com/wp-content/uploads/2021/03/People-doing-pushups-together-in-a-health-club-class-853407238_5976x3984-scaled-e1615396175580.jpeg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://ik.imagekit.io/02fmeo4exvw/certifiednews/August_2011/September_2011/GroupFitnessClass.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "data:image/jpeg;base64,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"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hips.hearstapps.com/hmg-prod/images/pushups-royalty-free-image-1570214607.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq9-H4SV6oW2NoOIR7z6WXpvd0RtQ_sy-mA&usqp=CAU"
                }
              />
            </div>
          </>
        )}
        {open == 5 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Group Excercise Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <GalleryCard
                imageUrl={
                  "https://glogym.co.uk/wp-content/uploads/2016/04/IMG_6651-2.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://goldsgym.in/uploads/gallery/compress-photo-1561214078-f3247647fc5e.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipPGrGUtt5b1CcOpSfL7hPX4en6D5C1EeOZugEW0=w408-h306-k-no"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2fzF0sHSWU_dmbLhKsR4PjrAO56EghALRQ&usqp=CAU"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hagerstownsportsclubfitness.com/wp-content/uploads/2015/10/IMG_2034.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/push-up-class-senior-people-fitness-group-circle-workout-training-community-support-exercise-club-gym-lose-weight-elderly-friends-with-teamwork-sports-goals-health_590464-148422.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?w=360"
                }
              />
            </div>
          </>
        )}
        {open == 6 && (
          <>
            <h1 className="lg:text-[60px] text-[40px] sm:text-[50px] font-bold text-center pt-8">
              Trainers Gallery
            </h1>
            <div className="max-w-[80%] mx-auto py-8 lg:py-20  px-5 lg:px-0 sm:grid-cols-2  grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <GalleryCard
                imageUrl={
                  "https://glogym.co.uk/wp-content/uploads/2016/04/IMG_6651-2.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://goldsgym.in/uploads/gallery/compress-photo-1561214078-f3247647fc5e.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://lh5.googleusercontent.com/p/AF1QipPGrGUtt5b1CcOpSfL7hPX4en6D5C1EeOZugEW0=w408-h306-k-no"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2fzF0sHSWU_dmbLhKsR4PjrAO56EghALRQ&usqp=CAU"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://hagerstownsportsclubfitness.com/wp-content/uploads/2015/10/IMG_2034.jpg"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/push-up-class-senior-people-fitness-group-circle-workout-training-community-support-exercise-club-gym-lose-weight-elderly-friends-with-teamwork-sports-goals-health_590464-148422.jpg?w=360"
                }
              />
              <GalleryCard
                imageUrl={
                  "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="
                }
              />
              <GalleryCard
                imageUrl={
                  "https://img.freepik.com/premium-photo/athletic-man-doing-bent-row-muscles_754108-1006.jpg?w=360"
                }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
