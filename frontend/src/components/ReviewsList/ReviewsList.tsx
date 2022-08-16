import React, { FC, useEffect } from 'react';
import { Comment, List, Rate, Tooltip } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllReviews } from '../../store';
import './ReviewsList.css';

const ReviewsList: FC = () => {
  const { reviews } = useAppSelector((state) => state.reviewReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllReviews());
  }, []);

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
      header={'Відгуки'}
      itemLayout="horizontal"
      dataSource={reviews}
      renderItem={(item) => (
        <li>
          <Comment
            // actions={<span key="comment-list-reply-to-0">Reply to</span>}
            author={item?.user?.name}
            avatar={'https://joeschmoe.io/api/v1/random'}
            content={
              <div className={'comment-content-wrapper'}>
                <p>{item.body}</p>
                <div>
                  <b>{item.restaurant?.name}</b>
                  <Rate disabled defaultValue={item.rating} />
                </div>
              </div>
            }
            datetime={
              `${new Date(item.createdAt).toLocaleDateString('uk-UA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}` +
              ' ' +
              `${new Date(item.createdAt).toLocaleTimeString()}`
            }
          />
        </li>
      )}
    />
  );
};

export { ReviewsList };
