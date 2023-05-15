# Word Frequency Histogram

This project is a React application that generates a histogram representing the frequency of the top 20 most occurring words in a excel file. It uses the PapaParse library for CSV parsing and the Chart.js library for data visualization.

# Getting Started

Step 1:- For creating a react.js app -> "npx create-react-app terriblytinytales" after that "cd terriblytinytales" then "npm start".

## Usage
1) Click the "Submit" button to fetch the text file containing the data.<br>
2) The application will process the text and generate a histogram showing the frequency of the top 20 most occurring words.<br>
3) You can hover over the bars in the histogram to view the exact frequency of each word.<br>
4) Click the "Export" button to download the histogram data as a CSV file.<br>

## Dependecies
The project uses the following dependencies:

1) React: A JavaScript library for building user interfaces.<br>
2) PapaParse: A library for parsing CSV data.<br>
3) Chart.js: A data visualization library for creating charts.<br>

## Folder Structure
The project structure is organized as follows:<br>

1) src: Contains the source code files.<br>
2) App.js: The main component that fetches and processes the data, and renders the histogram.<br>
3) App.css: The CSS styles for the application.<br>
4) index.js: The entry point of the application.<br>
5) public: Contains the public assets.<br>
6) index.html: The HTML template for the application.<br>

# Explaination of the components of the code 

 A) :-In the App.js file I have imported the neccessary modules :
1) useState from react is imported to manage component state.<br>
2) Papa is imported from papaparse for CSV parsing.<br>
3) Bar is imported from react-chartjs-2 for rendering the bar chart.<br>
4) ChartJS, CategoryScale, LinearScale, BarElement, and Title are imported from chart.js to customize and register chart elements.<br>
       
B) :- Defined the functional component App:<br>
1) State variables are declared using the useState hook<br>
2) data: Stores the data for the bar chart.<br>
3) show: Controls the display of the histogram section.<br>
4) loading: Indicates if the data is being loaded.<br>
            
C) :- An options object is defined to configure the chart's appearance.<br>

D) :- The fetchData function is declared as an asynchronous function.<br>
1) It sets the loading state to true to show the loading message.<br>
2) It fetches the data from the URL 'https://www.terriblytinytales.com/test.txt' using fetch and converts the response to text format.<br>
3) The text is processed to extract words by converting to lowercase, removing punctuation, splitting by whitespace, and filtering out empty words.<br>
4) The frequency of each word is counted and stored in the counts object.<br>
5) The words are sorted based on frequency in descending order.<br>
6) The top 20 words and their frequencies are extracted.<br>
7) The data for the chart is formatted as an object with labels and datasets.<br>
8) The formatted data is stored in the data state.<br>
9) The show state is set to false to display the histogram section.<br>
10) The loading state is set to false to hide the loading message.<br>

E) :- The exportData function is declared to handle the export functionality.<br>
1) It converts the data object to CSV format using Papa.unparse.<br>
2) It creates a Blob from the CSV data.<br>
3) It generates a URL for the Blob and creates a temporary anchor element to trigger the file download.<br>
4) The anchor element is appended to the document body, clicked programmatically, and then removed from the document.<br>

F) :- The component's JSX code defines the structure and layout of the application.<br>
1) The main container div has the class name 'main'.<br>
2) The submit button is rendered with a click event handler to fetch the data and a disabled state based on the loading variable.<br>
3) The histogram section is rendered when data is not null.<br>
4) The histogram contains a chart div with a title, the Bar component to display the chart using the data and options variables, and an export button with a click event handler to export the data.<br>
5) The component returns the JSX code inside the main container div.<br>

G) :- Open your browser and navigate to http://localhost:3000.

# Screenshots of the Project

### First Page of Project
![Screenshot (225)](https://github.com/Ujjwal7017/Terriby_Tiny_Tales/assets/73957886/c430cec4-3f69-4711-9ff9-cde7ba182ea3)


### After clicking on Submit Button
![Screenshot (226)](https://github.com/Ujjwal7017/Terriby_Tiny_Tales/assets/73957886/1605218a-e971-441c-a2ea-f60e20d33e72)

### After clicking on Export button
![Screenshot (227)](https://github.com/Ujjwal7017/Terriby_Tiny_Tales/assets/73957886/044c615d-0db5-4399-a825-0d64e147e550)

# Host Link
Host Link:- https://646216052f439100a8fb665a--thunderous-platypus-29584f.netlify.app/


