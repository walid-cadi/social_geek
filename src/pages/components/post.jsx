import React, { useState } from 'react';
import { FiCamera, FiImage, FiSave, FiTrash, FiEdit } from 'react-icons/fi';
import { FaHeart, FaPen, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Images, JsonData } from "../../constant";

export const Post = () => {
    const user = JsonData.users[0];

    const [postContent, setPostContent] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const [publicationDate, setPublicationDate] = useState("");
    const [posts, setPosts] = useState([]);
 
    //*when the user types in the textarea
    const handleContentChange = (e) => {
        setPostContent(e.target.value);
    };
     
    //* when the user select images
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...imageUrls]);
    };

    const handleSubmit = () => {
        if (!postContent && selectedImages.length === 0) {
            alert("Please enter some content or select an image.");
            return;
        }

        const newPost = {
            content: postContent,
            images: selectedImages,
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

        setPosts([newPost, ...posts]);
        setPostContent("");
        setSelectedImages([]);
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

    const handleCommentSubmit = (index, comment) => {
        const updatedPosts = [...posts];
        updatedPosts[index].comments.push(comment);
        setPosts(updatedPosts);
    };

    const Carousel = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0); //? to display img 1 by default

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };

        return (
            <div className="relative w-64 h-64">
                {images.length > 1 && (
                    <button
                        className="absolute right-80 top-28 p-2 bg-gray-300 rounded-full"
                        onClick={handlePrev}
                    >
                        <FaArrowLeft />
                    </button>
                )}
                <img
                    src={images[currentIndex]}
                    alt={`Post Image ${currentIndex}`}
                    className=" w-full h-full rounded-lg"
                />
                {images.length > 1 && (
                    <button
                        className="absolute left-80 top-28 p-2 bg-gray-300 rounded-full"
                        onClick={handleNext}
                    >
                        <FaArrowRight />
                    </button>
                )}
            </div>
        );
    };



    return (
        <>
            <div className="bg-white rounded-lg h-auto w-[50vw] mt-2 shadow-md p-6">
                <div className="mb-4">
                    <div className="flex items-center mb-3 gap-2">
                        <button className="text-center bg-gray-200 p-3 rounded-full">
                            <FaPen className="text-blue-600" />
                        </button>
                        <h2 className="text-sm font-semibold text-gray-400">Create Post</h2>
                    </div>

                    <div className="bg-transparent border-2 p-4 rounded-lg mt-2">
                        <textarea
                            className="w-full bg-transparent border-none outline-none"
                            placeholder="What's on your mind?"
                            rows="3"
                            value={postContent}
                            onChange={handleContentChange}
                        ></textarea>
                    </div>

                    <div className="flex justify-between mt-2 ps-2">
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                                <FiImage color="#10d876" className="text-xl" />
                                <span className="ps-1">Photo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                    multiple
                                />
                            </label>
                            <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                                <FiCamera color="#fe9431" className="text-xl" />
                                <span className="ps-1">Video</span>
                            </label>
                        </div>
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                            onClick={handleSubmit}
                        >
                            Post
                        </button>
                    </div>

                    {selectedImages.length > 0 && (
                        <div className="mt-4 relative flex items-center justify-center">
                            <Carousel images={selectedImages} />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-6">
                {posts.map((post, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <div className="flex items-center mb-2">
                            <img src={Images.notuser3} alt="User" className="w-12 h-12 rounded-full mr-2" />
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

                        {post.images.length > 0 && (
                            <div className="mt-4 relative  flex items-center justify-center">
                                <Carousel images={post.images} />
                            </div>
                        )}

                        <section className="CommentReact">
                            <div className="flex gap-4 items-center justify-center mb-4 pt-10">
                                <button
                                    className="text-gray-500 hover:text-red-500 rounded-full pt-3"
                                    onClick={() => handleLikeClick(index)}
                                >
                                    <FaHeart className="text-xl" color={post.isLiked ? 'red' : 'gray'} />
                                    <span className="ml-1">{post.likes}</span>
                                </button>

                                <div>
                                    <input
                                        type="text"
                                        className="w-[35vw] bg-gray-50 p-2 border-1 border-gray-300 rounded-lg"
                                        placeholder="Write a comment..."
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' && e.target.value.trim() !== "") {
                                                handleCommentSubmit(index, e.target.value);
                                                e.target.value = "";
                                            }
                                        }}
                                    />
                                </div>

                                <div className="flex gap-1 justify-end space-x-1">
                                    <button
                                        className="text-blue-500 rounded-full"
                                        onClick={() => handleEditClick(index)}
                                    >
                                        {post.isEditing ? <FiSave className='text-xl' /> : <FiEdit className='text-xl' />}
                                    </button>
                                    <button
                                        className="text-gray-600 hover:text-red-500 rounded-lg"
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
                                                <img src={Images.notuser3} className='w-10' alt="" />
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
