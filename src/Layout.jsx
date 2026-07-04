const Header =()=>{
    return(
        <h1>nextCoder news</h1>
    )
}

const Post =()=>{
    return(
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, amet. ipsum dolor sit amet.</p>
    )
}

const Footer = ()=>{
    return(
        <h2>NextCodeoallright eserved@@ 
            <span>contact email:hanadaadn@gmail.com</span>
        </h2>
    )
}


const Blog =()=>{
    return(
        <div>
            <Header />
         <main>
            <Post />
         </main>
         <Footer />
        </div>
    )
}

export default Blog;