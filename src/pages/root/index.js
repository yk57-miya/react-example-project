import React, { Component } from 'react';
// import Button from '../../components/Button';
import ListItem from '../../components/ListItem';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.str = 'Hello World!!!';
    this.buttons = [
      {
        label: 'about',
        to: '/about'
      },
      {
        label: 'profile',
        to: '/profile'
      },
      {
        label: 'works',
        to: '/works'
      }
    ];

    this.worksItem = [
      {
        to: 'https://sp.akb48.co.jp/',
        image: 'akb48_mobile_01.png',
        name: 'AKB48 mobileサイト',
        description: 'サイト更新改修・ガシャ施策実装をメインで運用してました。季節のイベントごとに施策があり、だいたい月1本程度あります。'
      },
      {
        to: 'http://sp.hkt48.jp/',
        image: 'hkt48_mobile_01.png',
        name: 'HKT48 mobileサイト',
        description: 'サイト更新改修・ガシャ施策実装をメインで運用してました。季節のイベントごとに施策があり、だいたい月1本程度あります。'
      },
      {
        to: 'http://sp.nogizaka46.com/',
        image: 'nogizaka46_mobile_01.png',
        name: '乃木坂46 mobileサイト',
        description: 'サイト更新改修・ガシャ施策実装をメインで運用してました。季節のイベントごとに施策があり、だいたい月2本程度あり、大きなライブツアーに関連した施策いつも実装しているガシャに新しい機能の組み込んだりしてました。'
      },
    ];
  }

  getBackgroundHeight() {
    const bg1 = this.refs.backGround1;
    const bg2 = this.refs.backGround2;
    const window_h = window.parent.screen.height;
    const start_bg1 = window_h - bg1.offsetTop;
    const start_bg2 = window_h - bg2.offsetTop;
    document.addEventListener('scroll', function() {
      let scroll_y = window.pageYOffset;
      if (scroll_y >= start_bg1) {
        bg1.style.backgroundPositionY = `${-(scroll_y - bg1.offsetTop) * 0.2}px`;
      }
      if (scroll_y >= start_bg2) {
        bg2.style.backgroundPositionY = `${-(scroll_y - bg2.offsetTop) * 0.2}px`;
      }
    }, {passive: true});
  }

  componentDidMount() {
    this.getBackgroundHeight();
  }

  render() {
    return (
      <div className="Root">
        <h1 className="Root__Title">{this.str}</h1>
        <div className="Root__Contents">
          <div className="Root__MainVisual">
            <img src="./img/cat_4.jpg" alt="profile写真"/>
          </div>
          <div className="Root__Content">
            <div className="Root__Block">
              <h2 className="Root__SubTitle">Works</h2>
              <div className="Root__List">
                {
                  this.worksItem.map((item, i) => {
                    return <ListItem key={i} item={item} />;
                  })
                }
              </div>
            </div>
          </div>
          <div
            className="Root__Parallax Root__Parallax--pattern1"
            ref={'backGround1'}
          >
            <div className="Root__BackgroundMask">
              <div>背景パララックスエリア1</div>
            </div>
          </div>
          <div className="Root__Content">
            <div className="Root__Block">
              <h2 className="Root__SubTitle">Profile</h2>
            </div>
          </div>
          <div
            className="Root__Parallax Root__Parallax--pattern2"
            ref={'backGround2'}
          >
            <div className="Root__BackgroundMask">
              <div>背景パララックスエリア2</div>
            </div>
          </div>
          {/* <div className="Root__Buttons">
            {
              this.buttons.map((item, i) => {
                return <Button key={i} item={item} />;
              })
            }
          </div> */}
        </div>
      </div>
    );
  }
}
