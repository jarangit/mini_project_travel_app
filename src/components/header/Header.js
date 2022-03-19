import React from "react";
const Header = () => {
  return (
    <div className="header_bar">
      <div className="header_title">
        <h2>Travel</h2>
      </div>
      <div className="header_search">
        {/* <Autocomplete> */}
        <label>
          Explore new places
          {/* <Search /> */}
          <input type="search" placeholder="search..." />
        </label>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
};

export default Header;
