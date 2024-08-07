Lauren Lee, Aniketh Malyala, Raymond Hou, Grady Yu

## building the app using xcode

go to root of terminal

sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
npx react-native init HandsomeDanTracker --version 0.68.0
cd HandsomeDanTracker
cd ios

---installing pods / cocoapods--
pod install
OR
sudo gem install cocoapods

Run app:
npx react-native start
npx react-native run-ios

useful link: https://medium.com/swlh/creating-an-application-with-react-native-f31f9a6f2859

--
what worked for raymond in the end
--

1. go to root directory
2. npm install -g react-native-cli
3. npx react-native init HandsomeDanTracker (idk if this is needed cuz i don't use this directory later)
4. cd HandsomeDanTracker
5. sudo gem install cocoapods
6. npm i
7. (useful bit prolly starts here) npx react-native@latest init hd
8. press y
9. if prompted to install cocoapods here, press y (still gonna install it manually again later)
10. cd hd
11. cd ios
12. pod install
13. npx react-native start
14. press i for ios dev
15. open new terminal window
16. in new window, go to hd directory (don't go into ios directory)
17. make sure using compatible node.js version (nvm ls to see installed versions, nvm use [version] to switch to a dfif version, nvm install [version] if don't have)
18. npx react-native run-ios
19. make sure ur ios version on XCode Simulator app is 17.5 (for now it works, might need to be updated for future notice)

## authentication

CAS stands for Central Authentication System. When creating apps for this course, you may find the need to authenticate students using Yale's CAS (ex. CourseTable). This example project uses Yale CAS to implement a simple sign-in/sign-out.

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
<img width="800" alt="Screen Shot 2022-02-13 at 9 56 36 PM" src="https://user-images.githubusercontent.com/45532884/155866756-e8ab26ba-6935-45f4-965b-730ab9b0a6df.png">
<img width="800" alt="Screen Shot 2022-02-13 at 9 56 46 PM" src="https://user-images.githubusercontent.com/45532884/155866759-02fdf26d-a2f9-41b8-9ec3-e641d4916f19.png">
<img width="800" alt="Screen Shot 2022-02-13 at 9 56 46 PM" src="https://user-images.githubusercontent.com/45532884/155866760-62be962c-3fa4-4a29-b6fd-d5a8114a14dd.png">
</div>

## Running This App Locally

To run this app locally, there are some prerequisites:

- [Node v16.14](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

Once you installed all the stuff above, follow these directions:

1. Run `yarn install:all`. This will install all of the necessary npm packages.
2. Open another terminal window and run `yarn dev:server`. This will run the REST API on port `4000`.
3. Open another terminal window and run `yarn dev:client`. This wll serve the client on port `3000`.

After completing the steps above, you should be able to go to `http://localhost:3000` on your browser and see the app.

## Acknowledgements

Quick thanks to the developers of [CourseTable](https://www.coursetable.com/) for making their fork of [`sadne/passport-cas`](https://github.com/sadne/passport-cas) open-source! If you want to see Yale CAS auth implementation in a production app, check out the [CourseTable monorepo](https://github.com/coursetable/coursetable).
