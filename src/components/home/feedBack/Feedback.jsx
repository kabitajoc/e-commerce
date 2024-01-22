import React from "react";
import "./Feedback.css";
import feedbackImg from "../homeImages/feedback.png";
import feedbackImg1 from "../homeImages/feedback1.png";
import feedbackImg2 from "../homeImages/feedback2.png";
function Feedback() {
  const feedbacks = [
    {
      id: 26,
      image:  feedbackImg ,
      name: "Floyd Miles",
      about:
        " Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 27,
      image: feedbackImg1 ,
      name: "Ronald Richards",
      about:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 28,
      image:  feedbackImg2 ,
      name: "Savannah Nguyen",
      about:
        " do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <>
      <h3>Feedback</h3>
      <div className="feedback-cards">
        {feedbacks.map((feedbackCard) => {
          return (
            <div className="feedback-card" key={feedbackCard.id}>
              <div className="feedback-image">
                <img src={feedbackCard.image} />
                <div className="feedback-stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                      fill="#EDD146"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                      fill="#EDD146"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z"
                      fill="#EDD146"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.6882 9.12325L14.7398 8.52407L12.0242 2.12646L9.30857 8.53374L2.36011 9.12325L7.63669 13.6943L6.05178 20.4882L12.0242 16.8835L17.9966 20.4882L16.4213 13.6943L21.6882 9.12325ZM12.0242 15.0763V6.08873L13.6767 9.99301L17.9096 10.3602L14.7011 13.1435L15.6675 17.2797L12.0242 15.0763Z"
                      fill="#EDD146"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.7476 9.12325L14.7991 8.52407L12.0835 2.12646L9.36789 8.53374L2.41943 9.12325L7.69601 13.6943L6.11111 20.4882L12.0835 16.8835L18.0559 20.4882L16.4806 13.6943L21.7476 9.12325ZM12.0835 15.0763L8.44981 17.2701L9.41621 13.1338L6.20775 10.3506L10.4406 9.98335L12.0835 6.08873L13.7361 9.99301L17.9689 10.3602L14.7604 13.1435L15.7268 17.2797L12.0835 15.0763Z"
                      fill="#EDD146"
                    />
                  </svg>
                </div>
              </div>
              
                <h4>{feedbackCard.name}</h4>
                <p>{feedbackCard.about}</p>
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Feedback;
