import React from 'react';
import "../Styles/EventsCon.css";

function EventsCon() {
  return (
    <div className='event_sec'>
       <p className='evntsec_heading'><span className='red'>UPCOMING</span> EVENTS</p>
       <div className="parent">
        <div className="column">
            <article className="post">
                <div className="post__content-wrap">
                    <div className="post__content">
                        <p className="post_title">
                            The Beirut Bank Job
                        </p>
                        <br />
                        <div className="post__description__light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod, commodi dolor accusamus eligendi enim, quae odio obcaecati beatae earum saepe repellat debitis est, tempora fugit rerum doloribus odit quaerat.
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div className="column">
            <article className="post">
                <div className="post__content-wrap">
                    <div className="post__content">
                        <p className="post_title">
                            The Beirut Bank Job
                        </p>
                        <br />
                        <div className="post__description__light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quod, commodi dolor accusamus eligendi enim, quae odio obcaecati beatae earum saepe repellat debitis est, tempora fugit rerum doloribus odit quaerat.
                        </div>
                    </div>
                </div>
            </article>
        </div>
       
        
       </div>

    </div>
  )
}

export default EventsCon;