import React from "react";
import { useApi } from "./useApi";
const URL = "https://jsonplaceholder.typicode.com/posts"
const PostApi = () => {
    const [postData] = useApi(URL)
    return (
        <div className="">
            {
                postData?.map((res, index) => {
                    const { id, title, body } = res
                    if (index < 5) {
                        return (
                            <div key={id}>
                                <h5>{title}</h5>
                                <p>{body}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
export default PostApi