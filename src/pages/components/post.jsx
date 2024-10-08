import React, { useState } from "react";
import { FiCamera, FiImage, FiSave, FiTrash, FiEdit } from "react-icons/fi";
import { FaHeart, FaPen, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  FiUsers,
  FiMessageSquare,
  FiSettings,
  FiBell,
  FiInfo,
  FiArrowDown,
  FiArrowDownRight,
} from "react-icons/fi";
import { Images } from "../../constant";
import { MyAppContext } from "../../context/index";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../style/homePage.css";

const Modal = ({ isOpen, closeModal, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-[90vw] max-w-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Alert</h2>
        <p className="text-gray-600">{message}</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={closeModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {images.length > 1 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full"
          onClick={handlePrev}>
          <FaArrowLeft className="text-blue-500" />
        </button>
      )}
      <img
        src={images[currentIndex]}
        className="w-62 h-64 mx-auto rounded-lg object-cover"
      />
      {images.length > 1 && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-3 rounded-full"
          onClick={handleNext}>
          <FaArrowRight className="text-blue-500" />
        </button>
      )}
    </div>
  );
};

export const Post = () => {
  const { userData, setUserData } = MyAppContext();
  const [postContent, setPostContent] = useState("");
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [publicationDate, setPublicationDate] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    const media = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
    }));

    setSelectedMedia(media);
  };

  const handleSubmit = () => {
    if (!postContent && selectedMedia.length === 0) {
      openModal("Please enter some content or select a media.");
      return;
    }

    const newPost = {
      content: postContent,
      media: selectedMedia,
      date: publicationDate || new Date().toLocaleString(),
      user: {
        name: `${userData.firstName} ${userData.lastName}`,
        image: userData.profile,
      },
      isEditing: false,
      likes: 0,
      isLiked: false,
      comments: [],
    };

    setUserData((user) => {
      return { ...user, post: [...user.post, newPost] };
    });
    console.log("aaaaaaa", userData.post);

    setPostContent("");
    setSelectedMedia([]);
    setPublicationDate("");
  };

  const handleEditClick = (index) => {
    const updatedPosts = [...userData.post];
    updatedPosts[index].isEditing = !updatedPosts[index].isEditing;
    setUserData((user) => ({
      ...user,
      post: updatedPosts,
    }));
  };

  const handleDeleteClick = (index) => {
    const updatedPosts = userData.post.filter((_, i) => i !== index);
    setUserData((user) => ({
      ...user,
      post: updatedPosts,
    }));
  };

  const handleEditContentChange = (e, index) => {
    const updatedPosts = [...userData.post];
    updatedPosts[index].content = e.target.value;
    setUserData((user) => ({
      ...user,
      post: updatedPosts,
    }));
  };

  const handleLikeClick = (index) => {
    const updatedPosts = [...userData.post];
    if (updatedPosts[index].isLiked) {
      updatedPosts[index].likes -= 1;
    } else {
      updatedPosts[index].likes += 1;
    }
    updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
    setUserData((user) => ({
      ...user,
      post: updatedPosts,
    }));
  };
  const handleCommentSubmit = (index, comment) => {
    const updatedPosts = [...userData.post];
    updatedPosts[index].comments.push(comment);
    setUserData((user) => ({
      ...user,
      post: updatedPosts,
    }));
  };

  return (
    <>
      <div className="bg-white rounded-lg h-auto w-[100vw] md:w-[50vw] mt-2 shadow-md p-4 md:p-4 postt">
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
              onChange={handleContentChange}></textarea>
          </div>

          <div className="flex justify-between mt-2 ps-2">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                <FiImage color="#10d876" className="text-xl" />
                <span className="ps-1">Photo/video</span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleMediaChange}
                  multiple
                />
              </label>
              <label className="flex items-center space-x-1 text-gray-500 cursor-pointer">
                <FiCamera color="#fe9431" className="text-xl" />
                <span className="ps-1">Feeling/Activity</span>
              </label>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}>
              Post
            </button>
          </div>

          <div className="mt-4">
            {selectedMedia.length > 0 &&
            selectedMedia[0].type.startsWith("video/") ? (
              <video
                src={selectedMedia[0].url}
                controls
                className="w-90 mx-auto h-64 rounded-lg"
              />
            ) : (
              selectedMedia.length > 0 && (
                <ImageCarousel
                  images={selectedMedia.map((media) => media.url)}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {userData.post.map((post, index) => (
          <div
            key={index}
            className="  mb-4 bg-white rounded-lg h-auto w-[100vw] md:w-[50vw] mt-2 shadow-md p-4 md:p-4 ">
            <div className="flex items-center mb-2">
              <img
                src={userData.profile}
                alt="User"
                className="w-12 h-12 rounded-full mr-2"
              />
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
              <p className="text-gray-700 pb-5 pt-3 ps-3 content">
                {post.content}
              </p>
            )}

            {post.media.length > 0 &&
              (post.media[0].type.startsWith("video/") ? (
                <video
                  src={post.media[0].url}
                  controls
                  className="w-90 mx-auto h-72  rounded-lg mt-4"
                />
              ) : (
                <ImageCarousel images={post.media.map((media) => media.url)} />
              ))}

            <section className="CommentReact">
              <div className="flex gap-4 items-center justify-center mb-4 pt-10">
                <button
                  className="text-gray-500 hover:text-red-500 rounded-full pt-3"
                  onClick={() => handleLikeClick(index)}>
                  <FaHeart
                    className="text-xl"
                    color={post.isLiked ? "red" : "gray"}
                  />
                  <span className="ml-1">{post.likes}</span>
                </button>

                <div>
                  <input
                    type="text"
                    className="w-[35vw] bg-gray-50 p-2 border-1 border-gray-300 rounded-lg"
                    placeholder="Write a comment..."
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        handleCommentSubmit(index, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>

                <div className="flex gap-1 justify-end space-x-1">
                  <button
                    className="text-blue-500 rounded-full"
                    onClick={() => handleEditClick(index)}>
                    {post.isEditing ? (
                      <FiSave className="text-xl" />
                    ) : (
                      <FiEdit className="text-xl" />
                    )}
                  </button>
                  <button
                    className="text-gray-600 hover:text-red-500 rounded-lg"
                    onClick={() => handleDeleteClick(index)}>
                    <FiTrash className="text-xl" />
                  </button>
                </div>
              </div>

              <div>
                {post.comments.length > 0 && (
                  <ul className="flex flex-col justify-center items-center w-full">
                  {post.comments.map((comment, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-xs sm:text-sm mb-2 bg-gray-100 py-2 rounded-lg px-4 w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex items-center gap-3">
                      <img src={userData.profile} className="w-8 sm:w-10" alt="" />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm">{post.user.name}</p>
                        <p className="text-xs sm:text-sm">{comment}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                )}
              </div>
            </section>
          </div>
        ))}
        <div className="block md:hidden">
          {/* friend */}
          <div className=" mx-auto ms-10 flex  items-center mb-3">
            <div className="w-[320px] rounded-lg flex flex-col gap-3 py-2 border bg-white dark:border-gray-500 dark:bg-gray-800">
              <div className="flex items-center justify-between p-4 dark:text-white">
                <h4>Friends Request</h4>
                <FiInfo className="text-gray-500" />
              </div>
              <div className="w-full flex ps-5 gap-2 px-2">
                <img
                  src={Images.notuser2}
                  alt="User profile"
                  className="w-[3.4rem] h-[3.4rem] rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">
                    Ethiopian Airlines
                  </h4>
                  <h6 className="text-sm text-gray-400 dark:text-gray-400">
                    Airlines and Aviation
                  </h6>

                  <div className="w-fit  flex justify-center items-center bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
                    <h5 className="text-white">Follow</h5>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-2 ps-5 px-2">
                <img
                  src={Images.notuser1}
                  alt="User profile"
                  className="w-[3.4rem] h-[3.4rem] rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">
                    Eyasu Abera
                  </h4>
                  <h6 className="text-sm text-gray-400 dark:text-gray-400">
                    System Administrator
                  </h6>

                  <div className="w-fit  flex justify-center items-center  bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
                    <i className="fa fa-lock" aria-hidden="true" />
                    <h5 className="text-white">Follow</h5>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-2 ps-5 px-2">
                <img
                  src={Images.notuser3}
                  alt="User profile"
                  className="w-[3.4rem] h-[3.4rem] rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-md text-gray-800 font-semibold dark:text-gray-200">
                    Google
                  </h4>
                  <h6 className="text-sm text-gray-400 dark:text-gray-400">
                    Software Development
                  </h6>

                  <div className="w-fit  flex justify-center items-center  bg-blue-600 my-2 py-1 px-5 rounded-full dark:border-gray-200 dark:text-white">
                    <i className="fa fa-lock" aria-hidden="true" />
                    <h5 className="text-white">Follow</h5>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-1 px-4 pb-2 justify-between items-center">
                <Link to="/friend_request">
                  <h6 className="text-md text-gray-700  dark:text-gray-400">
                    View all
                  </h6>
                </Link>
                <FaArrowRight className="text-gray-600" />
              </div>
            </div>
          </div>
          {/* suggest pages */}
          <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-700 font-semibold">Suggest Pages</h2>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                See all
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src={Images.imggrp2}
                  className="w-full h-36 object-cover rounded-lg mb-3"
                />
                <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-600 py-2 rounded-full hover:bg-gray-300 transition-all">
                  <FiExternalLink />
                  Like Page
                </button>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src={Images.imggrp1}
                  className="w-full h-36 object-cover rounded-lg mb-3"
                />
                <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-600 py-2 rounded-full hover:bg-gray-300 transition-all">
                  <FiExternalLink />
                  Like Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        message={modalMessage}
      />
    </>
  );
};