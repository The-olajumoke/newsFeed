import React from "react";

export const LeftLink=({ item })=> {
  const { img, title } = item;
  return (
    <div className=" mb-4 flex gap-4  btn-list">
      <img src={img} alt="" className="  w-10" />
      <h6>{title}</h6>
    </div>
  );
}

export const LeftTag=({ title })=> {
 
  return (
    <div className=" mb-4 flex gap-4  btn-list">
      <h6>#{title}</h6>
    </div>
  );
}

