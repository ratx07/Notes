import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToNotes, updateToNotes } from "../redux/pastesSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();
  const pasteId = params.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToNotes(paste));
    } else {
      dispatch(addToNotes(paste));
    }
    setTitle("");
    setValue("");
    setParams({ pasteId: "" });
  }

  const style = {
    borderRadius: "0.5rem",
    //height: "30px",
    textAlign: "center",
    padding: "10px",
    borderStyle: "none",
    margin: "20px",
    fontSize: "15px",
    width: "70%",
  };

  const buttonStyle = {
    borderRadius: "0.5rem",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    margin: "20px",
    fontSize: "15px",
    cursor: "pointer",
  };

  return (
    <div>
      <div>
        <input
          style={style}
          type="text"
          placeholder="Enter your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button style={buttonStyle} onClick={createPaste}>
          {pasteId ? "Update My Note" : "Create My Note"}
        </button>
      </div>
      <div>
        <textarea
          style={style}
          value={value}
          placeholder="Enter your content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
