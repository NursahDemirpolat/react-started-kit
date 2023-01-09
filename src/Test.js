import { useEffect,useState } from "react";

export default function Test() {

    const [postId,setpostId] = useState(1);
    const [post, setPost] = useState(false);

    
    useEffect(()=> {
        console.log("componenet ilk yüklendiğinde.");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        let interval = setInterval(() => console.log("interval çalıştı"),1000)
        return () =>{
            console.log("componenet destroyed");
            clearInterval(interval)
        };
    },[]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
     }, [postId]);

    // useEffect( ()=>{
    //     console.log("componenet render oldu");

    // });

        
    return(
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <button onClick={()=> setpostId(postId => postId+1)}>Sonraki konu</button>
            <hr/>
            Test component
        </div>
    );
}
