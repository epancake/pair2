## Barkwire Pairs

In this drill, you're going to pair up with a partner to knock out a story for BarkWire Pairs, a dating app for dogs.

## List Dogs

You have the ability to look at any individual dog at `http://localhost:3000/dogs/:id`, and you can add a dog at `http://localhost:3000/dogs/new`, but you can't list all of the dogs at `http://localhost:3000/dogs`.

You need to:

* Make an unordered list with a class of `dogs`
* Make a link with a class of `add` that links to the new dogs page
* Look up the list of dogs at `http://localhost:3000/api/dogs`
* For each dog in the list:
    * Build a list item for it
    * Give them an `h3` with the class of `name` that displays their name and links to their individual dog page
    * Display an image (give it a class of `profile-picture`) that displays their profile picture and has an alt tag of their name
    * Add the list item to your unordered list

## Instructions

* Pair with a partner
    * This should be a partner you haven't paired with on this set of drills before
    * One you should drive, and do all of the typing
    * The other should navigate and guide the driver
    * Set a timer and switch every 10 minutes
* `npm install` to install dependencies
* `npm run migrate && npm run seed` to setup the database
* `npm run dev` to run the server
* `npm test` to see the failing tests. For this exercise, if you make the `Multiple dog listing` test pass, all of the others should pass as well.
* Write enough code to make the tests pass.
* You shouldn't need to change anything in `migrations`, `seeds`, `stylesheets`, `images`, `cypress`, or `data`. You also shouldn't to change any of the `/api` routes.
* You're done when all of the tests pass. Both of you should submit a repo with the completed code. Enter your names [`HERE`] and [`HERE`]!
