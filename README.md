# React full header
a full-screen header react component [![Build Status](https://app.travis-ci.com/adamsalves/react-full-header.svg?branch=main)](https://app.travis-ci.com/adamsalves/react-full-header)
## Demo

[Live examples](https://adamsalves.github.io/react-full-header)

## Installation

```sh
$ npm install --save react-full-header-ad
```

## Basic Usage

```jsx
import FullHeader from 'react-full-header';

...
render() {
    return (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            video="videos/my_video.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyeft/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](https://github.com/adamsalves/react-full-header/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/adamsalves/react-full-header/blob/master/LICENSE.md) @ [adamsalves](https://adamsalves.com.br/)
