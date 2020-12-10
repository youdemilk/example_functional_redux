import React, { useState, useEffect } from "react";
import CustomButton from "../../components/customButton";
import {
  fetchComments,
  fetchCommentsUpdateAction,
  fetchPosts,
  fetchPostsUpdateAction,
  saveCurrentSuccessAction,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getCounter, getPosts } from "../../selectors";
import "./styles.css";

const MainPage = (props) => {
  const dispatch = useDispatch();

  const { counter: initialCounter } = useSelector(getCounter);
  const posts = useSelector(getPosts);
  const comments = useSelector(getComments);

  const [counter, setCounter] = useState(initialCounter);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, []);

  useEffect(() => {
    dispatch(fetchPostsUpdateAction());
    dispatch(fetchCommentsUpdateAction());
  }, [dispatch]);

  const tick = () => {
    setDate(new Date());
  };

  const saveToRedux = (counterValue) =>
    dispatch(saveCurrentSuccessAction({ counter: counterValue }));

  const increaseValue = () => {
    setCounter(counter + 1);
    saveToRedux(counter + 1);
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      saveToRedux(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
    saveToRedux(0);
  };

  const buttonValues = [
    {
      id: 0,
      buttonText: props.increaseButtonText,
      onClickButton: increaseValue,
      buttonStyle: { backgroundColor: "#ff0000" },
    },
    {
      id: 1,
      buttonText: props.decreaseButtonText,
      onClickButton: decreaseValue,
      buttonStyle: { backgroundColor: "#db7093" },
    },
    {
      id: 2,
      buttonText: props.resetButtonText,
      onClickButton: resetValue,
    },
  ];

  const RenderButtons = () =>
    buttonValues.map((item) => {
      return (
        <CustomButton
          key={item.id}
          buttonText={item.buttonText}
          onClickButton={item.onClickButton}
          buttonStyle={item.buttonStyle}
        />
      );
    });

  const RenderPosts = () =>
    posts.map((post) => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });

  const RenderComments = () =>
    comments.map((comment) => {
      return (
        <div key={comment.id}>
          <div>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
          </div>
          <p>{comment.body}</p>
        </div>
      );
    });

  return (
    <div className={"main-div"}>
      <p>{props.mainText}</p>
      <div className={"buttons"}>
        <RenderButtons />
      </div>
      <h1>Your changed value is {counter}</h1>
      <h1>{date.toLocaleTimeString()}</h1>
      <RenderPosts />
      <RenderComments />
    </div>
  );
};

export default MainPage;
