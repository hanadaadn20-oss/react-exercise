
import React, { useState, useEffect } from "react";

const initialPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content: "React is a JavaScript library used to build user interfaces. It helps developers create reusable components."
  },
  {
    id: 2,
    title: "Understanding React Router",
    content: "React Router helps you navigate between different pages in a React application."
  },
  {
    id: 3,
    title: "React Hooks in Depth",
    content: "React Hooks allow you to use state and other React features inside functional components."
  }
];

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("blogPosts");
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem("blogUser") || "";
  });

  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(posts));
  }, [posts]);

  // LOGIN
  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    setUser(email);
    localStorage.setItem("blogUser", email);

    setPage("home");
    setEmail("");
    setPassword("");
  }

  // LOGOUT
  function handleLogout() {
    setUser("");
    localStorage.removeItem("blogUser");
    setPage("home");
  }

  // CREATE POST
  function handleCreatePost(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setContent("");
    setPage("home");

    alert("Post created successfully!");
  }

  // SEARCH
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // OPEN POST
  function openPost(post) {
    setSelectedPost(post);
    setPage("details");
  }

  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f5f5f5;
          color: #222;
        }

        .navbar {
          background: white;
          padding: 20px 8%;
          display: flex;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #ddd;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          margin-right: 20px;
        }

        button {
          border: none;
          padding: 12px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .home-btn, .search-btn, .create-btn {
          background: #1596bd;
          color: white;
        }

        .logout-btn {
          background: #dc626b;
          color: white;
        }

        .link-btn {
          background: transparent;
          color: #222;
        }

        .container {
          max-width: 900px;
          margin: 50px auto;
          padding: 30px;
          background: white;
          border-radius: 8px;
          min-height: 200px;
        }

        h2 {
          font-size: 22px;
        }

        input, textarea {
          width: 100%;
          padding: 14px;
          margin: 10px 0;
          border: 1px solid #aaa;
          border-radius: 5px;
          font-size: 16px;
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }

        .search-btn {
          width: 100%;
          margin-bottom: 10px;
        }

        .post-link {
          display: block;
          padding: 12px 0;
          color: #222;
          font-size: 18px;
          cursor: pointer;
        }

        .post-link:hover {
          color: #1596bd;
        }

        .form {
          max-width: 500px;
          margin: auto;
        }

        .post-content {
          font-size: 18px;
          line-height: 1.7;
          margin: 20px 0;
        }

        @media (max-width: 600px) {
          .navbar {
            padding: 15px;
            gap: 8px;
          }

          .logo {
            width: 100%;
          }

          .container {
            margin: 20px 12px;
            padding: 20px;
          }
        }
      `}</style>

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">React Blog</div>

        <button
          className="home-btn"
          onClick={() => setPage("home")}
        >
          Home
        </button>

        {user ? (
          <>
            <button
              className="link-btn"
              onClick={() => setPage("create")}
            >
              Create Post
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="home-btn"
            onClick={() => setPage("login")}
          >
            Login
          </button>
        )}
      </nav>

      {/* HOME PAGE */}

      {page === "home" && (
        <div className="container">
          <h2>Blog Posts</h2>

          <input
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={() => setSearch(search.trim())}
          >
            Search
          </button>

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                className="post-link"
                key={post.id}
                onClick={() => openPost(post)}
              >
                {post.title}
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      )}

      {/* POST DETAILS */}

      {page === "details" && selectedPost && (
        <div className="container">
          <h2>{selectedPost.title}</h2>

          <p className="post-content">
            {selectedPost.content}
          </p>

          <button
            className="home-btn"
            onClick={() => setPage("home")}
          >
            Previous
          </button>
        </div>
      )}

      {/* LOGIN PAGE */}

      {page === "login" && (
        <div className="container">
          <form className="form" onSubmit={handleLogin}>
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="home-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      )}

      {/* CREATE POST PAGE */}

      {page === "create" && (
        <div className="container">
          {user ? (
            <form className="form" onSubmit={handleCreatePost}>
              <h2>Create New Post</h2>

              <input
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                placeholder="Write your post content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />

              <button className="create-btn" type="submit">
                Publish Post
              </button>
            </form>
          ) : (
            <div>
              <h2>Please login first</h2>
              <button
                className="home-btn"
                onClick={() => setPage("login")}
              >
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
