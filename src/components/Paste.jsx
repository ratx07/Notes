import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { removeFromNotes } from "../redux/pastesSlice";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md"; // From Material Design Icons
import { FaShareAlt, FaRegCopy } from "react-icons/fa"; // From FontAwesome
import { IoEye } from "react-icons/io5";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const styleSearch = {
    width: "600px",
    height: "30px",
    margin: "15px",
    borderRadius: "0.5rem",
    borderStyle: "none",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    display: "inline",
    alignItems: "center",
    gap: "5px",
    fontSize: "16px",
  };

  const contentStyle = {
    width: "600px",
    textAlign: "left",
    borderRadius: "0.5rem",
    padding: "2px",
    margin: "5px",
  };

  const containerStyle = {
    border: "2px solid black",
    backgroundColor: "black",
    borderRadius: "0.5rem",
    padding: "2px",
    margin: "5px",
  };

  function handleDelete(pasteId) {
    dispatch(removeFromNotes(pasteId));
    toast.success("Note deleted successfully!");
  }

  function handleShare(pasteId) {
    const shareableLink = `${window.location.origin}/view/${pasteId}`;
    navigator.clipboard.writeText(shareableLink);
    toast.success("Shareable link copied!");
  }

  return (
    <div>
      <input
        style={styleSearch}
        type="search"
        placeholder="Search Here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id || paste.title} style={containerStyle}>
              <div>
                <button
                  onClick={() => navigate(`/?pasteId=${paste?._id}`)}
                  style={buttonStyle}
                >
                  <MdEdit /> Edit
                </button>
                <button
                  onClick={() => navigate(`/view/${paste?._id}`)}
                  style={buttonStyle}
                >
                  <IoEye /> View
                </button>
                <button
                  onClick={() => handleDelete(paste?._id)}
                  style={buttonStyle}
                >
                  <MdDelete /> Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied To Clipboard");
                  }}
                  style={buttonStyle}
                >
                  <FaRegCopy /> Copy
                </button>
                <button
                  onClick={() => handleShare(paste?._id)}
                  style={buttonStyle}
                >
                  <FaShareAlt /> Share
                </button>
              </div>
              <div style={contentStyle}>{paste.title}</div>
              <div style={contentStyle}>{paste.content}</div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
