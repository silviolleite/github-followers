import React, { useState, useEffect } from 'react'
import Followers from './Followers'
import axios from 'axios';
import ReactLoading from "react-loading";
import { Container, Row, Col } from 'reactstrap';
import Follower from './Follower'
import Paginate from './Pagination'

export default function SearchForm(props){    
    const [followers, setFollowers] = useState([]);
    const username = useFormInput('');
    const width = useWindowWidth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);    
    useDocumentTitle(username.value + ' followers');
    const [paginate, setPaginate] = useState('')

    useEffect(() => {
        setFollowers([]);
        return () => {
            setFollowers([]);
        };
    }, [username.value])

    function Search(e){
        setLoading(true);
        setFollowers([]);
        let url = 'https://api.github.com/users/' + username.value + '/followers';
        axios.get(url)
            .then((data) => {
                setPaginate(data.headers.link)
                let mapfollowers = data.data.map((follower) => {
                    return (
                        <Follower follower={follower} key={follower.id} />                        
                    )
                });
                setFollowers(mapfollowers);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError("username isn't registred in GitHub");
            });        
        e.preventDefault()
    }
    let msgError;
    if (error) {
        msgError =  <p>{ error }</p>
    }

    if (loading){
        return (
            <Col md={{ size: 2, offset: 5 }}>
                <ReactLoading type="bubbles" color="#000" />
            </Col>
        )
    }

    let greetings;
    if (followers.length === 0) {
        greetings = ''
    } else {
        greetings = <h1>{username.value}'s Followers</h1>

    }
    return (
        <Container>
            <div className="row">
                <div className="col-md-12">
                    <form className="form-inline mt-5">
                        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fab fa-github"></i></div>
                            </div>
                            <input type="text" className="form-control" id="username" name="username"
                                   placeholder="GitHub Username" {...username} />
                            <small id="passwordHelpInline" className="text-muted">
                              { msgError }
                            </small>
                        </div>

                        <button type="submit" className="btn btn-primary mb-2" onClick={Search}><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {greetings}
                </div>
            </div>
            <Followers followers={followers} />
            
        </Container>

    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);        
    }
    return {
        value,
        onChange: handleChange
    };
}


function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
    return width;
}