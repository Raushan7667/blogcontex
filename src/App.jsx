import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import PageNiation from "./components/PageNiation";
import { AppContex } from "./contex/AppContex";

function App() {
  const {fetchBlogPosts,page}=useContext(AppContex)

  useEffect(()=>{
    fetchBlogPosts(page);
  },[])
  return (
   <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <Blogs/>
    <PageNiation/>
   </div>
  );
}

export default App;
