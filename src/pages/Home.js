import Profile from "../layouts/Profile";
import Friends from "../layouts/Friends";
import PostGroup from "../layouts/PostGroup"

function Home() {
    return (
        <div className="mainWrap">
            <div className="mainLeft">
                <Friends />
                <PostGroup />
            </div>
            <div className="mainRight">
                <Profile />
            </div>
        </div>
    );
}

export default Home;