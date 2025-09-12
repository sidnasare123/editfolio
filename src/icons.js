import React, { useState } from "react";
import ReactFocusLock from "react-focus-lock";
import * as FaIcons from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
import * as MdIcons from "react-icons/md";

export default function Icons({ icon = "", data, setData, opt, index }) {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(icon);

  const handleSelection = (item) => {
    let Icon;

    if (item.startsWith("Fa")) Icon = FaIcons[item];
    else if (item.startsWith("Md")) Icon = MdIcons[item];
    else return "";
    return <Icon />;
  };

  const updateData = (name) => {
    const new_data = { ...data };
    new_data[opt][index].icon = name;
    setSelectedIcon(name);
    setData(new_data);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="icon-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {selectedIcon ? handleSelection(selectedIcon) : "Select icon"}
      </button>
      {open && (
        <IconModel
          selectedIcon={selectedIcon}
          updateData={updateData}
          setOpen={setOpen}
          handleSelection={handleSelection}
        />
      )}
    </React.Fragment>
  );
}

function IconModel({ selectedIcon, updateData, setOpen, handleSelection }) {
  const [search, setSearch] = useState("");
  const iconKeys = Object.keys({ ...FaIcons, ...MdIcons });
  return (
    <ReactFocusLock>
      <div className="icon-container-wrapper">
        <div className="icon-container">
          <h5>Select Icon</h5>
          <div className="icon-search-box">
            <IoSearch />
            <input
              type="text"
              name="search"
              autoComplete="search"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="all-icons">
            <div className="all-icons-wrapper">
              {iconKeys
                .filter((item) =>
                  item.toLowerCase().includes(search.trim().toLowerCase())
                )
                .map((item, idx) => {
                  return (
                    <button
                      type="button"
                      className={`${
                        item === selectedIcon ? "icon-selected" : ""
                      }`}
                      onClick={() => updateData(item)}
                      key={idx}
                    >
                      {handleSelection(item)}
                    </button>
                  );
                })}
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="close-icon">
            <IoClose />
          </button>
        </div>
      </div>
    </ReactFocusLock>
  );
}
