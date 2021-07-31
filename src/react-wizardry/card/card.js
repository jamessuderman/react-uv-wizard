import React, { useRef } from 'react';
import * as styles from '../styles';

const Card = (props) => {
  const dotRef = useRef()
  let style = {
    ...styles.cardContainer,
    backgroundColor: props.background,
    color: props.color
  }

  if (props.shadow) {
    style = {
      ...style,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
    }
  }

  let position
  if (props.titlePosition) {
    switch (props.titlePosition) {
      case 'left':
        position = 'flex-start'
        break
      case 'center':
        position = 'center'
        break
      case 'right':
        position = 'flex-end'
        break
      default:
        break
    }
  } else {
    position = 'center'
  }

  const dots = []
  for (let i = 0; i < props.length; i++) {
    dots.push(
      <div
        key={i}
        style={{
          ...styles.dot,
          backgroundColor: props.color,
          opacity: i + 1 === props.current ? '1' : '.5'
        }}></div>
    )
  }

  const handleOver = (id) => {
    (document.getElementById(id)).style.opacity = 1;
  };

  const handleOut = (id) => {
    (document.getElementById(id)).style.opacity = .5;
  };

  return (
    <div style={style}>
      {props.title && (
        <div
          style={{...styles.titleContainer, justifyContent: position }}
        >
          {props.title}
        </div>
      )}

      <div style={styles.contentContainer}>{props.content}</div>

      <div style={styles.navContainer}>
        {props.current !== 1 ? (
          <span
            id={`leftArrow${props.identifier}`}
            style={styles.icon}
            onMouseOver={() => handleOver(`leftArrow${props.identifier}`)}
            onMouseOut={() => handleOut(`leftArrow${props.identifier}`)}
            onClick={() => {
              props.scroll('backward')
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        ) : (
          <span style={{ width: '50px' }} />
        )}

        {props.dots && (
          <div
            ref={dotRef}
            style={styles.dotContainer}
          >
            {dots}
          </div>
        )}

        {props.current !== props.length ? (
          <span
            id={`rightArrow${props.identifier}`}
            style={styles.icon}
            onMouseOver={() => handleOver(`rightArrow${props.identifier}`)}
            onMouseOut={() => handleOut(`rightArrow${props.identifier}`)}
            onClick={() => {
              props.scroll('forward')
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        ) : props.submit ? (
          <span
            id={`submit${props.identifier}`}
            style={styles.icon}
            onMouseOver={() => handleOver(`submit${props.identifier}`)}
            onMouseOut={() => handleOut(`submit${props.identifier}`)}
            onClick={() => {
              props.submit()
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        ) : (
          <span style={{ width: '50px' }} />
        )}
      </div>
    </div>
  )
}

export default Card
