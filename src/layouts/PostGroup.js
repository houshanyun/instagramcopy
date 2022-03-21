import Images from "../assets/userImages"
import {
    FaRegPaperPlane,
    FaRegBookmark,
    FaRegHeart,
    FaRegComment,
    FaRegGrinBeam
} from "react-icons/fa";

const PostGroup = () => {
    return (
        <main className="postGroup">
            <div className="post">
                <div className="postUser">
                    <div className="postUserPicture">
                        <img src="https://picsum.photos/id/232/100/100" alt="" />
                    </div>
                    <div className="postUserName">
                        <h3>bbbb</h3>
                    </div>
                    <div className="upModal">
                        ...
                    </div>
                </div>
                <div className="postPictures">
                    <div className="picWrap">
                    {
                        Images.map(item => {
                            return (
                                <>
                                    <picture>
                                        <img src={item} alt="" />
                                    </picture>
                                </>
                            )
                        })
                    }

                    </div>
                    <div className="imgPositionWrap">
                    {
                        Images.map(() => <div className="imgPosition"></div>)
                    }
                    </div>
                </div>
                <ul className="postIcons">
                    <li><FaRegHeart/></li>
                    <li><FaRegComment/></li>
                    <li><FaRegPaperPlane/></li>
                    <li><FaRegBookmark/></li>
                </ul>
                <div className="commentWrap">
                    <div className="postAddGoodUser">
                        <picture>
                            <img src="https://picsum.photos/id/232/100/100" alt="" />
                        </picture>
                        <div className="postAddGoodUserName">
                            <h3>bbbb</h3>
                        </div>
                        <div className="goodPeople">
                            <p>和其他人按讚了</p>
                        </div>
                    </div>
                    <div className="postComments">
                        <p className="postContent">
                            <span className="userName">aaaaa</span>
                        不去我說服務上次每次一場雙方，一隻醫療，招聘背後主體住宅不願男生股東方法辦公室，試驗按鈕我很如下便宜呼吸增長笑道上網一些手中收藏本頁，你就機器性別之中懷疑男子填寫徹底，簡直之下校園航空大戰說到打印推坑大魔王威望，大學生屏東答案進攻旅遊美好主要它的，將在汽。

                        </p>
                        <span className="readMore">繼續閱讀</span>


                    </div>
                    <div className="wrap">
                            <div className="userComments"><p>其他留言</p></div>
                            <time>1日前</time>
                    </div>

                    <div className="addComment">
                        <div className="emoji"><FaRegGrinBeam /></div>
                        <form className="Comment">
                            <input type="text" placeholder="輸入留言"/>
                            <button type="submit">留言</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="postUser">
                    <div className="postUserPicture">
                        <img src="https://picsum.photos/id/232/100/100" alt="" />
                    </div>
                    <div className="postUserName">
                        <h3>bbbb</h3>
                    </div>
                    <div className="upModal">
                        ...
                    </div>
                </div>
                <div className="postPictures">
                    <div className="picWrap">
                    {
                        Images.map(item => {
                            return (
                                <>
                                    <picture>
                                        <img src={item} alt="" />
                                    </picture>
                                </>
                            )
                        })
                    }

                    </div>
                    <div className="imgPositionWrap">
                    {
                        Images.map(() => <div className="imgPosition"></div>)
                    }
                    </div>
                </div>
                <ul className="postIcons">
                    <li><FaRegHeart/></li>
                    <li><FaRegComment/></li>
                    <li><FaRegPaperPlane/></li>
                    <li><FaRegBookmark/></li>
                </ul>
                <div className="commentWrap">
                    <div className="postAddGoodUser">
                        <picture>
                            <img src="https://picsum.photos/id/232/100/100" alt="" />
                        </picture>
                        <div className="postAddGoodUserName">
                            <h3>bbbb</h3>
                        </div>
                        <div className="goodPeople">
                            <p>和其他人按讚了</p>
                        </div>
                    </div>
                    <div className="postComments">
                        <p className="postContent">
                            <span className="userName">aaaaa</span>
                        不去我說服務上次每次一場雙方，一隻醫療，招聘背後主體住宅不願男生股東方法辦公室，試驗按鈕我很如下便宜呼吸增長笑道上網一些手中收藏本頁，你就機器性別之中懷疑男子填寫徹底，簡直之下校園航空大戰說到打印推坑大魔王威望，大學生屏東答案進攻旅遊美好主要它的，將在汽。

                        </p>
                        <span className="readMore">繼續閱讀</span>


                    </div>
                    <div className="wrap">
                            <div className="userComments"><p>其他留言</p></div>
                            <time>1日前</time>
                    </div>

                    <div className="addComment">
                        <div className="emoji"><FaRegGrinBeam /></div>
                        <form className="Comment">
                            <input type="text" placeholder="輸入留言"/>
                            <button type="submit">留言</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="postUser">
                    <div className="postUserPicture">
                        <img src="https://picsum.photos/id/232/100/100" alt="" />
                    </div>
                    <div className="postUserName">
                        <h3>bbbb</h3>
                    </div>
                    <div className="upModal">
                        ...
                    </div>
                </div>
                <div className="postPictures">
                    <div className="picWrap">
                    {
                        Images.map(item => {
                            return (
                                <>
                                    <picture>
                                        <img src={item} alt="" />
                                    </picture>
                                </>
                            )
                        })
                    }

                    </div>
                    <div className="imgPositionWrap">
                    {
                        Images.map(() => <div className="imgPosition"></div>)
                    }
                    </div>
                </div>
                <ul className="postIcons">
                    <li><FaRegHeart/></li>
                    <li><FaRegComment/></li>
                    <li><FaRegPaperPlane/></li>
                    <li><FaRegBookmark/></li>
                </ul>
                <div className="commentWrap">
                    <div className="postAddGoodUser">
                        <picture>
                            <img src="https://picsum.photos/id/232/100/100" alt="" />
                        </picture>
                        <div className="postAddGoodUserName">
                            <h3>bbbb</h3>
                        </div>
                        <div className="goodPeople">
                            <p>和其他人按讚了</p>
                        </div>
                    </div>
                    <div className="postComments">
                        <p className="postContent">
                            <span className="userName">aaaaa</span>
                        不去我說服務上次每次一場雙方，一隻醫療，招聘背後主體住宅不願男生股東方法辦公室，試驗按鈕我很如下便宜呼吸增長笑道上網一些手中收藏本頁，你就機器性別之中懷疑男子填寫徹底，簡直之下校園航空大戰說到打印推坑大魔王威望，大學生屏東答案進攻旅遊美好主要它的，將在汽。

                        </p>
                        <span className="readMore">繼續閱讀</span>


                    </div>
                    <div className="wrap">
                            <div className="userComments"><p>其他留言</p></div>
                            <time>1日前</time>
                    </div>

                    <div className="addComment">
                        <div className="emoji"><FaRegGrinBeam /></div>
                        <form className="Comment">
                            <input type="text" placeholder="輸入留言"/>
                            <button type="submit">留言</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PostGroup;