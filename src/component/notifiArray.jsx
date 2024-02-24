import one from "../assets/avatar-mark-webber.webp";
import two from "../assets/avatar-angela-gray.webp";
import three from "../assets/avatar-jacob-thompson.webp";
import four from "../assets/avatar-kimberly-smith.webp";
import five from "../assets/avatar-nathan-peterson.webp";
import six from "../assets/avatar-anna-kim.webp";
import chess from "../assets/image-chess.webp";
import message from "../assets/avatar-rizky-hasanuddin.webp";



export const NotifiArray = [
    {
      id: 1,
      img: one,
      name: "Mark Webber",
      title: "reacted to your recent post",
      text: "My first tournament today",
      time: "1m ago",
      type: "unread",
    },
    {
      id: 2,
      img: two,
      name: "Angela Gray",
      title: "followed you",
      text: "",
      time: "5m ago",
      type: "unread",
    },
    {
      id: 3,
      img: three,
      name: "Jacob Thompson",
      title: "has joined yur gorup",
      text: "Chess club",
      time: "1day ago",
      type: "unread",
    },
    {
      id: 4,
      img: message,
      name: "Kimberly Smith",
      title: "Send you a private message",
      text: "",
      time: "5days ago",
      message: "Hello, thanks for setting up the chess club. I have been a member for a few weeks now and i'm having lots of fun and improving my game.",
      type: "picture",
    },
    {
      id: 5,
      img: four,
      img2: chess,
      name: "Kimberly Smith",
      title: "commented on your picture",
      text: "",
      time: "1week ago",
      type: "picture",
    },
    {
      id: 6,
      img: five,
      name: "Nathan Peterson",
      title: "reacted to your recent post",
      text: "5 end-game strategies to increase your win rate",
      time: "2weeks ago",
      type: "read",
    },
    {
      id: 7,
      img: six,
      name: "Anna Kim",
      title: "left the group",
      text: "Chess Club",
      time: "2weeks ago",
      type: "read",
    },
  ];