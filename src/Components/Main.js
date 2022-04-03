import Counter from "./Counter";
import Aside from "./Aside";
function Main({ count, setCount }) {
    return (
        <div className="main">
            <Counter count={count} setCount={setCount} />
            <Aside />
        </div>
    );
}

export default Main;