 
# Pomodoro Timer


## Basic Functionality:

-   A Pomodoro Timer that implements a timer that alternates between focus and rest periods. Users can increase/decrease the focus and rest periods, and an alarm sounds off when the timer runs out. 

## Initial Screen

The initial screen lets the user set the length of the focus and break and break sessions.  [![Initial Screen](https://camo.githubusercontent.com/6722717f96e1babc291029b9b397f53598738db3de1414dea6093079d9583c59/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f30366464633662623066366235616464396462343431343437303030653539632d6f2d696e697469616c2d73637265656e2e706e67)](https://camo.githubusercontent.com/6722717f96e1babc291029b9b397f53598738db3de1414dea6093079d9583c59/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f30366464633662623066366235616464396462343431343437303030653539632d6f2d696e697469616c2d73637265656e2e706e67)

The "stop" button is disabled on the initial screen because the user has not yet started the timer.

When the user clicks the "play" button, the timer will always start a new focus session.

## [](https://github.com/nicpagan/Project_Pomodoro_Timer_Qualified_1#active-session-screen)Active Session Screen

After the user clicks the "play" button, the buttons to change the focus and break duration are disabled, and the session timer appears.  [![Active Session Screen](https://camo.githubusercontent.com/24559eabd80c9c107516aae26e81ebe5c3f2625ca2155c81cbff88b28e8ae887/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f35313762636561653335613561636636336662336432306362303437333363662d726f2d6163746976652d736573736f6e2e706e67)](https://camo.githubusercontent.com/24559eabd80c9c107516aae26e81ebe5c3f2625ca2155c81cbff88b28e8ae887/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f35313762636561653335613561636636336662336432306362303437333363662d726f2d6163746976652d736573736f6e2e706e67)  The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

## [](https://github.com/nicpagan/Project_Pomodoro_Timer_Qualified_1#paused-session-screen)Paused Session Screen

If the user clicks the "pause" button, "paused" appears below the time remaining.  [![Paused Session Screen](https://camo.githubusercontent.com/cd9982a9f5dfb4f26aeeab8623c3e1255088703b19e2436abd122629ff496998/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f65313739653730373531323438366131313066626462313535613738393762342d6f2d7061757365642d73657373696f6e2e706e67)](https://camo.githubusercontent.com/cd9982a9f5dfb4f26aeeab8623c3e1255088703b19e2436abd122629ff496998/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f7374726976652f696d6167652f75706c6f61642f775f313030302c685f313030302c635f6c696d69742f65313739653730373531323438366131313066626462313535613738393762342d6f2d7061757365642d73657373696f6e2e706e67)  The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

## Challenges:

This project allowed me to have a better understand of using the UseState() react hook and how to properly organize different components of a React application. 


## Technologies Used:

-   [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [React](https://reactjs.org/docs/introducing-jsx.html)
    -   [React Hooks](https://reactjs.org/docs/hooks-intro.html)
-   [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
-   [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Todo:
-    Create link to show webpage/deploy on Heroku
-   Features like new background and images
