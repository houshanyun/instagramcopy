import Profile from "../layouts/aside/Profile";
import Friends from "../layouts/header/Friends";
import PostGroup from "../layouts/main/PostGroup"

function Home() {
    return (
        <>  <div className="mainWrap">
                <div className="mainLeft">
                    <Friends />
                    <PostGroup />
                </div>
                <div className="mainRight">
                    <Profile />
                </div>
            </div>
        </>
    );
}

export default Home;