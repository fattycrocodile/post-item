import React from "react";

import Header from "./layout/Header";
import Post from "./assets/components/Post";
import PostList from "./assets/components/PostList";
function App() {
  return (
    <div className="containter bg-[#F3F2EF] h-full">
      <Header />
      <div className="pt-[29px] pl-[56px] pr-[51px] space-x-[39px] flex">
        <Post />
        <PostList />
      </div>
    </div>
  );
}

export default App;
