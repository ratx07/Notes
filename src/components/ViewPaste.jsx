import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id);
  if (!paste) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px" }}>Paste not found</p>
    );
  }

  return (
    <div>
      <div>
        <input style={style} type="text" value={paste?.title} disabled />
      </div>
      <div>
        <textarea style={style} value={paste.content} disabled rows={20} />
      </div>
    </div>
  );
};

export default ViewPaste;
