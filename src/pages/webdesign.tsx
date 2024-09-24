// import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import IMAGES from "../images/Images"


function WebDesign() {
  // const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <div className="bg-zinc-800 h-35 top-0 border-b-8 border-red-600 p-10">
          <h1 className="text-white p-5 font-semibold">Web Design</h1>
        </div>
        <div className="my-20 mx-60 p-5 border-4 border-zinc-800 bg-slate-200 cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-red-600">
          <img className="h-96" src={IMAGES.image1} alt='first image'/>
          <p className="text-center my-2 font-semibold text-2xl text-zinc-800">
            Bakery Landing Page
          </p>
        </div>
        <div className="my-20 mx-60 p-5 border-4 border-zinc-800 bg-slate-200 cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-red-600">
          <img src={IMAGES.image2} alt='first image'/>
          <p className="text-center my-2 font-semibold text-2xl text-zinc-800">
            MedicaHealth About Page
          </p>
        </div>
        <div className="my-20 mx-60 p-5 border-4 border-zinc-800 bg-slate-200 cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-red-600">
          <img src={IMAGES.image3} alt='first image'/>
          <p className="text-center my-2 font-semibold text-2xl text-zinc-800">
            Delicious Pizza Order Page
          </p>
        </div>
        <div className="my-20 mx-60 p-5 border-4 border-zinc-800 bg-slate-200 cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-red-600">
          <img src={IMAGES.image4} alt='first image'/>
          <p className="text-center my-2 font-semibold text-2xl text-zinc-800">
            Khodam Checker Page
          </p>
        </div>
        <div className="bg-zinc-800 border-t-8 border-red-600 p-5">
          <p className="text-white text-center">2024 - Muhammad Faiz Fanandi</p>
        </div>
      </div>
    </Layout>
  )
}

export default WebDesign