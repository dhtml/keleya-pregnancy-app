# keleya-pregnancy-app

I made use of yarn as the package manager for this project

There are some external dependencies used that are worth mentioning

1. AppIntroslider
yarn add react-native-app-intro-slider
https://www.npmjs.com/package/react-native-app-intro-slider

This was used on the welcome screen to create the walkthrough sliders

2. Scalable Image
yarn add react-native-scalable-image
https://www.npmjs.com/package/react-native-scalable-image

This was used in some areas mainly because some images need scaling according to their aspect ratio.

3. Spin Picker
yarn add react-native-spin-picker
https://github.com/CampbellMG/react-native-spin-picker

This was used to select the workout duration.

I made a little patch inside
/node_modules/react-native-spin-picker/lib/components/Mask.js
which is to remove two lines causing a border
10 - borderTopWidth: isTop ? 0 : StyleSheet.hairlineWidth,
11 - borderBottomWidth: isTop ? StyleSheet.hairlineWidth : 0,
This does not fit the perfect UI bill but it will have to serve for now

4. validator
yarn add validator
This was used to see if the format of an email was valid

5. Checkbox
yarn add react-native-community/checkbox
This was used to create checkboxes on the registration page

6. Password toggle
The password component was recreated into typescript and I made some ammendments to this from the concept here : https://github.com/mdmoin7/react-native-hide-show-password
