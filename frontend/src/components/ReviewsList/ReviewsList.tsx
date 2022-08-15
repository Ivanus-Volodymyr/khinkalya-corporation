import React, { FC, useEffect } from "react";
import { Comment, List, Tooltip } from 'antd';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAllReviews } from "../../store";


const ReviewsList:FC = () => {
  const {reviews} = useAppSelector(state => state.reviewReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  },[])

  // const data = [
  //   {
  //     actions: [<span key="comment-list-reply-to-0">Reply to</span>],
  //     author: 'Han Solo',
  //     avatar: 'https://joeschmoe.io/api/v1/random',
  //     content: (
  //       <p>
  //         We supply a series of design principles, practical patterns and high quality design
  //         resources (Sketch and Axure), to help people create their product prototypes beautifully and
  //         efficiently.
  //       </p>
  //     ),
  //     datetime: (
  //       <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
  //         <span>{moment().subtract(1, 'days').fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  // ];

  return (
      <List
        className="comment-list"
        header={`${reviews?.length} replies`}
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={item => (
          <li>
            <Comment
              // actions={<span key="comment-list-reply-to-0">Reply to</span>}
              author={item?.user?.name}
              avatar={'https://joeschmoe.io/api/v1/random'}
              content={<p>`${item.body}`</p>}
              datetime={item.createdAt}
            />
          </li>
        )}
      />

  );
};

export { ReviewsList };
