import Faq from "../models/Faq";
import Features from "../models/Features";
import Footer from "../models/Footer";
import OurTeam from "../models/OurTeam";
import Reviews from "../models/Reviews";
import Services from "../models/Services";
import { connectDb } from "./mongodb";
import data from "@/../database.json";
import WhyChooseUs from "../models/WhyChooseUs";

const seedDb = async () => {
  //connect to databse
  await connectDb();
  try {
    //Faq
    const faqCount = await Faq.countDocuments();
    if (faqCount == 0) {
      await Faq.insertMany(data.database.faq);
      console.log("inserting data into database");
    } else console.log("data already exist");

    //services
    const servicesCount = await Services.countDocuments();
    if (servicesCount == 0) {
      await Services.insertMany(data.database.services);
      console.log("inserting data into database");
    } else console.log("data already exist");

    // features
    const featuresCount = await Features.countDocuments();
    if (featuresCount == 0) {
      await Features.insertMany(data.database.features);
      console.log("inserting data into database");
    } else console.log("data already exist");

    //why dhoose us
    const whyChooseCount = await WhyChooseUs.countDocuments();
    if (whyChooseCount == 0) {
      await WhyChooseUs.insertMany(data.database.whyChooseUs);
      console.log("inserting data into database");
    } else console.log("data already exist");

    //reviews
    const reviewsCount = await Reviews.countDocuments();
    if (reviewsCount == 0) {
      await Reviews.insertMany(data.database.reviews);
      console.log("inserting data into database");
    } else console.log("data already exist");

    //our team
    const ourTeamCount = await OurTeam.countDocuments();
    if (ourTeamCount == 0) {
      await OurTeam.insertMany(data.database.ourTeam);
      console.log("inserting data into database");
    } else console.log("data already exist");

    //footer
  } catch (err) {
    console.error("error seeding database.json", err);
  }
};

export default seedDb;
