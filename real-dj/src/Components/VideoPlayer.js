// import axios from 'axios';
import React, { useState } from 'react'
import VideoIframe from '../Components/VideoIframe'
import VideoCardsPlayer from '../Components/VideoCardsPlayer'
import Nav from './Nav'
import NavBarMiddle from '../Components/NavBarMiddle'
import './VideoPlayer.css'
import Wait from './Wait'

function VideoPlayer({
  videos,
  handleChange,
  handleSubmit,
  searchedString,
  userData,
  viewsFunc,
  getUserData,
  getaddToPlaylist,
  videoId,
}) {
  const [videoObject, setVideoObject] = useState({})

  console.log(userData)
  // console.log(videos[0] !== 'undefined')
  // const { id } = useParams()

  // This array will hold added videos as playlist.
  // let arrayPlaylist = [];
  // const [addVideo, setAddedVideo] = useState('')

  // This seState takes care of likes count. It will increament by 1 if Likes/thumbUp is clicked,
  // and decreamentby 1 if dislike/thumbDown is clicked.
  // const [likesDisLikeCount, setLikesDisLikeCount] = useState(0);

  // Increament likes count by 1
  // const increment = () => {
  //     likesDisLikeCount === 0 ? setLikesDisLikeCount(likesDisLikeCount + 1) : setLikesDisLikeCount(likesDisLikeCount);
  // }

  // icreament likes count by 1
  // const decrement = () => {
  //     likesDisLikeCount === 1 ? setLikesDisLikeCount(likesDisLikeCount - 1) : setLikesDisLikeCount(likesDisLikeCount);
  // }

  // // This function will add a video url to the array
  // let arrayPlaylistFunc = (id) => {
  //     arrayPlaylist.push(`https://www.youtube.com/watch_popup?v=${id}`)
  //     console.log(arrayPlaylist)
  // }

  // HandleChange on each keypress
  // const handleChange = (event) => {
  //     event.preventDefault();
  //     setSearchedString(event.target.value);
  // }

  // HandleSubmit submits the searchedString to the getSearchedData function when "the search icon is clicked"
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     getSearchedData(searchedString)
  //     setSearchedString('')
  // }

  // Let's use useEffect allow the API call once per call.
  // useEffect(() => {
  //     getSearchedData(searchedString)
  //     // setSearchedString(searchedString)
  // }, []);

  // Provide the searched string to the yotube API.
  // async function getSearchedData(searchedString) {

  //     const axios = require("axios");

  //     const options = {
  //         method: 'GET',
  //         url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  //         params: { q: searchedString },
  //         headers: {
  //             'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
  //             'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  //         }
  //     };

  //     axios.request(options).then(function (response) {
  //         setVideos(response.data.items)
  //         setSuggestedVodeos(response.data.refinements)
  //         // console.log(response.data);

  //     }).catch(function (error) {
  //         console.error(error);
  //     });
  // }

  // This function gets the serched id and pass it the function
  // useEffect(() => {
  //     getSearchedId(id)
  // }, [])

  // Provide the searched string to the yotube API.
  // async function getSearchedId(id) {

  //     const axios = require("axios");

  //     const options = {
  //         method: 'GET',
  //         url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
  //         params: { q: id },
  //         headers: {
  //             'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
  //             'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  //         }
  //     };

  //     axios.request(options).then(function (response) {
  //         setVideos(response.data.items)
  //         setSuggestedVodeos(response.data.refinements)
  //         // console.log(response.data);

  //     }).catch(function (error) {
  //         console.error(error);
  //     });
  // }

  const getVideoObject = (video) => {
    setVideoObject(video)
    console.log(videoObject)
  }

  return (
    <div className="video-player">
      <Nav
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchedString={searchedString}
        userData={userData}
        getUserData={getUserData}
      />
      {
        videos.length > 0 ?  <div className="VideoIframe-cards-container">
         <VideoIframe videos={videos} getVideoObject={getVideoObject} />
      {/* <NavBarMiddle
        videoObject={videoObject}
        viewsFunc={viewsFunc}
        getaddToPlaylist={getaddToPlaylist}
        videoId={videoId}
        userData={userData}
      /> */}
      <VideoCardsPlayer videos={videos} viewsFunc={viewsFunc} />
      </div> : <Wait />
      }


    </div>
  )
}

export default VideoPlayer
