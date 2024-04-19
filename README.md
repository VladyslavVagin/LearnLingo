<font size="36">**LearnLingo App**</font> - An application for a company that offers the services of language teachers online. The application consists of 3 pages: 
- Home -  page with a list of company advantages and a call-to-action button that redirects to the "Teachers" page.
- Teachers - page, which includes a list of teachers that users can filter by language of instruction, level of students' knowledge, the students the teacher works with, and the price per hour of the lesson.
- Favorites - A private "Favorites" page with teachers added by the user to their "favorites".
In header user can register, login , change palitra of app and navigate by nav.menu.

**App created by using:** React.js, Firebase (real-time database and authentication), JavaScript, Styled-Components

**Layout** - https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?type=design&node-id=0-1&mode=design&t=RNSOrAftgyeH8Vzo-0

**Tech.requirements (in Ukrainian language)** - https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit

**Technical Task**
1. Utilize firebase_DB to add authentication capabilities to the application (registration, login, retrieving current user data, logout).
2. Implement a registration/authentication form and minimal validation of its fields using formik & yup. All fields are mandatory. The modal window with the form should close by clicking on the "close" button in the form of an "X", clicking on the backdrop, or pressing the Esc key.
3. Create a collection of teachers in the Realtime Database (by firebase) with the following fields: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, experience.
4. Implement a card with a description of the teacher's characteristics according to the layout.
On the "Teachers" page, 4 cards should be rendered initially, and the rest should be loaded upon clicking the "Load more" button, triggering a request to the database to display a new batch of cards.
When clicking on the "heart" button:
   - For unauthorized users, a modal window or push notification should appear indicating that this functionality is only available to authorized users.
   - For authorized users, the card should be added to the favorites list (using localStorage or Firebase's user collection), and the color of the "heart" button should change.
When an authorized user refreshes the page, the final user actions should be preserved. Therefore, if a teacher's card is added to favorites and the page is refreshed, the button should remain in the "selected" state with the corresponding color.
Upon a second click on the "heart" button, the card should be removed from the favorites list, and the button color should revert to its initial state.
Clicking the "Read more" button should expand the card to show more detailed information about the teacher, including feedback from students.
Clicking the "Book trial lesson" button should open a modal window with a form for booking a trial lesson. The form and basic validation of its fields should be implemented using formik & yup, with all fields being mandatory.
The modal window should close when clicking the "close" button, clicking on the backdrop, or pressing the Esc key.
For an authorized user, there is a private "Favorites" page where the user can view all teacher cards they have added to their favorites. The page should be styled similarly to the "Teachers" page.
