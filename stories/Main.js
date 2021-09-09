import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('Full Header', module)
  .add('with title', () => (
    <FullHeader title="My awesome title" />
  ))
  .add('with title and subtitle', () => (
    <FullHeader
      title="My awesome title"
      subtitle="My subtitle"
    />
  ))
  .add('with title, subtitle and bgColor', () => (
    <FullHeader
      title="My awesome title"
      subtitle="My subtitle"
      bgcolor="#3299BB"
    />
  ))
  .add('with title, subtitle, bgColor and textColor', () => (
    <FullHeader
      title="My awesome title"
      subtitle="My subtitle"
      bgColor="#3299BB"
      textColor="#FF9900"
    />
  ))
  .add('with title, subtitle, bgColor, textColor and font', () => (
    <FullHeader
      title="My awesome title"
      subtitle="My subtitle"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  ))
  .add('with title, subtitle and bgImg', () => (
    <FullHeader
      title="My awesome title"
      subtitle="My subtitle"
      bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  ))
  .add('with title, subtitle and video', () => (
    <FullHeader
        title="My awesome title"
        subtitle="My subtitle"
        bgColor="#EBE9EB"
        textColor="#3299BB"
        video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
    />
  ));
