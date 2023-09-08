import React from "react";

const commentsData = [
  {
    name: "Saurabh pande",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
  {
    name: "Saurabh pande",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
  {
    name: "Saurabh pande",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [
      {
        name: "Saurabh pande",
        text: "Lorem iipsum doldfj jlj dfdj",
        replies: [
          {
            name: "Saurabh pande",
            text: "Lorem iipsum doldfj jlj dfdj",
            replies: [
              {
                name: "Saurabh pande",
                text: "Lorem iipsum doldfj jlj dfdj",
                replies: [
                  {
                    name: "Saurabh pande",
                    text: "Lorem iipsum doldfj jlj dfdj",
                    replies: [],
                  },
                  {
                    name: "Saurabh pande",
                    text: "Lorem iipsum doldfj jlj dfdj",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Saurabh pande",
        text: "Lorem iipsum doldfj jlj dfdj",
        replies: [],
      },
    ],
  },
  {
    name: "Saurabh pande",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
];

//COMMENT:[SIGLE COMMENT]
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-200 rounded-lg my-4'>
      <img
        className='w-11 h-11'
        alt='user'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBE57bRxs00n86wy61CTOdCnBAs8AFZOsOThZz4Q&s'
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div>
      {/* SINGLE COMMENT */}
      <Comment key={i} data={comment} />
      {/* It's Specilly for showing Reply(CHILDREN) */}
      <div className='pl-10 border border-l-black ml-5'>
      {/* RECURSION */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      {/*Below one for SINGLE COMMENT INFO  */}
      {/* <Comment data={commentsData[0]} /> */}

      {/*Below one for MULTI COMMENT INFO  */}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
