import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlerPopState = (e) => {
            console.log(e.state);
            setRoute(e.state);
        };

        window.addEventListener("popstate", handlerPopState);

        return () => {
            window.removeEventListener("popstate", handlerPopState);
        }
    },[]);

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        console.log(url);

        window.history.pushState({page : url}, e.target.test, url);  // 주소창 url 이 바뀌어요
        setRoute({page: url})
    }

    // const router = function () {
    //     let component = null;
    //     switch (route.page) {
    //         case '/':
    //             component = <Main/>;
    //             break;
    //         case '/gallery':
    //             component = <Gallery/>;
    //             break;
    //         case '/guestbook':
    //             component = <Guestbook/>;
    //             break;
    //     }

    //     return component;
    // };

    return (
        <div>
            {
               (()=> {
                switch (route.page) {
                    case '/':
                        return <Main />
                    case '/guestbook':
                        return <Guestbook />
                    case '/gallery':
                        return <Gallery />
                    default :
                        return null;
                } 
               })()
            }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}