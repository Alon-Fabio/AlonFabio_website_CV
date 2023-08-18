# ToDo:

### (23.03.23) important: MAKE IT WORK AND LAUNCH IT!

- style

  1. ~~new color scheme 60-30-10 rule~~
  2. ~~remove one font style (the curvy one)~~

- ~~Make a working greeting Hero component.~~

- ~~Split site to Pro/Per~~
- ~~PerPro~~

  1. ~~For Pro App will load Services, Sample Project/s Connect and Switch to Per.~~
  2. ~~For Per App will load Photography, Graphics, Connect and Switch to Per.~~
  3. Add about page to Per and Pro.

- Photography file:

  1. ~~Update file name to Gallery.~~
  2. ~~Make it work for all types of libraries.~~
  3. ~~Write a useEffect to fetch and display the data.~~
  4. ~~Make it look good with a Library (for now). <!-- Sometime fast is beater -->~~
  5. ~~Break it to smaller components.~~
  6. Handle loading.
  7. ~~Server: reorganize and improve for logic and readability.~~
  8. ~~if no problem! Register with Multitasker > copy pass and hash > change the seed of admin to new pass.~~
  9. ~~Remove useTransition form Gallery fetch. Use a useState for isPending.~~

- Foundation:

  ~~- Routing~~

  ~~1. Return to start of page on load.~~

#### Dynamic

- NavBar

  1. Create an option for dropdown menu.
  2. create Gallery > Photos > Graphics.

- Contact Form, fetch

  1. Check to see that the message has been received (200)
  2. Make: Page component.

- Storing and serving data: **Finished** >> Cloudinary: image files.

  1. Find the best way (functional, cost) to store and serve your data (files, photos, documentation), and upload to it.
  2. Think and construct the best way to serve that data to the user.
  3. Code/build it....
  4. Think and construct the best way to upload data to that storage.
  5. Cloudinary is very good at storing and fetching my data.
  6. I will not be using the package, it's too big.

- Clean all unused files.

- Fadminbio:

  1. Create a better schema and turn it into a component.
  2. Show gallery data.
  3. Edit gallery data. (you can add descriptions to images).

##### Performance:

- ~~Responsive img tags: Add srcset with a list of smaller images (source (Make Your Site Lightning Fast With Responsive Images)[https://www.youtube.com/watch?v=fp9eVtkQ4EA&ab_channel=WebDevSimplified])~~

#### Style

- If (max-width > 1800px) make Nav go to the side.

- MAIN page at 712vw over flowing FIXXXXXXXXXXXXXXXXXXXXXXXX it! **No need, going to change is all**

# Did:

# Try:

1. Card animation affect:
   > A colored frame and shadow, spinning in a cool animation.
   > [CodePen](https://codepen.io/gayane-gasparyan/pen/jOmaBQK)

#### 27.11.22

Replace the flex setting on the li to grid.

---

#### 18.7.22

ModalBase:

- propType and ts problem at the declaration of propType.

  > Fixed: Updated the PropTypes to match the TypeScript, and the component needs. 19.7.22

* index.tsx:
  ts needs a check on the HTML tags for the react app and modal. It's a great opportunity to do a "opes, React failed" page.

---

#### 18.7.22

upgraded:

1. react & react-dom ^18
2. @types/react & react-dom ^18
3. typescript ^7

---

#### 01.05.23

1. installed react-image-gallery.
2. Fixed CSS non-specific tags (nav, button).
3. New component Gallery, shoes all img files.

---

#### 04.05.23

1. ModalBase has been updated, and improved to detect "esc" key, and now has a closeModalTimeOut prop to set if the modal will self close and how long will it take.

#### 28.05.23

1. Gallery comp is ready. Needs to be improved, but working great.

#### 21/6/23

1. Finished PageHero comp.
2. Improved the NavBar
3. Services: Adapted the new PageHero comp. ux update.

#### 18/08/23

1. Fetch url change to 'multitasker.alonfabio.com' instead of server IP.
