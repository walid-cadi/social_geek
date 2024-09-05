import React, { useState } from 'react';
import { FiCamera, FiImage, FiCalendar, FiSave, FiTrash, FiEdit, FiHeart } from 'react-icons/fi'; 
import { FaHeart, FaPen } from 'react-icons/fa'; 
import { Images, JsonData } from "../../constant";

export const Post = () => {
    const user = JsonData.users[0]; 

    const [postContent, setPostContent] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [publicationDate, setPublicationDate] = useState("");
    const [posts, setPosts] = useState([]); 

    const handleContentChange = (e) => {
        setPostContent(e.target.value);
    };

    //* select image 
    const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };

    //* date selection
    const handleDateChange = (e) => {
        setPublicationDate(e.target.value);
    };

    //* Handle the post submission
    const handleSubmit = () => {
        if (!postContent && !selectedImage) {
            alert("Please enter some content or select an image.");
            return;
        }

        const newPost = {
            content: postContent,
            image: selectedImage,
            date: publicationDate || new Date().toLocaleString(), 
            user: {
                name: `${user.firstName} ${user.lastName}`,
                image: Images[user.Image], 
            },
            isEditing: false, 
            likes: 0, 
            isLiked: false,
            comments: []
        };

        //? Add new post to the list of posts
        setPosts([newPost, ...posts]);

        //? Reset the form after submission
        setPostContent("");
        setSelectedImage(null);
        setPublicationDate("");
    };


    const handleEditClick = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].isEditing = !updatedPosts[index].isEditing; 
        setPosts(updatedPosts);
    };

  
    const handleDeleteClick = (index) => {
        const updatedPosts = posts.filter((_, i) => i !== index); 
        setPosts(updatedPosts);
    };

    const handleEditContentChange = (e, index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].content = e.target.value;
        setPosts(updatedPosts);
    };

    //* likes
    const handleLikeClick = (index) => {
        const updatedPosts = [...posts];
        if (updatedPosts[index].isLiked) {
            updatedPosts[index].likes -= 1; 
        } else {
            updatedPosts[index].likes += 1; 
        }
        updatedPosts[index].isLiked = !updatedPosts[index].isLiked; 
        setPosts(updatedPosts);
    };

    //* comment
    const handleCommentSubmit = (index, comment) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(comment); 
        setPosts(updatedPosts);
    };

    return (
        <>
            <div className="bg-white rounded-lg h-auto w-[50vw] mt-2 shadow-md p-6">
                <div className="mb-4">
                    <div className="flex items-center mb-3 gap-2">
                        <button className="text-center bg-gray-200 p-3 rounded-full">
                            <FaPen className='text-blue-600' />
                        </button>
                        <h2 className="text-sm font-semibold text-gray-400">Create Post</h2>
                    </div>

                    <div className="bg-transparent border-2 p-4 rounded-lg mt-2">
                        <textarea
                            className="w-full bg-transparent outline-none"
                            placeholder="What's on your mind?"
                            rows="3"
                            value={postContent}
                            onChange={handleContentChange}
                        ></textarea>
                    </div>

                    <div className="flex justify-between mt-2 ps-2">
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                                <FiImage color='#10d876' className='text-xl' />
                                <span className='ps-1'>Photo/Video</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                            <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                                <FiCamera color='#fe9431' className='text-xl' />
                                <span className='ps-1'>Feeling/Activity</span>
                            </label>
                            <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                                <FiCalendar className='text-xl' />
                                <span className='ps-1'>Date</span>
                                <input
                                    type="date"
                                    value={publicationDate}
                                    onChange={handleDateChange}
                                    className="ml-2"
                                />
                            </label>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                            onClick={handleSubmit}
                        >
                            Post
                        </button>
                    </div>

                    {selectedImage && (
                        <div className="mt-4">
                            <img src={selectedImage} alt="Selected" className="w-40 h-40  object-contain rounded-lg" />
                        </div>
                    )}
                </div>
            </div>

            {/* Show Area*/}
            <div className="mt-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <div className="flex items-center mb-2">
                            <img src={post.user.image} alt="User" className="w-12 h-12 rounded-full mr-2" />
                            <div>
                                <p className="font-semibold">{post.user.name}</p>
                                <p className="text-gray-500 text-sm">{post.date}</p>
                            </div>
                        </div>

                        {post.isEditing ? (
                            <input
                                type="text"
                                value={post.content}
                                onChange={(e) => handleEditContentChange(e, index)}
                                className="w-full bg-gray-50 p-2 rounded-lg"
                            />
                        ) : (
                            <p className="text-gray-700 pb-5 pt-3 ps-3 content">{post.content}</p>
                        )}

                        {post.image && <img src={post.image} alt="Post" className="w-80 mx-auto rounded-lg mb-2" />}

                        {/* Comments and React Section */}
                        <section className='CommentReact'>
                            <div className='flex gap-4 items-center justify-center mb-4 pt-10'>

                                <button
                                    className="text-gray-500 hover:text-red-500 rounded-full pt-3"
                                    onClick={() => handleLikeClick(index)}
                                >
         
                                    <FaHeart className="text-xl" color={post.isLiked ? 'red' : 'gray'} />
                                    <span className="ml-1">{post.likes}</span> {/* Display the number of likes */}
                                </button>

                                <div>
                                    <input
                                        type="text"
                                        className="w-[35vw] bg-gray-50 p-2 rounded-lg"
                                        placeholder="Write a comment..."
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && e.target.value.trim() !== '') {
                                                handleCommentSubmit(index, e.target.value);
                                                e.target.value = ''; 
                                            }
                                        }}
                                    />
                                </div>

                                <div className="flex gap-1 justify-end space-x-1">
                                    <button
                                        className="text-green-400 rounded-full"
                                        onClick={() => handleEditClick(index)}
                                    >
                                        {post.isEditing ? <FiSave  className='text-xl' /> : <FiEdit className='text-xl' />} {/* Replace text with icons */}
                                    </button>
                                    <button
                                        className="text-red-400 rounded-lg"
                                        onClick={() => handleDeleteClick(index)}
                                    >
                                        <FiTrash className='text-xl' />
                                    </button>
                                </div>

                            </div>
                            <div>
                                {post.comments.length > 0 && (
                                    <ul className='flex flex-col justify-center items-center'>
                                        {post.comments.map((comment, i) => (
                                            <li key={i} className="text-gray-700 text-sm mb-2 bg-gray-100 py-2 rounded-lg ps-4 w-[30vw] flex items-center gap-3">
                                                <img src={Images.user} className='w-10' alt="" />
                                                   <div>
                                                    <p className='font-semibold'>{post.user.name}</p>
                                                    {comment}
                                                   </div>
                                                     
                                                
                                                 
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Post;
