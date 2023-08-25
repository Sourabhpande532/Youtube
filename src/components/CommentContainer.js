import React from "react";

const commentsData = [
  {
    name: "Akshay Saine",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
  {
    name: "Akshay Saine",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
  {
    name: "Akshay Saine",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [
      {
        name: "Akshay Saine",
        text: "Lorem iipsum doldfj jlj dfdj",
        replies: [
          {
            name: "Akshay Saine",
            text: "Lorem iipsum doldfj jlj dfdj",
            replies: [
              {
                name: "Akshay Saine",
                text: "Lorem iipsum doldfj jlj dfdj",
                replies: [
                  {
                    name: "Akshay Saine",
                    text: "Lorem iipsum doldfj jlj dfdj",
                    replies: [],
                  },
                  {
                    name: "Akshay Saine",
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
        name: "Akshay Saine",
        text: "Lorem iipsum doldfj jlj dfdj",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saine",
    text: "Lorem iipsum doldfj jlj dfdj",
    replies: [],
  },
];


const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
    </div>
  );
};

export default CommentContainer;
