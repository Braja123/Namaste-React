import React from "react";

const commentsData = [
  {
    name: "Sanu Das",
    text: "Your Videos are good",
    reply: [],
  },
  {
    name: "Dipa Das",
    text: "How are you",
    reply: [{ name: "Sanu Das", text: "Your Videos are good", reply: [
      {
        name: "Sanu Das",
        text: "Your Videos are good",
        reply: [{ name: "Sanu Das", text: "Your Videos are good", reply: []}],
      },
    ] }],
  },
  {
    name: "Dipa Das",
    text: "How are you",
    reply: [{ name: "Sanu Das", text: "Your Videos are good", reply: [] }],
  },
  {
    name: "Dipa Das",
    text: "How are you",
    reply: [{ name: "Sanu Das", text: "Your Videos are good", reply: [] }],
  },
  {
    name: "Dipa Das",
    text: "How are you",
    reply: [{ name: "Sanu Das", text: "Your Videos are good", reply: [] }],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex shadow-sm bg-grey-100 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
