import Images from "../../assets/userImages"
import {
    FaRegPaperPlane,
    FaRegBookmark,
    FaRegHeart,
    FaRegComment
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
                    <div className="postCommentUser"></div>
                    <div className="postComments"></div>
                    <div className="addComment"></div>
                </div>
            </div>
        </main>
    )
}

export default PostGroup;