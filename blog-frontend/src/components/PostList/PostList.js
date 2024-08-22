import React from "react";
import PostList from "./PostList.jsx";

class PostLists extends React.Component {

  render() {
    return PostList.call(this);
  }
}

export default PostLists;
