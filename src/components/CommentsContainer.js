const commentsData = [
  {
    name: "suchita",
    text: "you have hidden talent please keep it hidden",
    replies: [
      {
        name: "suchita",
        text: "you have hidden talent please keep it hidden",
      },
      {
        name: "suchita",
        text: "you have hidden talent please keep it hidden",
      },
      {
        name: "suchita",
        text: "you have hidden talent please keep it hidden",
      },
    ],
  },
  {
    name: "suchita",
    text: "you have hidden talent please keep it hidden",
    replies: [
      {
        name: "suchita",
        text: "you have hidden talent please keep it hidden",
      },
    ],
  },
  {
    name: "suchita",
    text: "you have hidden talent please keep it hidden",
  },
  {
    name: "suchita",
    text: "you have hidden talent please keep it hidden",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 rounded-lg my-2 ">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://freesvg.org/img/abstract-user-flat-3.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 ml-5 border border-l-black">
          {/* <Comment key={index} data={comment} /> */}
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;
