import React from "react";
import { Link } from 'react-router-dom';
import { useApi } from "../CustomHook/useApi";
const URL = "https://jsonplaceholder.typicode.com/users"
const UserData = () => {
    const [userData] = useApi(URL)
    return (
        <div className="row">
            {
                userData?.map((res) => {
                    const { id, name, email } = res
                    return (
                        <div key={id} className="col-4">
                            <div className="card p-2 mb-2">
                            <Link to={`/userData/${id}`}>
                                <div>
                                    <h5>{name}</h5>
                                    <p>{email}</p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default UserData