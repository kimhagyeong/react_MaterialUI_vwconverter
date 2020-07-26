# react_MaterialUI_vwconverter
#react#MaterialUI#containerComponent#WhenScreenWidthOver1920px#transform"vw"


<br />
<br />

materialUI의 container 에 maxWidth="xl"로 넣을 경우 로직은 다음과 같다.<br />
화면 너비가 1920px이하일때는 width가 100%이지만 화면 너비가 그 이상일 때는 container의 너비가 1920px로 한정되고 그 마진이 유동적으로 생긴다.<br />
container 안에 div를 채울때 width="100%"로 넣으면 상관이 없지만<br/>
가끔 그 안에 넣는 div가 "vw"단위를 사용하는 경우가 있다. 그럴 때는 너비가 1920px이하일 때는 조금의 오차가 생기지만 그 이상일 때는 상당히 깨짐을 확인할 수 있다.
<p float:"left"> 
<img src="https://user-images.githubusercontent.com/31887934/88482332-849d4000-cf9b-11ea-94a6-c8233de96192.png" width="45%">
<img src="https://user-images.githubusercontent.com/31887934/88482566-080b6100-cf9d-11ea-9039-d074144fb744.png" width="45%">
</p>
materailUI container 안에 vw를 넣어도 자연스럽게 100%를 적용한 것 같이 표현하는 것이 본 프로젝트의 목표이다.
<p float:"left"> 
<img src="https://user-images.githubusercontent.com/31887934/88482719-232aa080-cf9e-11ea-9f9c-c217585f62a1.png" width="45%">
<img src="https://user-images.githubusercontent.com/31887934/88482735-47867d00-cf9e-11ea-8d71-9d87c0cd2dd6.png" width="45%">
<img src="https://user-images.githubusercontent.com/31887934/88482755-6422b500-cf9e-11ea-877a-bc4faef3086e.png" width="45%">
</p>

<br />
<p float:"left"> 
<img src="https://user-images.githubusercontent.com/31887934/88482765-76045800-cf9e-11ea-879c-4a4f840c28b1.png" width="45%">
<img src="https://user-images.githubusercontent.com/31887934/88482766-7997df00-cf9e-11ea-94a2-14c49db8f665.png" width="45%">
</p>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<hr />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
