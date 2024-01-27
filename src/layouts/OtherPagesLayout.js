import React from "react";
import Temp from "../customHook/Temp";
import CommonLayout from "./common/CommonLayout";

export default function OtherPagesLayout({
  title,
  handleCat,
  info,
  loading,
  category,
}) {
  const [post, setPost] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postPerPage, setPostPerPage] = React.useState(9);

  React.useEffect(() => {
    const newsData = info.map((val) => {
      return val;
    });
    setPost(newsData);
  }, [info]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPost - postPerPage;
  const currentPosts = post.slice(indexOfFirstPage, indexOfLastPost);

  return (
    <div>
      <CommonLayout handleCat={handleCat}>
        <div>
          <h2
            style={{
              background: "#E53935",
              color: "white",
              padding: "8px",
              transform: "skew(-5deg)",
            }}
          >
            {title}
          </h2>
          <Temp
            info={currentPosts}
            loading={loading}
            postPerPage={postPerPage}
            post={post.length}
            category={category}
          />
        </div>
      </CommonLayout>
    </div>
  );
}
