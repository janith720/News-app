import React from "react";

export const PagiCompo = ({ postPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <div>
      {/* <ul>
          {pageNumbers.map(number => {
            <li key={number}>
              <a href='!#'>{number}</a>
            </li>
          })}
        </ul> */}
      <ul>
        {pageNumbers.map((val, key) => {
          return (
            <li key={key}>
              <a href="!#">{val}</a>
            </li>
          );
        })}
      </ul>

      {/*  <ul>
            <li>fgdfg</li>
            <li>fgdfg</li>
            <li>fgdfg</li>
        </ul> */}
    </div>
  );
};
