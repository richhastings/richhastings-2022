import React from 'react'

import GitHubSVG from '../../asset/icon/github.svg'
// import TwitterSVG from '../../asset/icon/twitter.svg'
// import InstagramSVG from '../../asset/icon/instagram.svg'

import styles from './Home.module.scss'

const Home = () => (
  <>
    <div className={styles.Content}>
      <h1>Hi, I'm Rich.</h1>
      <h2>An experienced Front-end Engineer from Sherwood Forest, UK.</h2>
    </div>
    <div className={styles.Social}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/richhastings"
      >
        <GitHubSVG />
      </a>
      {/* <a href="https://twitter.com/sheffieldcoder">
        <TwitterSVG />
      </a>
      <a href="https://www.instagram.com/thesheffieldcoder/">
        <InstagramSVG />
      </a> */}
    </div>
  </>
)

export default Home
