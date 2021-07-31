# react-uv-wizard
## A simple react wizard that will create a card for each child passed in
***
|Prop|Value|
|:----|:----|
|background|string|
|color|string|
|shadow|boolean|
|dots|boolean|
|submit|function|
|titles|string[]|
|titlePosition|string|
***
# Instruction
### Wizard Component
* Built with React 17.0.2
* The wizard will take up 100% of its direct parent
### Background Prop
* Applies the provided color to the background color of the wizard cards
* Any CSS color format as a string (i.e. 'blue', '#3399ff')
### Color Prop
* Applies the provided color to the foreground elements (text, icons, and dots)
* Any CSS color format as a string (i.e. 'white', '#fff')
### Shadow Prop
* The shadow existence is truthy. Simply including the prop will apply a small drop shadow to the card, and not including it will not apply the shadow
### Dots Prop
* The dots existence is truthy. Simply including the prop will apply a series of dots at bottom center corresponding to the number of children/cards, and not including it will not apply the dots
* The dots will reflect which card you are on in the sequence
### Submit Prop
* The submit prop takes a callback function that will fire when the submit button is pressed
* The submit existence is truthy. Including the prop with a callback function will apply a submit button on the last card of the wizard, and not including it will not apply the submit button
### Titles Prop
* The titles prop takes an array of strings which will be applied to each card in the wizard in order
* The titles existence is truthy. Including the prop with the array will apply the titles, and not including it will not apply any headers to the cards
### Title Position Prop
* Indicates whether the title will be on the left, center, or right
* Only accepts 'left', 'center', or 'right'
***
# Usage
```
<ReactWizard
          background="#3399ff"
          color="white"
          shadow
          dots
          submit={() => alert("SUBMITTED")}
          titlePosition="right"
          titles={["Form 1", "Form 2", "Form 3", "Form 4"]}
        >
          <h1>CHILD ONE</h1>
          <h1>CHILD TWO</h1>
          <h1>CHILD THREE</h1>
          <h1>CHILD FOUR</h1>
</ReactWizard>
```

