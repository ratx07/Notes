import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();
  const pasteId = SearchParams.get("pasteId");

  return (
    <div>
      <div>
        <input
          style={{ borderRadius: "1rem" }}
          type="text"
          placeholder="enter your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>{pasteId ? "Update My Note" : "Create My Note"}</button>
      </div>
      <div>
        <textarea
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
