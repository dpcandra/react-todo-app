import "./AppTitle.css";
import booklogo from "../image/book.png";

const AppTitle = () => {
    return(
        <div className="box-title">
            <img src={booklogo} alt="" />
            <h3>Todo App</h3>
        </div>
    );
}

export default AppTitle;