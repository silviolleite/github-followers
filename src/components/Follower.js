import React from "react";

export default function Follower(props){
	return (
		<div className="card col-md-2 mt-4 p-1">
            <a href={props.follower.html_url}>
                <img src={props.follower.avatar_url} className="card-img-top" alt={props.follower.login} />
            </a>
            <div className="card-body">
                <a href={props.follower.html_url} className="btn btn-default">{props.follower.login}</a>
            </div>
        </div>
	)
}