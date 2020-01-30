import React, { Component } from 'react'
import '../App.css';
import { Button, Icon, Image } from '../../node_modules/antd';
import img from './image/Capture.PNG';

export const Body = () => {

    return (
        <body className="body font">
            <div>- HTML : Hypertext: A software system that links topics on the screen to related information and graphics, which are typically accessed by a point-and-click method.</div>
            <div className="font-size">Document Object Model</div>
            <div className="sec">
                <div><img src={img} /></div>
                <div className="sec2 "><div>- An HTML element includes both the HTML tag and everything between the tag (the content).</div>
                    <div>- Tags normally come in pairs. The first tag is the start tag, and the second tag is the end tag.</div>
                    <div>- HTML has a defined set of tag names (also called keywords) that the browser understands.</div>
                    <div>- Most elements can have attributes, which provides additional information about the element</div>
                </div>
            </div>
            <Button shape="circle" onClick={() => alert('Thank you so much')}  ><Icon type="heart" /></Button>

        </body >
    )
}
