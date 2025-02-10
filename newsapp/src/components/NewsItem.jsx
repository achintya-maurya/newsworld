// import React from "react";

// const NewsItem = ({ title, description, src, url, author, publishedSAt }) => {
//   return (
//     <div className="col-md-3 d-inline-block mb-2  ">
//       <div
//         className="card bg-dark text-light  mx-3 my-1 "
//         style={{ maxWidth: "345px" }}
//       >
//         <img
//           src={
//             !src
//               ? "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg"
//               : src
//           }
//           style={{ height: "200px", width: "343px" }}
//           className="card-img-top"
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">{title ? title.slice(0, 10) : ""} </h5>
//           <p className="card-text">
//             {description ? description.slice(0, 90) : ""}
//           </p>
//           <p className="card-text"> {author}</p>
//           <p className="card-text"> {publishedSAt}</p>
//           <a href={url} className="btn btn-danger">
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
import React, { useState } from "react";

const NewsItem = ({ title, description, src, url, author, publishedSAt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-3 d-inline-block mb-2">
      <div
        className="card bg-dark text-light mx-3 my-1"
        style={{
          maxWidth: "345px",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: isHovered ? "0 8px 16px rgba(255, 255, 255, 0.2)" : "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={
            !src
              ? "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg"
              : src
          }
          style={{ height: "200px", width: "343px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 10) : ""} </h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : ""}
          </p>
          <p className="card-text"> {author}</p>
          <p className="card-text"> {publishedSAt}</p>
          <a href={url} className="btn btn-danger">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
