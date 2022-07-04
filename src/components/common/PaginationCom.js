import React from 'react';

export default function PaginationCom({ postPerPage, totalPosts }) {
  /* const classes = useStyles(); */

  const pageNumbers = [];
  //console.log(pageNumbers.length)

  for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <div /*  className={classes.root} */>
      {/* <Pagination count={10} shape="rounded" />
      {pageNumbers.map((val,key) => {
        return(

          )
        })}
        <Pagination count={10} variant="outlined" shape="rounded" /> */}

        <ul>
          {pageNumbers.map(number => {
            <li key={number}>
              <a href='!#'>{number}</a>
            </li>
          })}
        </ul>
    </div>
  );
}
